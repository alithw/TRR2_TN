// App Engine for Discrete Math 2 Quiz Review App

const STORAGE_KEYS = {
    USER_STATES: 'trr2_quiz_user_states',
    SESSION_ORDER: 'trr2_quiz_session_order',
    THEME: 'trr2_quiz_theme_mode',
    CURRENT_INDEX: 'trr2_quiz_current_index',
    OPTIONS_ORDER: 'trr2_quiz_options_order'
};

// Global App State
let practiceQuestions = [];  // Practice bank questions from questions.json
let examQuestions = [];      // Exam questions from exam_questions.json
let currentMode = 'practice'; // 'practice' or 'exam'

let questions = [];          // Reference to the active questions list
let sessionQuestions = [];   // Questions in active session order (shuffled or sequential)
let optionShuffles = [];     // Option permutations for each question (indexed by position in sorted list)
let currentIndex = 0;        // Index in sessionQuestions
let userStates = {};         // Map of question ID -> { status: 'correct'|'incorrect'|'unanswered', answer: string|null, flagged: boolean }
let activeFilter = 'all';
let shuffleEnabled = true;

// DOM Elements
const sidebar = document.getElementById('sidebar');
const menuToggleBtn = document.getElementById('menuToggleBtn');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeToggleMobileBtn = document.getElementById('themeToggleMobileBtn');
const themeText = document.getElementById('themeText');

const modePracticeBtn = document.getElementById('modePracticeBtn');
const modeExamBtn = document.getElementById('modeExamBtn');
const shuffleToggle = document.getElementById('shuffleToggle');
const reshuffleBtn = document.getElementById('reshuffleBtn');
const resetAllBtn = document.getElementById('resetAllBtn');
const sourceFootnote = document.getElementById('sourceFootnote');

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

// --- COOKIE HELPERS ---
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

// Helper to resolve cookie storage key based on active mode
function getStorageKey(baseKey) {
    if (baseKey === STORAGE_KEYS.THEME) return baseKey; // theme is shared
    return currentMode === 'practice' ? baseKey : `${baseKey}_exam`;
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
        
        if (questions.some(q => q.id === id)) {
            states[id] = { status, answer, flagged };
        }
    });
    
    return states;
}

// --- INITIALIZATION ---
async function initApp() {
    setupTheme();
    setupEventListeners();
    
    try {
        // Load practice database
        const resPractice = await fetch('questions.json');
        if (!resPractice.ok) throw new Error("Failed to load questions.json");
        practiceQuestions = await resPractice.json();
        
        // Load exam database
        const resExam = await fetch('exam_questions.json');
        if (!resExam.ok) throw new Error("Failed to load exam_questions.json");
        examQuestions = await resExam.json();
        
        // Load active mode (default: practice)
        currentMode = getCookie('trr2_quiz_active_mode') || 'practice';
        questions = currentMode === 'practice' ? practiceQuestions : examQuestions;
        
        // Highlight active mode buttons
        if (modePracticeBtn && modeExamBtn) {
            modePracticeBtn.classList.toggle('active', currentMode === 'practice');
            modeExamBtn.classList.toggle('active', currentMode === 'exam');
        }
        
        // Load shuffle toggle state (default: true)
        const shuffleCookie = getCookie('trr2_quiz_shuffle_enabled');
        if (shuffleCookie === '0') {
            shuffleEnabled = false;
            if (shuffleToggle) shuffleToggle.checked = false;
        } else {
            shuffleEnabled = true;
            if (shuffleToggle) shuffleToggle.checked = true;
        }
        
        // Load session and user progress
        loadUserData();
        
        // Render UI
        updateFootnote();
        renderQuestionGrid();
        renderActiveQuestion();
        updateStats();

        // Start live data polling for hot-reload
        startDataPolling();
        
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
    // 1. Load User States
    const savedStates = getCookie(getStorageKey(STORAGE_KEYS.USER_STATES));
    if (savedStates) {
        userStates = deserializeUserStates(savedStates);
    } else {
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
    
    // Ensure all questions are tracked
    questions.forEach(q => {
        if (!userStates[q.id]) {
            userStates[q.id] = { status: 'unanswered', answer: null, flagged: false };
        }
    });

    // 2. Load Session Order
    const savedOrder = getCookie(getStorageKey(STORAGE_KEYS.SESSION_ORDER));
    const savedIndex = getCookie(getStorageKey(STORAGE_KEYS.CURRENT_INDEX));
    const savedOptionsOrder = getCookie(getStorageKey(STORAGE_KEYS.OPTIONS_ORDER));
    
    if (savedOrder && savedOptionsOrder) {
        const orderIds = savedOrder.split(',').map(Number).filter(Boolean);
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
    setCookie(getStorageKey(STORAGE_KEYS.USER_STATES), serialized, 365);
}

function startNewSession() {
    // Erase existing session cookies first
    eraseCookie(getStorageKey(STORAGE_KEYS.SESSION_ORDER));
    eraseCookie(getStorageKey(STORAGE_KEYS.CURRENT_INDEX));
    eraseCookie(getStorageKey(STORAGE_KEYS.OPTIONS_ORDER));

    if (shuffleEnabled) {
        // Shuffle copy of questions array
        sessionQuestions = [...questions];
        for (let i = sessionQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sessionQuestions[i], sessionQuestions[j]] = [sessionQuestions[j], sessionQuestions[i]];
        }
        
        // Generate and save options shuffles (order by sorted questions)
        optionShuffles = [];
        const shufflesList = [];
        const sortedQuestions = [...questions].sort((a, b) => a.id - b.id);
        sortedQuestions.forEach(q => {
            const originalKeys = Object.keys(q.options).sort();
            const shuffledKeys = [...originalKeys];
            for (let i = shuffledKeys.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledKeys[i], shuffledKeys[j]] = [shuffledKeys[j], shuffledKeys[i]];
            }
            const permutation = shuffledKeys.join('');
            optionShuffles.push(permutation);
            shufflesList.push(permutation);
        });
        setCookie(getStorageKey(STORAGE_KEYS.OPTIONS_ORDER), shufflesList.join(','), 365);
    } else {
        // Sequential questions
        sessionQuestions = [...questions].sort((a, b) => a.id - b.id);
        
        // Sequential options
        optionShuffles = [];
        const shufflesList = [];
        const sortedQuestions = [...questions].sort((a, b) => a.id - b.id);
        sortedQuestions.forEach(q => {
            const permutation = Object.keys(q.options).sort().join('');
            optionShuffles.push(permutation);
            shufflesList.push(permutation);
        });
        setCookie(getStorageKey(STORAGE_KEYS.OPTIONS_ORDER), shufflesList.join(','), 365);
    }
    
    // Save order
    const orderIds = sessionQuestions.map(q => q.id);
    setCookie(getStorageKey(STORAGE_KEYS.SESSION_ORDER), orderIds.join(','), 365);
    
    // Start session at index 0
    currentIndex = 0;
    setCookie(getStorageKey(STORAGE_KEYS.CURRENT_INDEX), '0', 365);
    
    if (questions.length > 0) {
        renderQuestionGrid();
        renderActiveQuestion();
        updateStats();
        scrollActiveQuestionIntoView();
    }
}

// Update the source text label dynamically
function updateFootnote() {
    if (sourceFootnote) {
        if (currentMode === 'practice') {
            sourceFootnote.textContent = 'Nguồn: Cô Nguyễn Kiều Linh - TRR2 PTIT';
        } else {
            sourceFootnote.textContent = 'Source: Cô Nguyễn Kiều Linh - Tổng hợp đề TRR2 PTIT';
        }
    }
}

// --- RENDERING PIPELINE ---
function getFilteredQuestions() {
    const query = searchInput.value.toLowerCase().trim();
    const baseQuestions = sessionQuestions.length > 0 ? sessionQuestions : questions;
    
    return baseQuestions.filter(q => {
        const state = userStates[q.id];
        
        // Apply Filters
        if (activeFilter === 'correct' && state.status !== 'correct') return false;
        if (activeFilter === 'incorrect' && state.status !== 'incorrect') return false;
        if (activeFilter === 'flagged' && !state.flagged) return false;
        
        // Apply Search (Matches ID, category, or question text)
        if (query) {
            const matchesId = q.id.toString().includes(query);
            const matchesCategory = q.category_name.toLowerCase().includes(query);
            const sIdx = sessionQuestions.findIndex(sq => sq.id === q.id);
            const matchesIndex = (sIdx + 1).toString().includes(query);
            
            // Match text content (HTML stripped) or raw content
            const cleanQuestionText = q.questionText.replace(/<[^>]+>/g, '').toLowerCase();
            const matchesQuestion = cleanQuestionText.includes(query) || q.questionText.toLowerCase().includes(query);
            
            if (!matchesId && !matchesIndex && !matchesCategory && !matchesQuestion) return false;
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
        btn.dataset.id = q.id;
        if (state.flagged) btn.classList.add('flagged');
        if (sIdx === currentIndex) btn.classList.add('active');
        btn.textContent = sIdx + 1;
        btn.title = `Câu ${sIdx + 1} (Gốc: ${q.id}) - ${q.category_name}`;
        
        btn.addEventListener('click', () => {
            currentIndex = sIdx;
            setCookie(getStorageKey(STORAGE_KEYS.CURRENT_INDEX), sIdx.toString(), 365);
            
            document.querySelectorAll('.q-badge-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            renderActiveQuestion();
            
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
    questionBadge.textContent = `Câu ${currentIndex + 1}`;
    categoryBadge.textContent = `${q.category_name} (ID gốc: ${q.id})`;
    const miniCurrentQNum = document.getElementById('miniCurrentQNum');
    if (miniCurrentQNum) {
        miniCurrentQNum.textContent = currentIndex + 1;
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
    questionText.innerHTML = parseMarkdown(q.questionText);
    
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
    const sortedQuestions = [...questions].sort((a, b) => a.id - b.id);
    const qIdx = sortedQuestions.findIndex(x => x.id === q.id);
    const shufflePerm = (optionShuffles && optionShuffles[qIdx]) || Object.keys(q.options).sort().join('');
    const mappedCorrectAnswer = String.fromCharCode(65 + shufflePerm.indexOf(q.correctAnswer));
    
    choiceButtons.forEach(btn => {
        btn.className = 'choice-btn';
        const letter = btn.dataset.choice; // A, B, C, D, E
        
        btn.querySelector('.choice-letter').textContent = letter;
        
        const idx = letter.charCodeAt(0) - 65; // A -> 0, B -> 1, C -> 2, etc.
        const originalKey = shufflePerm[idx];
        const optionHtml = originalKey ? q.options[originalKey] : null;
        
        if (optionHtml) {
            btn.style.display = 'flex';
            btn.querySelector('.choice-desc').innerHTML = parseMarkdown(optionHtml);
            
            if (state.status === 'unanswered') {
                btn.classList.remove('disabled');
            } else {
                btn.classList.add('disabled');

                // Convert stored original key → current shuffled position.
                // For correct answers always use mappedCorrectAnswer (immune to stale saves).
                // For incorrect answers remap the stored key to wherever it sits in the new shuffle.
                const userAnswerLetter = state.status === 'correct'
                    ? mappedCorrectAnswer
                    : (state.answer
                        ? String.fromCharCode(65 + shufflePerm.indexOf(state.answer))
                        : null);

                if (letter === userAnswerLetter) {
                    btn.classList.add('selected');
                    if (state.status === 'correct') {
                        btn.classList.add('correct');
                    } else {
                        btn.classList.add('incorrect');
                    }
                }

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
        
        if (state.status === 'correct') {
            feedbackBanner.className = 'feedback-banner correct';
            feedbackBanner.querySelector('i').className = 'fa-solid fa-circle-check';
            feedbackMessage.textContent = 'Chính xác!';
        } else {
            feedbackBanner.className = 'feedback-banner incorrect';
            feedbackBanner.querySelector('i').className = 'fa-solid fa-circle-xmark';
            feedbackMessage.textContent = `Chưa đúng! Đáp án chính xác là ${mappedCorrectAnswer}`;
        }
        
        solutionText.innerHTML = remapOptionLetters(parseMarkdown(q.explanation), shufflePerm);
        tipText.innerHTML = remapOptionLetters(parseMarkdown(q.tip), shufflePerm);
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
    renderMath();

    // Scroll active question button into view in sidebar
    scrollActiveQuestionIntoView();
}

// Smoothly scroll the currently-active q-badge-btn into view inside the sidebar list
function scrollActiveQuestionIntoView() {
    const activeBtn = questionGrid.querySelector('.q-badge-btn.active');
    if (!activeBtn) return;
    // Use scrollIntoView with block:'nearest' so it doesn't jump when already visible
    activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Smoothly scroll feedbackArea / explanationPanel into view (main content area)
function scrollToFeedback() {
    const target = feedbackArea && !feedbackArea.classList.contains('hidden')
        ? feedbackArea
        : explanationPanel;
    if (target && !target.classList.contains('hidden')) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function renderMath() {
    if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError: false
        });
    }
}

function parseMarkdown(text) {
    if (!text) return "";
    let formatted = text;
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');
    return formatted;
}

function remapOptionLetters(text, shufflePerm) {
    if (!text) return "";
    
    const originalToShuffled = {};
    for (let i = 0; i < shufflePerm.length; i++) {
        const originalKey = shufflePerm[i];
        const shuffledLetter = String.fromCharCode(65 + i);
        originalToShuffled[originalKey] = shuffledLetter;
    }
    
    let result = text;
    
    result = result.replace(/(<strong>|<b>)([A-E])(<\/strong>|<\/b>)/g, (match, p1, letter, p2) => {
        return p1 + (originalToShuffled[letter] || letter) + p2;
    });

    const replaceInside = (match) => {
        // Replace bare A-E letters (word boundaries)
        let out = match.replace(/\b([A-E])\b/g, (m, letter) => {
            return originalToShuffled[letter] || letter;
        });
        // Also replace A-E inside <strong>/<b> tags
        out = out.replace(/(<strong>|<b>)([A-E])(<\/strong>|<\/b>)/g, (m, p1, letter, p2) => {
            return p1 + (originalToShuffled[letter] || letter) + p2;
        });
        return out;
    };

    // NOTE: \b does NOT work with Vietnamese non-ASCII starters (đ, ă, ơ, etc.)
    // Use (?<![a-zA-Z0-9_]) lookbehind instead for all prefix patterns.
    const patternPrefixList = /(?<![a-zA-Z0-9_])(phương án|đáp án|lựa chọn|chọn|khẳng định|phát biểu)\s+(?:đúng\s+|chính\s+xác\s+|sai\s+|đều\s+|là\s+|đều\s+là\s+|không\s+phải\s+là\s+)*([A-E])(?!\()(?:\s*,\s*[A-E](?!\())*(?:\s+(?:và|hoặc)\s*[A-E](?!\())?/gi;
    result = result.replace(patternPrefixList, replaceInside);

    // Handle "chọn đáp án A" / "chọn phương án B" compound phrases
    const patternCompound = /(?<![a-zA-Z0-9_])(chọn\s+(?:đáp án|phương án|lựa chọn))\s+([A-E])(?![(\w])/gi;
    result = result.replace(patternCompound, (match, prefix, letter) => {
        return prefix + ' ' + (originalToShuffled[letter] || letter);
    });

    // Handle "A là đáp án / là phương án / là lựa chọn"
    result = result.replace(/\b([A-E])\s*(là đáp án|là phương án|là lựa chọn)/gi, (match, letter, rest) => {
        return (originalToShuffled[letter] || letter) + " " + rest;
    });
    
    const patternChoicesNums = /(?<![a-zA-Z0-9_])(lựa chọn)\s+[A-E]\(\d+\)(?:\s*,\s*[A-E]\(\d+\))*/gi;
    result = result.replace(patternChoicesNums, replaceInside);

    const patternSpecTip = /(?<![a-zA-Z0-9_])các phương án:\s*[A-E][^.]*/gi;
    result = result.replace(patternSpecTip, replaceInside);

    // Handle (A), (B), ... in parentheses
    result = result.replace(/\(([A-E])\)/g, (match, letter) => {
        return '(' + (originalToShuffled[letter] || letter) + ')';
    });

    // Handle trailing markers like "đáp án A □" / "phương án A ✓"
    result = result.replace(/(?<=(đáp án|phương án|lựa chọn)\s)([A-E])(?=\s*[□✓✗\s]|$)/gi, (match, _prefix, letter) => {
        return originalToShuffled[letter] || letter;
    });

    return result;
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
    
    if (state.status !== 'unanswered') return;
    
    const sortedQuestions = [...questions].sort((a, b) => a.id - b.id);
    const qIdx = sortedQuestions.findIndex(x => x.id === q.id);
    const shufflePerm = (optionShuffles && optionShuffles[qIdx]) || Object.keys(q.options).sort().join('');
    const mappedCorrectAnswer = String.fromCharCode(65 + shufflePerm.indexOf(q.correctAnswer));
    const isCorrect = letter === mappedCorrectAnswer;
    
    // Store the ORIGINAL option key (before shuffle) so the answer survives reshuffling
    state.answer = shufflePerm[letter.charCodeAt(0) - 65] || letter;
    state.status = isCorrect ? 'correct' : 'incorrect';
    
    saveUserStates();
    renderActiveQuestion();
    updateStats();

    // Scroll feedback into view after answering
    scrollToFeedback();
    
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
    
    const activeBadgeBtn = questionGrid.querySelector(`.q-badge-btn[data-id="${q.id}"]`);
    if (activeBadgeBtn) {
        if (state.flagged) activeBadgeBtn.classList.add('flagged');
        else activeBadgeBtn.classList.remove('flagged');
    }
}

// --- SWITCH MODES ---
function switchMode(newMode) {
    if (currentMode === newMode) return;
    
    modePracticeBtn.classList.toggle('active', newMode === 'practice');
    modeExamBtn.classList.toggle('active', newMode === 'exam');
    
    currentMode = newMode;
    setCookie('trr2_quiz_active_mode', currentMode, 365);
    
    questions = currentMode === 'practice' ? practiceQuestions : examQuestions;
    
    loadUserData();
    updateFootnote();
    
    // Reset search and filters
    activeFilter = 'all';
    filterTabs.forEach(t => t.classList.toggle('active', t.dataset.filter === 'all'));
    searchInput.value = '';
    
    renderQuestionGrid();
    renderActiveQuestion();
    updateStats();
}

// --- EVENT LISTENERS SETUP ---
function setupEventListeners() {
    menuToggleBtn.addEventListener('click', () => sidebar.classList.add('open'));
    
    mobileCloseBtn.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            sidebar.classList.remove('open');
        } else {
            document.querySelector('.app-container').classList.toggle('sidebar-collapsed');
        }
    });
    
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
    
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 992 && 
            !sidebar.contains(e.target) && 
            !menuToggleBtn.contains(e.target) && 
            sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    const toggleThemeMode = () => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
    };
    themeToggleBtn.addEventListener('click', toggleThemeMode);
    themeToggleMobileBtn.addEventListener('click', toggleThemeMode);
    
    // Mode switcher buttons
    if (modePracticeBtn) {
        modePracticeBtn.addEventListener('click', () => switchMode('practice'));
    }
    if (modeExamBtn) {
        modeExamBtn.addEventListener('click', () => switchMode('exam'));
    }
    
    // Shuffle Toggle
    if (shuffleToggle) {
        shuffleToggle.addEventListener('change', (e) => {
            shuffleEnabled = e.target.checked;
            setCookie('trr2_quiz_shuffle_enabled', shuffleEnabled ? '1' : '0', 365);
            
            // Try to keep user on same question
            const activeQ = sessionQuestions[currentIndex];
            const activeId = activeQ ? activeQ.id : null;
            
            if (shuffleEnabled) {
                startNewSession();
            } else {
                sessionQuestions = [...questions].sort((a, b) => a.id - b.id);
                optionShuffles = questions.map(q => Object.keys(q.options).sort().join(''));
                
                const orderIds = sessionQuestions.map(q => q.id);
                setCookie(getStorageKey(STORAGE_KEYS.SESSION_ORDER), orderIds.join(','), 365);
                setCookie(getStorageKey(STORAGE_KEYS.OPTIONS_ORDER), optionShuffles.join(','), 365);
                
                if (activeId !== null) {
                    currentIndex = sessionQuestions.findIndex(q => q.id === activeId);
                    if (currentIndex === -1) currentIndex = 0;
                } else {
                    currentIndex = 0;
                }
                setCookie(getStorageKey(STORAGE_KEYS.CURRENT_INDEX), currentIndex.toString(), 365);
                
                renderQuestionGrid();
                renderActiveQuestion();
                updateStats();
                scrollActiveQuestionIntoView();
            }
        });
    }
    
    // Reshuffle button
    if (reshuffleBtn) {
        reshuffleBtn.addEventListener('click', () => {
            if (!shuffleToggle.checked) {
                shuffleToggle.checked = true;
                shuffleEnabled = true;
                setCookie('trr2_quiz_shuffle_enabled', '1', 365);
            }
            startNewSession();
        });
    }
    
    // Reset all button
    if (resetAllBtn) {
        resetAllBtn.addEventListener('click', () => {
            if (confirm("Bạn có chắc chắn muốn làm lại tất cả câu hỏi của chế độ hiện tại? Điều này sẽ xóa toàn bộ lịch sử làm bài (Đúng/Sai/Xem lại).")) {
                userStates = {};
                questions.forEach(q => {
                    userStates[q.id] = { status: 'unanswered', answer: null, flagged: false };
                });
                saveUserStates();
                
                if (shuffleEnabled) {
                    startNewSession();
                } else {
                    currentIndex = 0;
                    setCookie(getStorageKey(STORAGE_KEYS.CURRENT_INDEX), '0', 365);
                    renderQuestionGrid();
                    renderActiveQuestion();
                    updateStats();
                }
            }
        });
    }
    
    searchInput.addEventListener('input', renderQuestionGrid);
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeFilter = tab.dataset.filter;
            renderQuestionGrid();
        });
    });
    
    choiceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const letter = btn.dataset.choice;
            handleChoiceSelection(letter);
        });
    });
    
    flagBtn.addEventListener('click', handleFlagToggle);
    
    prevBtn.addEventListener('click', () => {
        const filtered = getFilteredQuestions();
        const q = sessionQuestions[currentIndex];
        const currentFilteredIdx = filtered.findIndex(fq => fq.id === q.id);
        
        if (currentFilteredIdx > 0) {
            const prevQuestion = filtered[currentFilteredIdx - 1];
            const prevSessionIdx = sessionQuestions.findIndex(sq => sq.id === prevQuestion.id);
            if (prevSessionIdx !== -1) {
                currentIndex = prevSessionIdx;
                setCookie(getStorageKey(STORAGE_KEYS.CURRENT_INDEX), currentIndex.toString(), 365);
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
                setCookie(getStorageKey(STORAGE_KEYS.CURRENT_INDEX), currentIndex.toString(), 365);
                renderActiveQuestion();
            }
        }
    });
    
    document.addEventListener('keydown', (e) => {
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

// --- LIVE DATA POLLING (hot-reload without F5) ---
// Uses ETag / Last-Modified headers to detect server-side updates.
const DATA_POLL_INTERVAL_MS = 15000; // check every 15 seconds
const dataVersions = {}; // { url: lastETagOrModified }

async function pollDataFile(url, onUpdate) {
    try {
        const headRes = await fetch(url, { method: 'HEAD', cache: 'no-store' });
        if (!headRes.ok) return;
        const etag = headRes.headers.get('etag') || headRes.headers.get('last-modified') || null;
        if (etag === null) return; // server doesn't send version headers — skip

        if (dataVersions[url] === undefined) {
            // First check — just record the version, don't reload
            dataVersions[url] = etag;
            return;
        }

        if (dataVersions[url] !== etag) {
            dataVersions[url] = etag;
            // Fetch the actual updated data
            const res = await fetch(url, { cache: 'no-store' });
            if (!res.ok) return;
            const newData = await res.json();
            onUpdate(newData);
        }
    } catch (e) {
        // Network error or JSON parse error — silently ignore
    }
}

function applyUpdatedQuestions(newData, targetMode) {
    if (targetMode === 'practice') {
        practiceQuestions = newData;
    } else {
        examQuestions = newData;
    }

    // Only re-render if this mode is currently active
    if (currentMode !== targetMode) return;

    const prevId = sessionQuestions[currentIndex]?.id ?? null;

    // Rebuild the question list reference
    questions = targetMode === 'practice' ? practiceQuestions : examQuestions;

    // Ensure userStates covers new question set
    questions.forEach(q => {
        if (!userStates[q.id]) {
            userStates[q.id] = { status: 'unanswered', answer: null, flagged: false };
        }
    });

    // Rebuild session order (keep same IDs if still present)
    const prevSessionIds = sessionQuestions.map(q => q.id);
    sessionQuestions = prevSessionIds
        .map(id => questions.find(q => q.id === id))
        .filter(Boolean);
    // Append any brand-new questions
    questions.forEach(q => {
        if (!sessionQuestions.find(sq => sq.id === q.id)) {
            sessionQuestions.push(q);
        }
    });

    // Restore index to same question if possible
    if (prevId !== null) {
        const newIdx = sessionQuestions.findIndex(q => q.id === prevId);
        if (newIdx !== -1) currentIndex = newIdx;
    }

    renderQuestionGrid();
    renderActiveQuestion();
    updateStats();

    // Show a subtle toast notification
    showToast('Dữ liệu câu hỏi đã được cập nhật.');
}

function showToast(message) {
    let toast = document.getElementById('liveUpdateToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'liveUpdateToast';
        toast.style.cssText = [
            'position:fixed', 'bottom:24px', 'right:24px', 'z-index:9999',
            'background:var(--accent,#6c63ff)', 'color:#fff',
            'padding:10px 18px', 'border-radius:10px',
            'font-size:0.85rem', 'font-family:inherit',
            'box-shadow:0 4px 20px rgba(0,0,0,0.3)',
            'opacity:0', 'transition:opacity 0.3s',
            'pointer-events:none'
        ].join(';');
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => { toast.style.opacity = '0'; }, 3000);
}

function startDataPolling() {
    // Initial fingerprinting pass (no reload on first call)
    pollDataFile('questions.json',     data => applyUpdatedQuestions(data, 'practice'));
    pollDataFile('exam_questions.json', data => applyUpdatedQuestions(data, 'exam'));

    setInterval(() => {
        pollDataFile('questions.json',     data => applyUpdatedQuestions(data, 'practice'));
        pollDataFile('exam_questions.json', data => applyUpdatedQuestions(data, 'exam'));
    }, DATA_POLL_INTERVAL_MS);
}

window.addEventListener('DOMContentLoaded', initApp);
