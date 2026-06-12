// App Engine for Discrete Math 2 Quiz Review App

const STORAGE_KEYS = {
    USER_STATES: 'trr2_quiz_user_states',
    SESSION_ORDER: 'trr2_quiz_session_order',
    THEME: 'trr2_quiz_theme_mode',
    CURRENT_INDEX: 'trr2_quiz_current_index',
    OPTIONS_ORDER: 'trr2_quiz_options_order'
};

// --- COOKIE HELPERS ---
function setCookie(name, value, days = 365) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Strict";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Strict';
}

// --- STATE SERIALIZATION (Sparse representation for 4KB limit) ---
function serializeUserStates(states) {
    const parts = [];
    for (const [id, state] of Object.entries(states)) {
        let code = '';
        if (state.status === 'correct') {
            code += 'c' + (state.answer || '');
        } else if (state.status === 'incorrect') {
            code += 'w' + (state.answer || '');
        }
        if (state.flagged) {
            code += 'f';
        }
        if (code !== '') {
            parts.push(`${id}:${code}`);
        }
    }
    return parts.join(',');
}

function deserializeUserStates(str) {
    const states = {};
    questions.forEach(q => {
        states[q.id] = {
            status: 'unanswered',
            answer: null,
            flagged: false
        };
    });
    
    if (!str) return states;
    
    const parts = str.split(',');
    parts.forEach(part => {
        const [idStr, code] = part.split(':');
        const id = parseInt(idStr);
        if (!id || !code) return;
        
        let status = 'unanswered';
        let answer = null;
        let flagged = false;
        
        let remaining = code;
        if (remaining.startsWith('c')) {
            status = 'correct';
            answer = remaining.charAt(1);
            remaining = remaining.substring(2);
        } else if (remaining.startsWith('w')) {
            status = 'incorrect';
            answer = remaining.charAt(1);
            remaining = remaining.substring(2);
        }
        
        if (remaining.includes('f')) {
            flagged = true;
        }
        
        states[id] = { status, answer, flagged };
    });
    
    return states;
}

// Global App State
let questions = [];          // Original questions from questions.json
let sessionQuestions = [];   // Questions in active session order (shuffled)
let optionShuffles = [];     // Option permutations for each question (indexed by id - 1)
let currentIndex = 0;        // Index in sessionQuestions
let userStates = {};         // Map of question ID -> { status: 'correct'|'incorrect'|'unanswered', answer: string|null, flagged: boolean }
let activeFilter = 'all';

// DOM Elements
const sidebar = document.getElementById('sidebar');
const menuToggleBtn = document.getElementById('menuToggleBtn');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeToggleMobileBtn = document.getElementById('themeToggleMobileBtn');
const themeText = document.getElementById('themeText');
const resetSessionBtn = document.getElementById('resetSessionBtn');

const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const statCorrect = document.getElementById('statCorrect');
const statIncorrect = document.getElementById('statIncorrect');
const statFlagged = document.getElementById('statFlagged');

const searchInput = document.getElementById('searchInput');
const filterTabs = document.querySelectorAll('.filter-tab');
const questionGrid = document.getElementById('questionGrid');

const questionBadge = document.getElementById('questionBadge');
const categoryBadge = document.getElementById('categoryBadge');
const flagBtn = document.getElementById('flagBtn');
const flagText = document.getElementById('flagText');
const questionText = document.getElementById('questionText');
const imageWrapper = document.getElementById('imageWrapper');
const questionImage = document.getElementById('questionImage');
const imageLoader = document.getElementById('imageLoader');

const choiceButtons = document.querySelectorAll('.choice-btn');
const feedbackArea = document.getElementById('feedbackArea');
const feedbackBanner = document.getElementById('feedbackBanner');
const feedbackMessage = document.getElementById('feedbackMessage');
const explanationPanel = document.getElementById('explanationPanel');
const solutionText = document.getElementById('solutionText');
const tipText = document.getElementById('tipText');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// --- INITIALIZATION ---
async function initApp() {
    setupTheme();
    setupEventListeners();
    
    try {
        // Load questions database
        const response = await fetch('questions.json');
        if (!response.ok) throw new Error("Failed to load questions.json");
        questions = await response.load ? await response.load() : await response.json();
        
        // Load or initialize user states & session order
        loadUserData();
        
        // Render UI
        renderQuestionGrid();
        renderActiveQuestion();
        updateStats();
        
    } catch (err) {
        console.error(err);
        alert("Có lỗi xảy ra khi tải dữ liệu câu hỏi. Vui lòng làm mới trang.");
    }
}

// --- THEME MANAGEMENT ---
function setupTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
    setTheme(savedTheme);
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        themeToggleBtn.querySelector('i').className = 'fa-solid fa-sun';
        themeToggleMobileBtn.querySelector('i').className = 'fa-solid fa-sun';
        themeText.textContent = 'Sáng';
        localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleBtn.querySelector('i').className = 'fa-solid fa-moon';
        themeToggleMobileBtn.querySelector('i').className = 'fa-solid fa-moon';
        themeText.textContent = 'Tối';
        localStorage.setItem(STORAGE_KEYS.THEME, 'light');
    }
}

// --- DATA PERSISTENCE & SESSION MANAGEMENT ---
function loadUserData() {
    // 1. Load User States (Correct/Incorrect/Flagged status)
    const savedStates = getCookie(STORAGE_KEYS.USER_STATES);
    if (savedStates) {
        userStates = deserializeUserStates(savedStates);
    } else {
        // Initialize empty states
        userStates = {};
        questions.forEach(q => {
            userStates[q.id] = {
                status: 'unanswered',
                answer: null,
                flagged: false
            };
        });
        saveUserStates();
    }
    
    // Ensure new questions from updates are tracked
    questions.forEach(q => {
        if (!userStates[q.id]) {
            userStates[q.id] = { status: 'unanswered', answer: null, flagged: false };
        }
    });

    // 2. Load Session Order
    const savedOrder = getCookie(STORAGE_KEYS.SESSION_ORDER);
    const savedIndex = getCookie(STORAGE_KEYS.CURRENT_INDEX);
    const savedOptionsOrder = getCookie(STORAGE_KEYS.OPTIONS_ORDER);
    
    if (savedOrder && savedOptionsOrder) {
        const orderIds = savedOrder.split(',').map(Number).filter(Boolean);
        // Map back to question objects
        sessionQuestions = orderIds.map(id => questions.find(q => q.id === id)).filter(Boolean);
        currentIndex = savedIndex ? parseInt(savedIndex) : 0;
        optionShuffles = savedOptionsOrder.split(',');
        
        // If order list size doesn't match total questions, reset
        if (sessionQuestions.length !== questions.length || optionShuffles.length !== questions.length) {
            startNewSession();
        }
    } else {
        startNewSession();
    }
}

function saveUserStates() {
    const serialized = serializeUserStates(userStates);
    setCookie(STORAGE_KEYS.USER_STATES, serialized, 365);
}

function startNewSession() {
    // Erase existing session cookies first
    eraseCookie(STORAGE_KEYS.USER_STATES);
    eraseCookie(STORAGE_KEYS.SESSION_ORDER);
    eraseCookie(STORAGE_KEYS.CURRENT_INDEX);
    eraseCookie(STORAGE_KEYS.OPTIONS_ORDER);

    // Shuffle copy of questions array
    sessionQuestions = [...questions];
    for (let i = sessionQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sessionQuestions[i], sessionQuestions[j]] = [sessionQuestions[j], sessionQuestions[i]];
    }
    
    // Save shuffled IDs order
    const orderIds = sessionQuestions.map(q => q.id);
    setCookie(STORAGE_KEYS.SESSION_ORDER, orderIds.join(','), 365);
    
    // Generate and save options shuffles (order by original ID 1 to 305)
    optionShuffles = [];
    const shufflesList = [];
    const sortedQuestions = [...questions].sort((a, b) => a.id - b.id);
    sortedQuestions.forEach(q => {
        const originalKeys = Object.keys(q.options).sort(); // e.g., ['A', 'B', 'C', 'D', 'E']
        const shuffledKeys = [...originalKeys];
        for (let i = shuffledKeys.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledKeys[i], shuffledKeys[j]] = [shuffledKeys[j], shuffledKeys[i]];
        }
        const permutation = shuffledKeys.join('');
        optionShuffles.push(permutation);
        shufflesList.push(permutation);
    });
    setCookie(STORAGE_KEYS.OPTIONS_ORDER, shufflesList.join(','), 365);
    
    // Find index of Question 1 to start from it
    const q1Idx = sessionQuestions.findIndex(q => q.id === 1);
    currentIndex = q1Idx !== -1 ? q1Idx : 0;
    setCookie(STORAGE_KEYS.CURRENT_INDEX, currentIndex.toString(), 365);
    
    // Reset answers and flags
    userStates = {};
    questions.forEach(q => {
        userStates[q.id] = {
            status: 'unanswered',
            answer: null,
            flagged: false
        };
    });
    saveUserStates();
    
    if (questions.length > 0) {
        renderQuestionGrid();
        renderActiveQuestion();
        updateStats();
    }
}

function getFilteredQuestions() {
    const query = searchInput.value.toLowerCase().trim();
    const baseQuestions = sessionQuestions.length > 0 ? sessionQuestions : questions;
    
    return baseQuestions.filter(q => {
        const state = userStates[q.id];
        
        // Apply Filters
        if (activeFilter === 'correct' && state.status !== 'correct') return false;
        if (activeFilter === 'incorrect' && state.status !== 'incorrect') return false;
        if (activeFilter === 'flagged' && !state.flagged) return false;
        
        // Apply Search (Matches ID or category)
        if (query) {
            const matchesId = q.id.toString().includes(query);
            const matchesCategory = q.category_name.toLowerCase().includes(query);
            const sIdx = sessionQuestions.findIndex(sq => sq.id === q.id);
            const matchesIndex = (sIdx + 1).toString().includes(query);
            if (!matchesId && !matchesIndex && !matchesCategory) return false;
        }
        
        return true;
    });
}

function renderQuestionGrid() {
    questionGrid.innerHTML = '';
    const filtered = getFilteredQuestions();
    
    filtered.forEach((q) => {
        const sIdx = sessionQuestions.findIndex(sq => sq.id === q.id);
        const state = userStates[q.id];
        
        const btn = document.createElement('button');
        btn.className = `q-badge-btn ${state.status}`;
        btn.dataset.id = q.id; // Store original question ID
        if (state.flagged) btn.classList.add('flagged');
        if (sIdx === currentIndex) btn.classList.add('active');
        btn.textContent = q.id;
        btn.title = `Câu hỏi gốc ${q.id} - ${q.category_name}`;
        
        btn.addEventListener('click', () => {
            currentIndex = sIdx;
            setCookie(STORAGE_KEYS.CURRENT_INDEX, sIdx.toString(), 365);
            
            // Highlight active in grid
            document.querySelectorAll('.q-badge-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            renderActiveQuestion();
            
            // Close sidebar on mobile
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('open');
            }
        });
        
        questionGrid.appendChild(btn);
    });
}

function renderActiveQuestion() {
    if (sessionQuestions.length === 0) return;
    const q = sessionQuestions[currentIndex];
    const state = userStates[q.id];
    
    // Reset active buttons highlight in sidebar
    const activeQId = q.id.toString();
    document.querySelectorAll('.q-badge-btn').forEach((btn) => {
        if (btn.dataset.id === activeQId) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // 1. Header Badges
    questionBadge.textContent = `Câu ${q.id}`;
    categoryBadge.textContent = q.category_name;
    const miniCurrentQNum = document.getElementById('miniCurrentQNum');
    if (miniCurrentQNum) {
        miniCurrentQNum.textContent = q.id;
    }
    
    // 2. Flag Bookmark State
    if (state.flagged) {
        flagBtn.classList.add('active');
        flagBtn.querySelector('i').className = 'fa-solid fa-bookmark';
        flagText.textContent = 'Đã đánh dấu';
    } else {
        flagBtn.classList.remove('active');
        flagBtn.querySelector('i').className = 'fa-regular fa-bookmark';
        flagText.textContent = 'Đánh dấu xem lại';
    }
    
    // 3. Render Question Text
    questionText.innerHTML = q.questionText;
    
    // 4. Question Image Wrapper with Loading state
    if (q.image && q.image.trim() !== '') {
        imageWrapper.classList.remove('hidden');
        imageLoader.classList.remove('hidden');
        questionImage.classList.add('hidden');
        questionImage.src = q.image;
        
        questionImage.onload = () => {
            imageLoader.classList.add('hidden');
            questionImage.classList.remove('hidden');
        };
        questionImage.onerror = () => {
            imageLoader.classList.add('hidden');
            console.error("Failed to load image:", q.image);
        };
    } else {
        imageWrapper.classList.add('hidden');
    }
    
    // 5. Set choices buttons (with option shuffling support)
    const shufflePerm = (optionShuffles && optionShuffles[q.id - 1]) || Object.keys(q.options).sort().join('');
    const mappedCorrectAnswer = String.fromCharCode(65 + shufflePerm.indexOf(q.correctAnswer));
    
    choiceButtons.forEach(btn => {
        btn.className = 'choice-btn';
        const letter = btn.dataset.choice; // A, B, C, D, E
        
        // Show correct letter label
        btn.querySelector('.choice-letter').textContent = letter;
        
        const idx = letter.charCodeAt(0) - 65; // A -> 0, B -> 1, C -> 2, etc.
        const originalKey = shufflePerm[idx];
        const optionHtml = originalKey ? q.options[originalKey] : null;
        
        if (optionHtml) {
            btn.style.display = 'flex';
            btn.querySelector('.choice-desc').innerHTML = optionHtml;
            
            if (state.status === 'unanswered') {
                btn.classList.remove('disabled');
            } else {
                btn.classList.add('disabled');
                
                // Highlight selection
                if (letter === state.answer) {
                    btn.classList.add('selected');
                    if (state.status === 'correct') {
                        btn.classList.add('correct');
                    } else {
                        btn.classList.add('incorrect');
                    }
                }
                
                // Reveal correct option
                if (letter === mappedCorrectAnswer) {
                    btn.classList.add('correct');
                }
            }
        } else {
            btn.style.display = 'none';
        }
    });
    
    // 6. Render Feedback and Explanations
    if (state.status === 'unanswered') {
        feedbackArea.classList.add('hidden');
        explanationPanel.classList.add('hidden');
    } else {
        feedbackArea.classList.remove('hidden');
        explanationPanel.classList.remove('hidden');
        
        // Set Banner Style
        if (state.status === 'correct') {
            feedbackBanner.className = 'feedback-banner correct';
            feedbackBanner.querySelector('i').className = 'fa-solid fa-circle-check';
            feedbackMessage.textContent = 'Chính xác!';
        } else {
            feedbackBanner.className = 'feedback-banner incorrect';
            feedbackBanner.querySelector('i').className = 'fa-solid fa-circle-xmark';
            feedbackMessage.textContent = `Chưa đúng! Đáp án chính xác là ${mappedCorrectAnswer}`;
        }
        
        // Populate Solution & Tips
        solutionText.innerHTML = q.explanation;
        tipText.innerHTML = q.tip;
    }
    
    // 7. Navigation Buttons disabled state
    const query = searchInput.value.toLowerCase().trim();
    if (activeFilter === 'all' && !query) {
        prevBtn.disabled = currentIndex <= 0;
        nextBtn.disabled = currentIndex === sessionQuestions.length - 1;
    } else {
        const filtered = getFilteredQuestions();
        const currentFilteredIdx = filtered.findIndex(fq => fq.id === q.id);
        prevBtn.disabled = currentFilteredIdx <= 0;
        nextBtn.disabled = currentFilteredIdx === -1 || currentFilteredIdx === filtered.length - 1;
    }
}

function updateStats() {
    let correct = 0;
    let incorrect = 0;
    let flagged = 0;
    let answered = 0;
    
    questions.forEach(q => {
        const state = userStates[q.id];
        if (state.status === 'correct') correct++;
        if (state.status === 'incorrect') incorrect++;
        if (state.flagged) flagged++;
        if (state.status !== 'unanswered') answered++;
    });
    
    statCorrect.textContent = correct;
    statIncorrect.textContent = incorrect;
    statFlagged.textContent = flagged;
    
    // Progress Bar
    const total = questions.length;
    if (total > 0) {
        const percentage = Math.round((answered / total) * 100);
        progressText.textContent = `${answered}/${total} (${percentage}%)`;
        progressBar.style.width = `${percentage}%`;
    }
}

// --- ACTION HANDLERS ---
function handleChoiceSelection(letter) {
    const q = sessionQuestions[currentIndex];
    const state = userStates[q.id];
    
    if (state.status !== 'unanswered') return; // Already answered
    
    const shufflePerm = (optionShuffles && optionShuffles[q.id - 1]) || Object.keys(q.options).sort().join('');
    const mappedCorrectAnswer = String.fromCharCode(65 + shufflePerm.indexOf(q.correctAnswer));
    const isCorrect = letter === mappedCorrectAnswer;
    
    state.answer = letter;
    state.status = isCorrect ? 'correct' : 'incorrect';
    
    saveUserStates();
    renderActiveQuestion();
    updateStats();
    
    // Update active badge in grid list
    const activeBadgeBtn = questionGrid.querySelector(`.q-badge-btn[data-id="${q.id}"]`);
    if (activeBadgeBtn) {
        activeBadgeBtn.className = `q-badge-btn ${state.status} active`;
        if (state.flagged) activeBadgeBtn.classList.add('flagged');
    }
}

function handleFlagToggle() {
    const q = sessionQuestions[currentIndex];
    const state = userStates[q.id];
    
    state.flagged = !state.flagged;
    saveUserStates();
    
    renderActiveQuestion();
    updateStats();
    
    // Update active badge in grid
    const activeBadgeBtn = questionGrid.querySelector(`.q-badge-btn[data-id="${q.id}"]`);
    if (activeBadgeBtn) {
        if (state.flagged) activeBadgeBtn.classList.add('flagged');
        else activeBadgeBtn.classList.remove('flagged');
    }
}

// --- EVENT LISTENERS SETUP ---
function setupEventListeners() {
    // Sidebar Hamburger Menu Toggles
    menuToggleBtn.addEventListener('click', () => sidebar.classList.add('open'));
    
    // Close sidebar (handles mobile close and desktop collapse/expand toggle)
    mobileCloseBtn.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            sidebar.classList.remove('open');
        } else {
            document.querySelector('.app-container').classList.toggle('sidebar-collapsed');
        }
    });
    
    // Expand sidebar when search icon is clicked while collapsed
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            const container = document.querySelector('.app-container');
            if (container.classList.contains('sidebar-collapsed')) {
                container.classList.remove('sidebar-collapsed');
                setTimeout(() => searchInput.focus(), 150);
            }
        });
    }
    
    // Close sidebar on background click (mobile only)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 992 && 
            !sidebar.contains(e.target) && 
            !menuToggleBtn.contains(e.target) && 
            sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    // Theme toggles
    const toggleThemeMode = () => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
    };
    themeToggleBtn.addEventListener('click', toggleThemeMode);
    themeToggleMobileBtn.addEventListener('click', toggleThemeMode);
    
    // Session resets
    resetSessionBtn.addEventListener('click', () => {
        if (confirm("Bạn có chắc chắn muốn đặt lại phiên ôn tập? Điều này sẽ xóa toàn bộ câu trả lời hiện tại và xáo trộn ngẫu nhiên lại câu hỏi.")) {
            startNewSession();
        }
    });
    
    // Search & Filter
    searchInput.addEventListener('input', renderQuestionGrid);
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeFilter = tab.dataset.filter;
            renderQuestionGrid();
        });
    });
    
    // Choice selection
    choiceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const letter = btn.dataset.choice;
            handleChoiceSelection(letter);
        });
    });
    
    // Bookmark flag toggle
    flagBtn.addEventListener('click', handleFlagToggle);
    
    // Navigation Footer buttons
    prevBtn.addEventListener('click', () => {
        const filtered = getFilteredQuestions();
        const q = sessionQuestions[currentIndex];
        const currentFilteredIdx = filtered.findIndex(fq => fq.id === q.id);
        
        if (currentFilteredIdx > 0) {
            const prevQuestion = filtered[currentFilteredIdx - 1];
            const prevSessionIdx = sessionQuestions.findIndex(sq => sq.id === prevQuestion.id);
            if (prevSessionIdx !== -1) {
                currentIndex = prevSessionIdx;
                setCookie(STORAGE_KEYS.CURRENT_INDEX, currentIndex.toString(), 365);
                renderActiveQuestion();
            }
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const filtered = getFilteredQuestions();
        const q = sessionQuestions[currentIndex];
        const currentFilteredIdx = filtered.findIndex(fq => fq.id === q.id);
        
        if (currentFilteredIdx !== -1 && currentFilteredIdx < filtered.length - 1) {
            const nextQuestion = filtered[currentFilteredIdx + 1];
            const nextSessionIdx = sessionQuestions.findIndex(sq => sq.id === nextQuestion.id);
            if (nextSessionIdx !== -1) {
                currentIndex = nextSessionIdx;
                setCookie(STORAGE_KEYS.CURRENT_INDEX, currentIndex.toString(), 365);
                renderActiveQuestion();
            }
        }
    });
    
    // Keyboard navigation (Arrow keys & A-E shortcuts)
    document.addEventListener('keydown', (e) => {
        // Ignore keydowns when user is typing in search bar
        if (document.activeElement === searchInput) return;
        
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (['a', 'b', 'c', 'd', 'e', 'A', 'B', 'C', 'D', 'E'].includes(e.key)) {
            const letter = e.key.toUpperCase();
            const btn = document.querySelector(`.choice-btn[data-choice="${letter}"]`);
            if (btn && !btn.classList.contains('disabled')) {
                handleChoiceSelection(letter);
            }
        } else if (e.key === 'f' || e.key === 'F') {
            flagBtn.click();
        }
    });
}

// Load App on load
window.addEventListener('DOMContentLoaded', initApp);
