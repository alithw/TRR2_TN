**Câu 1\.**  
Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 4 | 2 | 3 | 1 |
| 1 | 3 | 3 | 2 | 4 | 2 |
| 1 | 4 | 8 | 3 | 4 | 5 |

Sử dụng thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh s \= 4 đến các đỉnh còn lại của G. Chọn phương án đúng trong các phương án dưới đây:

 A.  
Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 2 là 24 với độ dài d\[2\] \= 2\.

 B.  
Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 3 là 43 với độ dài d\[3\] \= 5\.

 C.  
Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 1 là 14 với độ dài d\[1\] \= 8\.

 D.  
Các phương án khác đều sai.

 E.  
Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 2 là 42 với độ dài d\[2\] \= 2\.

**Câu 2\.**  
 Cho đồ thị vô hướng có trọng số G gồm 4 đỉnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 4 | 2 | 3 | 1 |
| 1 | 3 | 3 | 2 | 4 | 2 |
| 1 | 4 | 8 | 3 | 4 | 5 |

Nếu biểu diễn G dưới dạng ma trận trọng số A thì:

 A.  
Các phương án khác đều sai.

 B.  
Ma trận A gồm 4 hàng, 4 cột và có hàng 4 là (8, 2, 5, 0).

 C.  
Ma trận A gồm 4 hàng, 4 cột và có cột 2 là (4, 0, , ).

 D.  
Ma trận A gồm 4 hàng, 4 cột và có hàng 2 là (, 0, 1, 2).

 E.  
Ma trận A gồm 4 hàng, 6 cột và có hàng 4 là (8, , , 0, 2, 5).

**Câu 3\.**  
 Trường hợp đồ thị được biểu diễn dưới dạng danh sách cạnh có n đỉnh m cạnh, độ phức tạp của thuật toán Breadth First Search có giá trị là bao nhiêu?

 A.  
O(n2.m)

 B.  
O(max(n,m)

 C.  
Các phương án khác đều sai.

 D.  
O(n2)

 E.  
O(n3)

**Câu 4\.**  
16 Cho đơn đồ thị vô hướng G gồm 4 đỉnh dưới dạng ma trận kề:  
0 1 1 1  
1 0 1 1  
1 1 0 1  
1 1 1 0  
Sử dụng thuật toán DFS tìm cây khung T của G bắt đầu tại đỉnh s \= 1\. Các cạnh của cây khung T theo thứ tự tìm kiếm của DFS là:

 A.  
T \= {(1,2), (1,4), (2,3)}.

 B.  
T \= {(1,2), (2,3), (3,4)}.

 C.  
T \= {(1,2), (2,3), (2,4)}.

 D.  
T \= {(1,2), (1,3), (3,4)}.

**Câu 5\.**  
 Cho đồ thị vô hướng G \= (V, E) gồm 6 đỉnh dưới dạng danh sách cạnh:  
Đỉnh đầu Đỉnh cuối Đỉnh đầu Đỉnh cuối  
1 2 2 4  
1 3 3 6  
1 6 4 5  
2 3 5 6  
Nếu biểu diễn G dưới dạng danh sách kề thì:

 A.  
Đỉnh 3 có mặt trong Ke(1), Ke(2) và Ke(6).

 B.  
Đỉnh 5 có mặt trong Ke(1), Ke(4) và Ke(6).

 C.  
Các phương án khác đều sai.

 D.  
Đỉnh 2 có mặt trong Ke(3), Ke(4) và Ke(6).

 E.  
Đỉnh 6 không có mặt trong danh sách kề nào.

**Câu 6\.**  
 Cho đơn đồ thị vô hướng có trọng số G dưới dạng ma trận trọng số:  
0 1 3 3  
1 0 2 2  
3 2 0 2  
3 2 2 0  
Nếu biểu diễn G dưới dạng danh sách cạnh với trọng số thì:

 A.  
G gồm 7 cạnh, trong đó cạnh thứ 7 là (3,4) với trọng số 2\.

 B.  
G gồm 6 cạnh, trong đó cạnh thứ 4 là (2,4) với trọng số 2\.

 C.  
G gồm 6 cạnh, trong đó cạnh thứ 2 là (2,1) với trọng số 1\.

 D.  
Các phương án khác đều sai.

 E.  
G gồm 7 cạnh, trong đó cạnh thứ 3 là (1,3) với trọng số 3\.

**Câu 7\.**  
Đơn đồ thị có hướng G \= (V, E) biểu diễn dưới dạng danh sách kề. deg+(4) có giá trị là bao nhiêu?  
Ke(1) \= {2, 4}, Ke(2) \= {1, 3, 4} , Ke(4) \= {2, 10}  
Ke(3) \= {5} , Ke(5) \= {1, 3, 4}

 A.  
2

 B.  
3

 C.  
4

 D.  
1

 E.  
Các phương án khác đều sai.

**Câu 8\.**  
Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:  
0 1 3 3  
1 0 2 2  
3 2 0 2  
3 2 2 0  
Sử dụng thuật toán Kruskal với hiệu chỉnh phù hợp, tìm cây khung T của G có tổng trọng số WT lớn nhất. Các cạnh của cây khung lớn nhất T theo thứ tự tìm kiếm của thuật toán với WT là:

 A.  
T \= {(1,3), (1,4), (2,3)} với WT \= 9\.

 B.  
 Các phương án khác đều sai.

 C.  
T \= {(1,3), (1,4), (2,3)} với WT \= 8\.

 D.  
T \= {(1,3), (1,4), (3,4)} với WT \= 8\.

 E.  
T \= {(1,3), (1,4), (2,4)} với WT \= 8\.

**Câu 9\.**  
Đồ thị G \= (V, E) được biểu diễn dưới dạng ma trận trọng số dưới đây.  
Tổng tất cả bán bậc vào của đồ thị bằng bao nhiêu?  
∞ 3 1 2 ∞  
3 ∞ 6 ∞ ∞  
∞ ∞ ∞ 1 ∞  
5 2 ∞ ∞ ∞  
6 ∞ ∞ 1 ∞

 A.  
Các phương án khác đều sai.

 B.  
10

 C.  
31

 D.  
11

 E.  
30

**Câu 10\.**  
 Đồ thị vô hướng G \= (V, E) gồm 5 đỉnh được biểu diễn dưới dạng ma trận liên thuộc. Đỉnh nào là đỉnh treo của đồ thị?  
1 1 1 0 0 0 0  
1 0 0 1 0 0 0  
0 1 0 0 1 1 0  
0 0 1 0 1 0 1  
0 0 0 1 0 1 1

 A.  
Đỉnh 2

 B.  
Đỉnh 3

 C.  
Đỉnh 1

 D.  
Các phương án khác đều sai.

 E.  
Đỉnh 4

**Câu 11\.**  
Đồ thị có hướng G \= (V, E). Mô tả nào dưới đây là sai?

 A.  
Số cạnh của đồ thị \= Tổng tất cả bán bậc vào của các đỉnh trong đồ thị.

 B.  
Các phương án khác đều sai.  
 

 C.  
Tổng tất cả bán bậc ra của các đỉnh trong đồ thị luôn là số chẵn.

 D.  
Số cạnh của đồ thị không lớn hơn tổng tất cả bán bậc ra của các đỉnh trong đồ thị.

 E.  
Tổng tất cả bán bậc ra \= Tổng tất cả bán bậc vào của các đỉnh trong đồ thị.

**Câu 12\.**  
Trong ma trận kề đối với đồ thị vô hướng, tổng các phần tử của ma trận bằng bao nhiêu?  
Với m là số cạnh của đồ thị

 A.  
2m (Đ)

 B.  
m+1

 C.  
Các phương án khác đều sai.

 D.  
m

 E.  
m-1

**Câu 13\.**  
**Đơn đồ thị có hướng G \= (V, E) gồm 6 đỉnh được biểu diễn dưới dạng danh sách cạnh như dưới. deg\-(6) bằng bao nhiêu?**

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 6 |
| 1 | 5 | 4 | 5 |
| 2 | 3 | 4 | 6 |
| 2 | 4 | 5 | 6 |
| 2 | 5 |  |  |

 A.  
0

 B.  
3

 C.  
Các phương án khác đều sai.

 D.  
2

 E.  
1

**Câu 14\.**  
 Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 1 1 0 0  
1 0 1 1 1  
1 1 0 1 0  
0 1 1 0 1  
0 1 0 1 0  
Nếu M là ma trận liên thuộc với các cạnh được xét theo thứ tự từ điển của G thì:

 A.  
M gồm 7 hàng và 5 cột với M\[1\]\[2\] \= M\[2\]\[2\] \= 1\.

 B.  
M gồm 5 hàng và 7 cột với M\[3\]\[7\] \= M\[5\]\[7\] \= 1\.

 C.  
Các phương án khác đều sai.

 D.  
M gồm 5 hàng và 7 cột với M\[1\]\[2\] \= M\[2\]\[1\] \= 1\.

 E.  
M gồm 5 hàng và 7 cột với M\[3\]\[6\] \= M\[4\]\[6\] \= 1\.

**Câu 15\.**  
Cho mạng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 4 | 6 | 4 | 3 | 7 |
| 1 | 5 | 5 | 5 | 2 | 6 |
| 3 | 2 | 6 | 5 | 3 | 7 |

Xét hàm f trong mạng G với các giá trị khác 0: f(1,4) \= 6, f(1,5) \= 5, f(3,2) \= 6, f(4,3) \= 6, f(5,2) \= 5 Chọn phương án đúng trong các phương án sau:

 A.  
Hàm f không phải là luồng trong mạng G.

 B.  
Hàm f là luồng trong G với val(f) \= 11, nhưng không phải là luồng cực đại.

 C.  
Hàm f là luồng cực đại với val(f) \= 12\.

 D.  
Hàm f là luồng cực đại với val(f) \= 11\.

 E.  
Các phương án khác đều sai.

**Câu 16\.**  
Đơn đồ thị có hướng G \= (V, E) biểu diễn dưới dạng danh sách kề. Đồ thị này có bao nhiêu cạnh?  
Ke(1) \= {2, 3, 4}, Ke(2) \= {1, 5} , Ke(4) \= {5}  
Ke(3) \= {1, 4} , Ke(5) \= {1, 2, 3, 4}

 A.  
12

 B.  
14

 C.  
7

 D.  
Các phương án khác đều sai.

 E.  
6

**Câu 17\.**  
Cho đơn đồ thị có hướng G gồm 5 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {5} Ke(2) \= {5} Ke(3) \= {2, 4} Ke(4) \= (1} Ke(5) \= {3, 4}  
Sử dụng thuật toán tìm đường đi Euler E của G. Các đỉnh xuất hiện trong E theo thứ tự khi thực hiện thuật toán là:

 A.  
Các phương án khác đều sai.

 B.  
E \= {4, 1, 5, 3, 2, 5, 4, 3}.

 C.  
E \= {5, 3, 2, 5, 4, 1, 5, 3}.

 D.  
E \= {3, 2, 5, 3, 4, 1, 5, 4}.

 E.  
E \= {3, 4, 1, 5, 3, 2, 5, 4}.

**Câu 18\.**  
 Cho đa đồ thị vô hướng G gồm 4 đỉnh dưới dạng ma trận trọng số:  
0 1 2 3  
1 0 3 1  
2 3 0 5  
3 1 5 0  
Bậc của các đỉnh thuộc G là:

 A.  
deg(1) \= 3, deg(2) \= 5, deg(3) \= 10 và deg(4) \= 9\.

 B.  
deg(1) \= 6, deg(2) \= 3, deg(3) \= 10 và deg(4) \= 9\.

 C.  
Các phương án khác đều sai.

 D.  
deg(1) \= 6, deg(2) \= 5, deg(3) \= 10 và deg(4) \= 3\.

 E.  
deg(1) \= 6, deg(2) \= 5, deg(3) \= 10 và deg(4) \= 9\.

**Câu 19\.**  
Trong ma trận kề đối với đồ thị có hướng, tổng các phần tử của ma trận bằng bao nhiêu?  
Với m là số cạnh của đồ thị

 A.  
2m

 B.  
Các phương án khác đều sai.

 C.  
2m-1

 D.  
2m+1

 E.  
m

**Câu 20\.**  
Đồ thị vô hướng G \= (V,E) gồm 6 đỉnh được biểu diễn dưới dạng danh sách kề như dưới. Số thành phần liên thông của đồ thị là bao nhiêu?  
Ke(1) \= {2, 3} Ke(4) \= {2, 3, 5, 6}  
Ke(2) \= {1, 3, 4, 5} Ke(5) \= {2, 4, 6}  
Ke(3) \= {1, 2, 4} Ke(6) \= {4, 5}

 A.  
5

 B.  
2

 C.  
3

 D.  
4

 E.  
Các phương án khác đều sai.

**Câu 21\.**  
Cho đơn đồ thị có trọng số G \= (V,E) gồm n đỉnh. Cần tìm đường đi ngắn nhất giữa các cặp đỉnh của G. Chọn phương án đúng trong các phương án dưới đây:

 A.  
Nên sử dụng thuật toán Floyd tìm đường đi ngắn nhất giữa tất cả các cặp đỉnh trên đồ thị trong trường hợp G do thuật toán này phù hợp nhất.

 B.  
Nên sử dụng n lần thuật toán Dijkstra tương ứng tìm đường đi ngắn nhất từ các đỉnh 1, …, n đến các đỉnh còn lại trên đồ thị do thuật toán này có tốc độ tính toán nhanh hơn.

 C.  
Các phương án khác đều sai.

 D.  
Nên sử dụng n lần thuật toán Bellman-Ford tương ứng tìm đường đi ngắn nhất từ các đỉnh 1, …, n đến các đỉnh còn lại trên đồ thị do thuật toán này có thể phát hiện G có chứa chu trình âm.

 E.  
Nên sử dụng n lần thuật toán Bellman-Ford tương ứng tìm đường đi ngắn nhất từ các đỉnh 1, …, n đến các đỉnh còn lại trên đồ thị do thuật toán này dễ cài đặt hơn.

**Câu 22\.**  
 Đồ thị vô hướng G \= (V, E) biểu diễn dưới dạng ma trận kề dưới đây.  
0 1 1 0 0 1  
1 0 0 1 1 1  
1 0 0 1 1 0  
0 1 1 0 1 1  
0 1 1 1 0 0  
1 1 0 1 0 0  
Đồ thị này có bao nhiêu cạnh?

 A.  
20

 B.  
18

 C.  
9

 D.  
Các phương án khác đều sai.

 E.  
10

**Câu 23\.**  
Cho đơn đồ thị vô hướng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 3 | 2 | 5 |
| 1 | 4 | 3 | 4 |
| 2 | 4 | 4 | 5 |

Hãy chọn phương án đúng trong các phương án sau:

 A.  
Các phương án khác đều sai.

 B.  
G không phải là đồ thị Euler.

 C.  
G không phải là đồ thị nửa Euler.

 D.  
G là đồ thị Euler.

 E.  
G không phải là đồ thị Euler nhưng là nửa Euler.

**Câu 24\.**  
Cho mạng G \= (V,E) gồm 5 đỉnh dưới dạng ma trận trọng số:  
0 6 4 0 0  
0 0 0 5 4  
0 0 0 5 0  
0 0 0 0 4  
0 0 0 0 0  
Xét luồng f trong mạng G đồng nhất bằng 0\. Đường tăng luồng P tìm được khi sử dụng BFS(1) có giá trị tăng luồng d tương ứng trên Gf là:

 A.  
 P \= 1®2®5 và d \= 4\.

 B.  
P \= 1®2®5 và d \= 6\.

 C.  
 P \= 1®2®4®5 và d \= 4\.

 D.  
Các phương án khác đều sai.

 E.  
P \= 1®2®4®5 và d \= 5\.

**Câu 25\.**  
Đồ thị vô hướng G \= (V, E) gồm 5 đỉnh được biểu diễn dưới dạng ma trận kề như hình dưới. Cạnh nào dưới đây là cạnh cầu?  
0 0 1 0 1  
0 0 0 1 0  
1 0 0 1 0  
0 1 1 0 1  
1 0 0 1 0

 A.  
Cạnh (4, 5\)

 B.  
 Các phương án khác đều sai.

 C.  
Cạnh (1, 5\)

 D.  
Cạnh (1, 3\)

 E.  
Cạnh (2, 4\)

**Câu 26\.**  
Cho đơn đồ thị T \= (V, E) gồm n đỉnh và m cạnh là một cây. Hãy chọn phương án đúng trong các phương án sau:

 A.  
T là đồ thị không chứa chu trình.

 B.  
T là đồ thị vô hướng liên thông và không chứa chu trình.

 C.  
T là đồ thị vô hướng có m \= n-1 cạnh.

 D.  
Các phương án khác đều sai.

 E.  
T là đồ thị liên thông và không chứa chu trình.

**Câu 27\.**  
 Cho đơn đồ thị có hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 0 0 1 1  
1 0 0 0 0  
0 0 0 1 0  
0 1 0 0 1  
1 0 1 0 0  
Sử dụng thuật toán tìm chu trình Euler E của G bắt đầu tại đỉnh s \= 1\. Các đỉnh xuất hiện trong E theo thứ tự khi thực hiện thuật toán là:

 A.  
Các phương án khác đều sai.

 B.  
E \= {1, 4, 2, 1, 5, 3, 4, 5, 1}.

 C.  
E \= {1, 5, 1, 4, 5, 3, 4\. 2, 1}.

 D.  
E \= {1, 4, 5, 3, 4, 2, 1, 5, 1}.

 E.  
E \= {1, 5, 3, 4, 2, 1, 4, 5, 1}.

**Câu 28\.**  
Cho đơn đồ thị vô hướng G \= (V, E) gồm n đỉnh. Xét mô tả thuật toán sử dụng DFS tìm cây khung T của G bắt đầu tại đỉnh s như sau:

| Dfs(s){     VS\[s\] \= 1;     For v Î Ke(s)          if (VS\[v\] \= 0\) {                T \= T È (s, v);                  Dfs(v);          } } | Tree\_Dfs(s){      For  v Î V                 VS\[v\] \= 0;      T \= Æ;      Dfs(s);      For v Î V         if (VS\[v\] \= 0\) Return(\< Không có cây khung\>);      Return (T); } |
| :---- | :---- |

Hãy chọn phương án đúng trong các phương án sau:

 A.  
T là cây khung của G vì T có n cạnh.

 B.  
T là cây khung của G vì T liên thông và có n đỉnh.

 C.  
T là cây khung của G vì T không chứa chu trình.

 D.  
T là cây khung của G vì T liên thông, có n đỉnh và n-1 cạnh.

**Câu 29\.**  
15 Thuật toán nào không phải là thuật toán được áp dụng để giải quyết bài toán tìm đường đi ngắn nhất trên đồ thị?

 A.  
Kruskal.

 B.  
Bellman-Ford.

 C.  
Floyd.

 D.  
Dijkstra.

**Câu 30\.**  
Đồ thị vô hướng G \= (V, E) gồm 5 đỉnh được biểu diễn dưới dạng ma trận liên thuộc. Đồ thị này có bao nhiêu cạnh?  
1 1 1 0 0 0 0  
1 0 0 1 0 0 0  
0 1 0 0 1 1 0  
0 0 1 0 1 0 1  
0 0 0 1 0 1 1

 A.  
8

 B.  
Các phương án khác đều sai.

 C.  
5

 D.  
6

 E.  
7

**Câu 31\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:

| 0 | 5 | ¥ | \-4 |
| :---: | :---: | :---: | :---: |
| ¥ | **0** | \-6 | ¥ |
| 3 | ¥ | **0** | \-2 |
| 1 | 2 | 4 | **0** |

Sử dụng thuật toán Floyd tìm đường đi ngắn nhất giữa các cặp đỉnh của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 4 là 14 với độ dài d\[1\]\[4\] \= \-4.

 B.

Các phương án khác đều sai.

 C.

G chứa chu trình âm.

 D.

Đường đi ngắn nhất từ đỉnh 3 đến đỉnh 1 là 31 với độ dài d\[3\]\[1\] \= 3\.

 E.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 2 là 42 với độ dài d\[4\]\[2\] \= 2\.

**Câu 32\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:

| 0 | ¥ | ¥ | \-1 |
| :---: | :---: | :---: | :---: |
| ¥ | **0** | \-2 | ¥ |
| 3 | ¥ | **0** | ¥ |
| ¥ | 4 | 3 | **0** |

Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 4 đến các đỉnh còn lại của G. Đỉnh t có đường đi ngắn nhất từ s đến t có giá trị lớn nhất là:

 A.

Đỉnh t \= 2\.

 B.

Đỉnh t \= 3\.

 C.

Đỉnh t \= 1\.

 D.

Các phương án khác đều đúng.

 E.

Các phương án khác đều sai.

**Câu 33\.**

 Đồ thị vô hướng G \= (V, E) gồm 8 đỉnh biểu diễn dưới dạng danh sách kề như bên dưới. Sử dụng thuật toán DFS tìm kiếm đường đi từ đỉnh 1 đến đỉnh 8?  
Ke(1) \= {2,3,6}, Ke(2) \= {1,4,7} Ke(5) \= {3,7,8}, Ke(6) \= {1,3,8}  
Ke(3) \= {1,5,6}, Ke(4) \= {2} Ke(7) \= {2,5}, Ke(8) \= {5,6}

 A.

1 \-\> 2 \-\> 7 \-\> 5 \-\> 8

 B.

1 \-\> 3 \-\> 5 \-\> 8

 C.

Các phương án khác đều sai.

 D.

1 \-\> 2 \-\> 7 \-\> 5 \-\> 3 \-\> 6 \-\> 8

 E.

1 \-\> 6 \-\> 8

**Câu 34\.**

 Đồ thị G= được biểu diễn dưới dạng ma trận trọng số dưới đây.  
Tổng tất cả bán đỉnh bậc vào các đỉnh của đồ thị là bao nhiêu?

| ∞ | 3 | ∞ | ∞ | ∞ | 5 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 2 | ∞ | ∞ | ∞ | 1 | ∞ |
| ∞ | ∞ | ∞ | 2 | 6 | 1 |
| 1 | ∞ | 3 | ∞ | 2 | ∞ |
| ∞ | 4 | 3 | 5 | ∞ | ∞ |
| ∞ | ∞ | 2 | 7 | ∞ | ∞ |

 A.

8

 B.

7

 C.

15 (Đ)

 D.

14

 E.

Các phương án khác đều sai.

**Câu 35\.**

Đồ thị G \= (V, E) biểu diễn dưới dạng ma trận kề dưới đây.  
0 1 1 0 0 0  
1 0 0 1 1 0  
1 0 0 1 1 0  
0 1 1 0 1 0  
0 1 1 1 0 0  
0 0 0 0 0 0  
Đỉnh nào là đỉnh cô lập của G?

 A.

Đỉnh 2

 B.

Đỉnh 5

 C.

Đỉnh 4

 D.

Đỉnh 1

 E.

Các phương án khác đều sai.

**Câu 36\.**

 Đồ thị vô hướng G \= (V, E) gồm 5 đỉnh được biểu diễn dưới dạng ma trận kề như bên dưới. Đâu là thứ tự duyệt các đỉnh của thuật toán DFS?  
0 1 1 1 1  
1 0 0 0 1  
1 0 0 1 0  
1 0 1 0 1  
1 1 0 1 0

 A.

{5, 4, 3, 2, 1}

 B.

{1, 2, 5, 4, 3}

 C.

Các phương án khác đều sai.

 D.

{2, 3, 4, 5, 1}

 E.

{1, 5, 4, 3, 2}

**Câu 37\.**

Cho đồ thị vô hướng G \= (V, E) gồm 6 đỉnh dưới dạng danh sách cạnh:  
Đỉnh đầu Đỉnh cuối Đỉnh đầu Đỉnh cuối  
1 2 2 4  
1 5 2 6  
1 6 4 6  
2 3 5 6  
Nếu biểu diễn G dưới dạng ma trận kề A thì:

 A.

Ma trận A gồm 6 hàng, 6 cột và có hàng 2 là (1, 0, 1, 1, 0, 1).

 B.

Các phương án khác đều sai.

 C.

Ma trận A gồm 6 hàng, 6 cột và có hàng 5 là (0, 0, 0, 0, 0, 1).

 D.

Ma trận A gồm 6 hàng, 6 cột và có cột 2 là (0, 0, 1, 1, 0, 1).

 E.

Ma trận A gồm 6 hàng, 6 cột và có hàng 4 là (0, 0, 0, 0, 0, 1).

**Câu 38\.**

 Cho đồ thị vô hướng G \= (V, E). Đỉnh nào là đỉnh cô lập của đồ thị?

![2Q==][image1]

 A.

Đỉnh 5

 B.

Đỉnh 8

 C.

Đỉnh 7

 D.

Đỉnh 2\.

 E.

Các phương án khác đều sai.  
 

**Câu 39\.**

Xét thuật toán tìm luồng cực đại trên mang G \= (V, E) sau đây:

| *Thuật toán Max\_Flow { (1)    for u ÎV do               for v  ÎV do f(u, v) \= 0; (2)   Stop \= 0; (3)   while (Stop \= 0\) do {   (4)       \<Xác định đồ thị tăng luồng Gf \>; (5)        if (Tìm được đường tăng luồng P bằng Bfs(s)) { (6)                  \<Tìm d là  trọng số nhỏ nhất trên P\>; \<Tăng luồng f theo P\>; (7)                 } else Stop \= 1;            }   (8)   Return (f, val(f));  }* |
| :---- |

Các thao tác trong bước (6) là:

 A.

d là trọng số nhỏ nhất trên P\>; ;

 B.

d là trọng số nhỏ nhất trên P\>; ; 

 C.

d là trọng số lớn nhất trên P\>; ;

 D.

d là trọng số nhỏ nhất trên G\>; ;

 E.

Các phương án khác đều sai.

**Câu 40\.**

Xét hàm trên C/C++ biểu diễn thuật toán tìm chu trình/đường đi Euler:

| void ceu(int a\[\]\[\], int n, int u) {    int top \=0, v; k= 0;    top++; s\[top\]= u;   while (top \> 0\)  {        int v= s\[top\];  int ok= 1;      for (int x= 1; x\<= n; x++)         if (a\[v\]\[x\] \==1){                  …                  break;                     }        |    if (ok \== 1\) {                     k++; ce\[k\]= v;                     top--;                   }           }      for (v \= k; v\> 0; v--)                   cout \<\< ce\[v\] \<\< “ “; }       |
| :---- | :---- |

Các câu lệnh còn thiếu ở vị trí dấu ba chấm là:

 A.

s\[top\]= x; ok= 0;

 B.

top++; s\[top\]= x;

 C.

top++; s\[top\]= x; a\[v\]\[x\]= 0;

 D.

top++; s\[top\]= x; ok= 0; a\[v\]\[x\]= 0;

 E.

Các phương án khác đều sai.

**Câu 41\.**

Cho đồ thị G \= (V, E) gồm n đỉnh. Hãy chọn phương án đúng:

 A.

Chu trình bắt đầu tại đỉnh v đi qua tất cả các đỉnh còn lại của G, mỗi đỉnh 1 lần rồi quay trở về v gọi là chu trình Hamilton.

 B.

Chu trình trong G đi qua mỗi đỉnh của nó không quá 1 lần gọi là chu trình Hamilton.

 C.

Các phương án khác đều sai.

 D.

Chu trình trong G đi qua mỗi cạnh của nó không quá 1 lần gọi là chu trình Hamilton.

 E.

Chu trình trong G gồm n cạnh gọi là chu trình Hamilton.

**Câu 42\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 1 | 2 | 3 | 2 |
| 1 | 3 | 1 | 2 | 4 | 5 |
| 1 | 4 | 3 | 3 | 4 | 2 |

Sử dụng thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh s \= 2 đến đỉnh t \= 4 của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 4 là 234 với độ dài d\[4\] \= 4\.

 B.

Các phương án khác đều sai.

 C.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 4 là 214 với độ dài d\[4\] \= 4\.

 D.

Không sử dụng được thuật toán Dijkstra cho đồ thị vô hướng.

 E.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 4 là 2134 với độ dài d\[4\] \= 4\.

**Câu 43\.**

Cho mạng G \= (V,E) gồm 5 đỉnh dưới dạng ma trận trọng số:  
0 0 0 6 2  
0 0 0 0 3  
2 4 0 0 0  
0 0 0 0 1  
0 0 0 0 0  
Chọn phương án đúng trong các phương án dưới đây:

 A.

Các phương án khác đều sai.

 B.

Lát cắt (X, X\*) với X \= {1, 3} có khả năng thông qua là C(X, X\*) \= 12\.

 C.

Lát cắt (X, X\*) với X \= {3, 5} có khả năng thông qua là C(X, X\*) \= 6\.

 D.

Lát cắt (X, X\*) với X \= {3, 5} có khả năng thông qua là C(X, X\*) \= 12\.

 E.

Lát cắt (X, X\*) với X \= {1, 3} có khả năng thông qua là C(X, X\*) \= 14\.

**Câu 44\.**

 Đồ thị có hướng G \= (V, E) biểu diễn dưới dạng ma trận kề dưới đây.  
0 1 1 0 0 1  
1 0 0 1 1 1  
0 0 0 1 1 0  
1 1 0 0 1 1  
1 0 1 0 0 0  
0 0 0 1 1 0  
Bán bậc ra của đỉnh 6 lớn hơn bán bậc ra của đỉnh nào?

 A.

2

 B.

3

 C.

4

 D.

Các phương án khác đều sai.

 E.

1

**Câu 45\.**

 Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 1 1 0 0  
1 0 1 1 1  
1 1 0 1 0  
0 1 1 0 1  
0 1 0 1 0  
Chọn phương án đúng khi nói về danh sách kề của G:

 A.

Đỉnh 2 có mặt trong Ke(1), Ke(3), Ke(4) và Ke(5).

 B.

Đỉnh 4 có mặt trong Ke(1), Ke(2), Ke(3) và Ke(5).

 C.

Đỉnh 3 có mặt trong Ke(1), Ke(2), Ke(4) và Ke(5).

 D.

Các phương án khác đều sai.

 E.

Đỉnh 1 có mặt trong Ke(2), Ke(3), Ke(4) và Ke(5).

**Câu 46\.**

23 Cho đơn đồ thị vô hướng có trọng số G \= (V, E) gồm n đỉnh. Điều kiện cần và đủ để G có cây khung nhỏ nhất là:

 A.

G là đồ thị liên thông.

 B.

Các phương án khác đều sai.

 C.

G chỉ chứa các trọng số không âm.

 D.

G không chứa chu trình âm.

 E.

G chỉ chứa không quá 2 đỉnh bậc lẻ.

**Câu 47\.**

 Cho đơn đồ thị có hướng G gồm 5 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {3} Ke(2) \= {4, 5} Ke(3) \= {2, 4} Ke(4) \= (2, 5} Ke(5) \= {1, 3}  
Hãy chọn phương án đúng trong các phương án sau:

 A.

G là đồ thị Euler.

 B.

G không phải là đồ thị Euler nhưng là nửa Euler.

 C.

G không phải là đồ thị nửa Euler.

 D.

Các phương án khác đều sai.

 E.

G không phải là đồ thị Euler.

**Câu 48\.**

 Cho đồ thị vô hướng G \= (V,E) được biểu diễn dưới dạng ma trận kề dưới đây. Cần bổ sung cạnh nào trong các cạnh dưới đây để đồ thị G có thể định chiều được?  
0 1 1 0 0  
1 0 1 1 0  
1 1 0 0 0  
0 1 0 0 1  
0 0 0 1 0

 A.

Không cần bổ sung cạnh, G có thể định chiều được

 B.

Cạnh (3, 4\)

 C.

Cạnh (1, 4\)

 D.

Các phương án khác đều sai.

 E.

Cạnh (3, 5\)

**Câu 49\.**

 Trường hợp đồ thị được biểu diễn dưới dạng ma trận kề, độ phức tạp của thuật toán Depth First Search có giá trị là bao nhiêu?

 A.

O(n.m)

 B.

Các phương án khác đều sai.

 C.

O(n2)

 D.

O(max(n, m))

 E.

O(n)

**Câu 50\.**

 Đồ thị có hướng G \= (V, E) gồm 4 đỉnh, 6 cạnh được biểu diễn dưới dạng ma trận liên thuộc. deg+(d) có giá trị là bao nhiêu?

| a | 1 | 1 | 1 | 0 | 0 | 0 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| b | \-1 | 0 | 0 | 1 | 1 | 0 |
| c | 0 | \-1 | 0 | \-1 | 0 | 1 |
| d | 0 | 0 | \-1 | 0 | \-1 | \-1 |

 A.

1

 B.

3

 C.

Các phương án khác đều sai.

 D.

2

 E.

4

**Câu 51\.**

 Đơn đồ thị vô hướng G \= (V,E) gồm 5 đỉnh biểu diễn dưới dạng danh sách kề.  
Ke(1) \= {2, 3}, Ke(2) \= {1, 3, 4, 5} Ke(4) \= {2, 3, 5}  
Ke(3) \= {1, 2, 4} Ke(5) \= {2, 4}  
Biểu diễn G dưới dạng ma trận liên thuộc M với các cạnh theo thứ tự từ điển có:

 A.

Các phương án khác đều sai.

 B.

M gồm 5 hàng và 7 cột và có M\[1\]\[1\] \= 1, M\[3\]\[1\] \= 1\.

 C.

M gồm 5 hàng và 7 cột và có M\[2\]\[5\] \= 1, M\[5\]\[5\] \= 1\.

 D.

M gồm 7 hàng và 7 cột và có M\[2\]\[3\] \= 1, M\[3\]\[3\] \= \-1.

 E.

M gồm 5 hàng và 7 cột và có M\[4\]\[7\] \= \-1, M\[5\]\[7\] \= 1\.

**Câu 52\.**

Cho đơn đồ thị vô hướng có trọng số G \= (V, E) gồm n đỉnh và m cạnh. Xét mô tả thuật toán Kruskal tìm cây khung nhỏ nhất T và WT của G như sau:

| (1) (2) T= Æ;  WT= 0; k \= 0; (3)  For  (ei Î E){           if ( T È {ei} không chứa chu trình){               T \= T È {ei};                 WT= WT \+ \<Trọng số của ei\>;                    |               k++;               if  (k \= n-1)                       Return (T và WT);                  }         }  (4) Return (\<G không có cây khung\>); |
| :---- | :---- |

Thao tác cần thực hiện trong bước (1) là:

 A.

Đánh dấu tất cả các đỉnh v V chưa được chọn (VS(v) \= 0).

 B.

Đánh dấu tất cả các cạnh ei V chưa được chọn (VS(ei) \= 0).

 C.

Các phương án khác đều sai.

 D.

Sắp xếp m cạnh của G theo thứ tự tăng của trọng số e1, …, em.

 E.

Sắp xếp m cạnh của G theo thứ tự từ điển e1, …, em.

**Câu 53\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 4 | 2 | 4 | 1 |
| 1 | 3 | 2 | 3 | 2 | \-4 |
| 1 | 4 | \-1 | 4 | 3 | 2 |

Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 1 đến đỉnh t \= 4 của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

G chứa chu trình âm.

 B.

Các phương án khác đều sai.

 C.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 4 là 1324 với độ dài d\[4\] \= \-1.

 D.

Không tìm được đường đi ngắn nhất từ đỉnh 1 dến đỉnh 4\.

 E.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 4 là 14 với độ dài d\[4\] \= \-1.

**Câu 54\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:

| 0 | ¥ | 4 | 1 |
| :---: | :---: | :---: | :---: |
| 8 | **0** | \-2 | 9 |
| 3 | ¥ | **0** | 1 |
| 2 | 1 | ¥ | **0** |

Sử dụng thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh s \= 2 đến các đỉnh còn lại của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 1 là 2341 với độ dài d\[1\] \= 1\.

 B.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 3 là 23 với độ dài d\[3\] \= \-2.

 C.

Không sử dụng được thuật toán Dijkstra do G chứa trọng số âm.

 D.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 4 là 234 với độ dài d\[4\] \= \-1.

 E.

Các phương án khác đều sai.

**Câu 55\.**

 Xét một cách mô tả thuật toán Floyd tìm đường đi ngắn nhất giữa các cặp đỉnh của đơn đồ thị có trọng số G gồm n đỉnh biểu diễn dưới dạng ma trận trọng số a\[\]\[\]:

| *(1) Khởi tạo:       (1.1) d\[i\]\[j\]= a\[i\]\[j\];       (1.2) e\[i\]\[j\]= i; (2) Thực hiện 3 vòng lặp lồng nhau:       (2.1) for  k Î G do       (2.2)       for i Î G do       (2.3)              for  j Î G do        (2.4)                if (d\[k\]\[j\]\> d\[k\]\[i\] \+ d\[i\]\[j\]) {                                        e\[k\]\[j\]= i; d\[k\]\[j\]= d\[k\]\[i\] \+ d\[i\]\[j\]; } (3) Xuất kết quả:        (3.1) Nếu có đỉnh u mà d\[u\]\[u\] \< 0 thì xuất thông báo G chứa chu trình âm;       (3.2) Ngược lại xuất d\[i\]\[j\]  và e\[i\]\[j\].* |
| :---- |

Chọn phương án đúng trong các phương án dưới đây:

 A.

Bước (1.2) bị sai.

 B.

Các phương án khác đều sai.

 C.

Bước (1.1) bị sai.

 D.

Bước (2,4) bị sai.

 E.

Bước (3.1) bị sai.

**Câu 56\.**

Trong các loại đồ thị dưới đây, đồ thị nào có thể có khuyên?

 A.

Đa đồ thị vô hướng

 B.

Đơn đồ thị có hướng

 C.

Các phương án khác đều sai.  
 

 D.

Đơn đồ thị vô hướng

 E.

Giả đồ thị vô hướng

**Câu 57\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 1 | 3 | 1 | 4 |
| 1 | 4 | 3 | 3 | 2 | 3 |
| 2 | 4 | 1 | 4 | 3 | 2 |

Sử dụng thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh s \= 1 đến đỉnh t \= 3 của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Không sử dụng được thuật toán Dijkstra cho đồ thị có hướng.

 B.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3 là 123 với độ dài d\[3\] \= 4\.

 C.

Đường đi ngắn nhất từ đỉnh 3 đến đỉnh 4 là 1243 với độ dài d\[3\] \= 4\.

 D.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3 là 13 với độ dài d\[3\] \= 4\.

 E.

Các phương án khác đều sai.

**Câu 58\.**

Cho đồ thị vô hướng G \= (V, E) như hình dưới. Chọn phương án đúng:

![2Q==][image2]

 A.

Cạnh (1,6) liên thuộc với các đỉnh 1 và 6\.

 B.

Cạnh (4,5) liên thuộc với các đỉnh 4 và 5\.

 C.

Cạnh (3,7) liên thuộc với các đỉnh 3 và 7\.

 D.

Cạnh (3,5) liên thuộc với các đỉnh 3 và 5\.

 E.

Các phương án khác đều sai.  
 

**Câu 59\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:

| 0 | ¥ | ¥ | \-1 |
| :---: | :---: | :---: | :---: |
| ¥ | **0** | \-2 | ¥ |
| 2 | ¥ | **0** | ¥ |
| ¥ | 4 | 3 | **0** |

Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 4 đến các đỉnh còn lại của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Các phương án đưa ra đường đi ngắn nhất và độ dài tương ứng đều đúng.

 B.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 1 là 4231 với độ dài d\[1\] \= 4\.

 C.

Các phương án khác đều sai.

 D.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 3 là 423 với độ dài d\[3\] \= 2\.

 E.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 2 là 42 với độ dài d\[2\] \= 4\.

**Câu 60\.**

Đồ thị vô hướng G \= (V, E) được biểu diễn dưới dạng ma trận kề như hình dưới. Đỉnh nào dưới đây là đỉnh trụ của đồ thị?  
0 1 1 1 1  
1 0 0 1 0  
1 0 0 1 0  
1 1 1 0 0  
1 0 0 0 0

 A.

Đỉnh 2

 B.

Đỉnh 4

 C.

Đỉnh 5

 D.

 Các phương án khác đều sai.

 E.

Đỉnh 3

**Câu 61\.**

 Đơn đồ thị vô hướng G \= (V,E) gồm 5 đỉnh biểu diễn dưới dạng danh sách kề.  
Ke(1) \= {2, 3}, Ke(2) \= {1, 3, 4, 5} Ke(4) \= {2, 3, 5}  
Ke(3) \= {1, 2, 4} Ke(5) \= {2, 4}  
Biểu diễn G dưới dạng danh sách cạnh gồm các cạnh theo thứ tự là:

 A.

Các phương án khác đều sai.

 B.

(1,2), (1,3), (2,4), (2,5), (4,3) và (4,5).

 C.

(1,2), (1,3), (2,4), (2,5), (3,4) và (5,4).

 D.

(1,2), (1,3), (2,4), (2,5), (3,4) và (4,5)

 E.

(1,2), (3,1), (2,4), (2,5), (4,3) và (4,5).

**Câu 62\.**

Cho mạng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 3 | 5 | 3 | 2 | 3 |
| 1 | 4 | 7 | 4 | 2 | 6 |
| 2 | 5 | 5 | 4 | 5 | 3 |

Xét luồng f trong mạng G đồng nhất bằng 0\. Đường tăng luồng P tìm được khi sử dụng BFS(1) có giá trị tăng luồng d tương ứng trên Gf là:

 A.

P \= 1®3®2®5 và d \= 5\.

 B.

P \= 1®4®2®5 và d \= 5\.

 C.

Các phương án khác đều sai.

 D.

P \= 1®4®5 và d \= 3\.

 E.

 P \= 1®3®2®5 và d \= 3\.

**Câu 63\.**

 Đồ thị vô hướng G \= (V, E) gồm 8 đỉnh biểu diễn dưới dạng ma trận kề như bên dưới. Sử dụng thuật toán BFS để tìm kiếm đường đi từ đỉnh 1 đến đỉnh 8?  
0 1 1 1 0 0 0 0  
1 0 1 1 0 1 0 0  
1 1 0 1 1 0 0 0  
1 1 1 0 0 0 1 0  
0 0 1 0 0 1 1 1  
0 1 0 0 1 0 1 0  
0 0 0 1 1 1 0 1  
0 0 0 0 1 0 1 0

 A.

1 \-\> 4 \-\> 7 \-\> 8

 B.

1 \-\> 3 \-\> 5 \-\> 8

 C.

1 \-\> 2 \-\> 6 \-\> 5 \-\> 8

 D.

Các phương án khác đều sai.

 E.

1 \-\> 2 \-\> 3-\> 4 \-\> 7 \-\> 5 \-\> 8

**Câu 64\.**

Cho đơn đồ thị vô hướng T gồm 5 đỉnh dưới dạng danh sách kề:

| Ke(1) \= {4, 5} | Ke(2) \= {3} | Ke(3) \= {2} | Ke(4) \= {1, 5} | Ke(5) \= {1, 4} |
| :---- | :---- | :---- | :---- | :---- |

Chọn phương án đúng trong các phương án dưới đây:

 A.

T không phải là cây vì T không chứa đỉnh trụ.

 B.

T là cây vì T có chứa đúng 4 cạnh (1,4), (1,5), (2,3) và (4,5).

 C.

T là cây vì T có đúng 2 đỉnh bậc lẻ 2 và 3\.

 D.

T không phải là cây vì T có chứa chu trình.

**Câu 65\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 3 | 2 | 6 |
| 1 | 3 | 5 | 3 | 4 | 1 |
| 2 | 3 | \-5 | 4 | 1 | \-6 |

Kí hiệu d\[i\]\[j\] là độ dài đường đi ngắn nhất từ i đến j và e\[i\]\[j\] là đỉnh trước j trên đường đi ngắn nhất từ i đến j. Sử dụng thuật toán Floyd tìm đường đi ngắn nhất giữa các cặp đỉnh của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

G chứa chu trình âm.

 B.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 1 là 41 với độ dài d\[4\]\[1\] \= \-6.

 C.

Các phương án khác đều sai.

 D.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 3 là 43 với độ dài d\[4\]\[1\] \= 1\.

 E.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 3 là 23 với độ dài d\[2\]\[3\] \= \-5.

**Câu 66\.**

Xét thuật toán được mô tả dưới đây:

| Euler(s){      Stack \= Æ; Queue \= Æ;      \<Đưa đỉnh s vào Stack\>;      While (Stack ¹ Æ){         \<Lấy x là đỉnh đầu của Stack\>;         if (Ke(x) ¹ Æ){             \<Lấy y là đỉnh đầu tiên của Ke(x)\>;               \<Đưa đỉnh y vào Stack\>; |          Ke(x) \= Ke(x)\\{y};                  } else{                  \<Loại bỏ đỉnh x khỏi Stack\>;                 \<Đưa đỉnh y vào Queue\>;             }      }      Return (\<Các đỉnh của Queue theo thứ tự ngược lại\>);  } |
| :---- | :---- |

Hãy chọn phương án đúng trong các phương án sau:

 A.

Thuật toán có thể tìm được chu trình/đường đi Euler bắt đầu tại đỉnh s.

 B.

Các phương án khác đều sai.

 C.

Thuật toán chỉ có thể tìm được chu trình Euler bắt đầu tại đỉnh s.

 D.

Thuật toán chỉ có thể tìm được đường đi Euler bắt đầu tại đỉnh s.

 E.

Thuật toán có thể tìm được chu trình/đường đi Euler bắt đầu tại đỉnh s của đồ thị có hướng.

**Câu 67\.**

 Đồ thị có hướng G \= (V, E) gồm 6 đỉnh được biểu diễn dưới dạng ma trận liên thuộc. Đỉnh nào là đỉnh có bán bậc ra \= 3?

|   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| a | 1 | \-1 | 1 | 0 | 0 | 0 | 0 | \-1 | 0 |
| b | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | \-1 |
| c | 0 | 1 | 0 | \-1 | 0 | 1 | 0 | 0 | 0 |
| d | 0 | 0 | \-1 | 0 | \-1 | \-1 | 0 | 0 | 0 |
| e | \-1 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |
| f | 0 | 0 | 0 | 0 | 0 | 0 | \-1 | 1 | 0 |

 A.

Đỉnh a

 B.

Đỉnh d

 C.

Đỉnh c

 D.

Đỉnh b

 E.

Các phương án khác đều sai.

**Câu 68\.**

Cho mạng G \= (V,E) với đỉnh phát s và đỉnh thu t. Một lát cắt của G là:

 A.

Cặp tập (X, X\*), trong đó X là tập con của V và X\* \= V, với s Î X và  t Î X\*.

 B.

Các phương án khác đều sai.

 C.

Cặp tập (X, X\*), trong đó X \= {s} và X\* \= VX.

 D.

Cặp tập (X, X\*), trong đó X là tập các đỉnh, X\* \= VX với s Î X và  t Î X\*. 


 E.

Cặp tập (X, X\*), trong đó X \= {s, t} và X\* \= VX.

**Câu 69\.**

Trong các mô tả về tính chất của ma trận kề đối với đồ thị có hướng, những mô tả nào là chính xác?  
1\. Tổng các phần tử của ma trận bằng số cạnh  
2\. Tổng các phần tử của hàng u bằng tổng các phần tử của cột u  
3\. Tổng các phần tử của hàng u là bán bậc ra của đỉnh u  
4\. Tổng các phần tử của cột u là bán bậc ra của đỉnh u

 A.

1, 2, 4

 B.

Các phương án khác đều sai.

 C.

1, 3

 D.

2, 3

 E.

1, 3, 4

**Câu 70\.**

Đồ thị vô hướng G \= (V,E) được biểu diễn dưới dạng danh sách kề như dưới. Số thành phần liên thông của đồ thị là bao nhiêu?  
Ke(1) \= {2, 3} , Ke(4) \= {2, 3}  
Ke(2) \= {1, 3, 4} , Ke(5) \= {6}  
Ke(3) \= {1, 2, 4}  , Ke(6) \= {5}

 A.

5

 B.

4

 C.

3

 D.

2

 E.

Các phương án khác đều sai.

**Câu 71\.**

Cho đơn đồ thị có hướng có trọng số G dưới dạng ma trận trọng số:

| 0 | 1 | 3 | 3 |
| :---: | :---: | :---: | :---: |
| 4 | **0** | 2 | 2 |
| 4 | 3 | **0** | 2 |
| 4 | 3 | 3 | **0** |

Nếu biểu diễn G dưới dạng danh sách cạnh với trọng số thì:

 A.

G gồm 12 cạnh, trong đó cạnh thứ 9 là (3,4) với trọng số 3\.

 B.

G gồm 12 cạnh, trong đó cạnh thứ 10 là (4,1) với trọng số 4\. (Đ)

 C.

Các phương án khác đều sai.

 D.

G gồm 12 cạnh, trong đó cạnh thứ 7 là (3,1) với trọng số 3\.

 E.

G gồm 12 cạnh, trong đó cạnh thứ 6 là (2,4) với trọng số 3\.

**Câu 72\.**

 Đồ thị vô hướng G \= (V, E) gồm 8 đỉnh biểu diễn dưới dạng ma trận kề như bên dưới. Sử dụng thuật toán DFS để tìm kiếm đường đi từ đỉnh 1 đến đỉnh 8?  
0 1 1 1 0 0 0 0  
1 0 1 1 0 1 0 0  
1 1 0 1 1 0 0 0  
1 1 1 0 0 0 1 0  
0 0 1 0 0 1 1 1  
0 1 0 0 1 0 1 0  
0 0 0 1 1 1 0 1  
0 0 0 0 1 0 1 0

 A.

1 \-\> 2 \-\> 3 \-\> 5 \-\> 6 \-\> 7 \-\> 8

 B.

1 \-\> 2 \-\> 6 \-\> 5 \-\> 8

 C.

1 \-\> 4 \-\> 7 \-\> 8

 D.

1 \-\> 3 \-\> 5 \-\> 8

 E.

Các phương án khác đều sai.

**Câu 73\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 6 | 2 | 3 | 6 |
| 1 | 3 | 6 | 2 | 4 | 7 |
| 1 | 4 | 8 | 3 | 4 | 6 |

1 4 8 3 4 6  
Sử dụng thuật toán Prim với hiệu chỉnh phù hợp, tìm cây khung T của G có tổng trọng số WT lớn nhất bắt đầu tại đỉnh s \= 1\. Các cạnh của cây khung lớn nhất T theo thứ tự tìm kiếm của thuật toán với WT là:

 A.

T \= {(1,4), (4,2), (4,3)} với WT \= 20\.

 B.

T \= {(1,4), (4,2), (2,3)} với WT \= 20\.

 C.

Các phương án khác đều sai.

 D.

T \= {(1,4), (4,2), (1,3)} với WT \= 20\.

 E.

T \= {(1,4), (4,2), (1,3)} với WT \= 21\.

**Câu 74\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 1 | 2 | 3 | 3 |
| 1 | 3 | 3 | 2 | 4 | 2 |
| 1 | 4 | 2 | 3 | 4 | 2 |

Sử dụng thuật toán Prim tìm cây khung nhỏ nhất T của G bắt đầu tại đỉnh s \= 2\. Các cạnh của cây khung nhỏ nhất theo thứ tự tìm kiếm của thuật toán với WT là:

 A.

Các phương án khác đều sai.

 B.

T \= {(2,1), (2,4), (3,4)} với WT \= 5\.

 C.

T \= {(2,1), (1,4), (4,3)} với WT \= 5\.

 D.

T \= {(1,2), (2,4), (4,3)} với WT \= 4\.

 E.

T \= {(2,1), (1,4), (4,3)} với WT \= 4\.

**Câu 75\.**

 Cho đơn đồ thị có hướng G gồm 5 đỉnh và 9 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 3 | 2 | 5 | 4 | 1 |
| 1 | 5 | 3 | 1 | 4 | 5 |
| 2 | 3 | 3 | 2 | 5 | 2 |

Sử dụng thuật toán liệt kê tất cả các chu trình Hamilton của G bắt đàu tại đỉnh s \= 4\. Hãy chọn phương án đúng trong các phương án sau:

 A.

Số lượng các chu trình Hamilton của G là 1

 B.

Các phương án khác đều sai.

 C.

Số lượng các chu trình Hamilton của G là 2

 D.

Số lượng các chu trình Hamilton của G là 0

 E.

Số lượng các chu trình Hamilton của G là 3

**Câu 76\.**

 Cho đồ thị vô hướng G \= (V,E) như hình dưới.  
![2Q==][image3]  
Đồ thị nào được xác định dưới đây là đồ thị con của G:

 A.

Các phương án khác đều sai.

 B.

Đồ thị H với tập đỉnh {3,4,5} và tập cạnh {(3,4), (4,5)}.

 C.

Đồ thị H với tập đỉnh {1,2,4} và tập cạnh {(1,2), (2,4)}.

 D.

Đồ thị H với tập đỉnh {3,5,6} và tập cạnh {(1,4), (4,5)}.

 E.

Đồ thị H với tập đỉnh {1,2,6} và tập cạnh {(1,2), (1,5)}.

**Câu 77\.**

 Đồ thị vô hướng G \= (V, E) gồm 6 đỉnh được biểu diễn dưới dạng danh sách cạnh như dưới đây. Giá trị của deg(2) là bao nhiêu?  
Đỉnh đầu Đỉnh cuối Đỉnh đầu Đỉnh cuối  
1 2 2 4  
1 5 2 6  
1 6 4 6  
2 3 5 6

 A.

Các phương án khác đều sai.

 B.

3

 C.

2

 D.

4

 E.

1

**Câu 78\.**

 Cho đồ thị có hướng G \= (V, E). Điều kiện cần và đủ để G là đồ thị Euler:

 A.

G liên thông mạnh và mọi đỉnh của nó đều có bán bậc vào và bán bậc ra là chẵn.

 B.

Các phương án khác đều sai.

 C.

G liên thông mạnh và mọi đỉnh của nó đều có bán bậc vào và bán bậc ra bằng nhau.

 D.

G liên thông yếu và mọi đỉnh của nó đều có bán bậc vào và bán bậc ra là chẵn.

 E.

G liên thông yếu và mọi đỉnh của nó đều có bán bậc vào và bán bậc ra bằng nhau.

**Câu 79\.**

Cho đơn đồ thị có hướng G gồm 4 đỉnh dưới dạng ma trận trọng số:  
0 1 2 3  
3 0 3 1  
1 4 0 5  
4 3 1 0  
Bán bậc của các đỉnh thuộc G là:

 A.

deg+(1) \= 8, deg+(2) \= 7, deg-(3) \= 6 và deg-(4) \= 9\.

 B.

deg-(1) \= 8, deg+(2) \= 8, deg-(3) \= 6 và deg+(4) \= 8\.

 C.

Các phương án khác đều sai.

 D.

deg+(1) \= 8, deg-(2) \= 8, deg+(3) \= 9 và deg-(4) \= 9\.

 E.

deg-(1) \= 8, deg+(2) \= 7, deg+(3) \= 9 và deg-(4) \= 9\.

**Câu 80\.**

Cho đơn đồ thị có trọng số G \= (V,E) và một đỉnh s thuộc G. Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ s đến các đỉnh còn lại chỉ khi:

 A.

G là đồ thị có hướng không chứa chu trình âm.

 B.

G là đồ thị không chứa chu trình âm.

 C.

G là đồ thị với các trọng số không âm.

 D.

Các phương án khác đều sai.

 E.

G là đồ thị có hướng.

**Câu 81\.**

Cho đồ thị có hướng như hình dưới. Chọn phương án đúng:  
![9k=][image4]

 A.

Đỉnh 1 kề với đỉnh 5\.

 B.

Đỉnh 1 kề với đỉnh 2\.

 C.

Các phương án khác đều sai.  
 

 D.

Đỉnh 5 kề với đỉnh 4\.

 E.

Đỉnh 2 kề với đỉnh 4\.

**Câu 82\.**

Trong các mô tả dưới, đâu là tính chất danh sách cạnh của đồ thị có hướng?

 A.

Đỉnh cuối nhỏ hơn đỉnh đầu mỗi cạnh

 B.

Đỉnh cuối không nhất thiết phải lớn hơn đỉnh đầu mỗi cạnh

 C.

Các phương án khác đều sai.

 D.

Đỉnh cuối lớn hơn đỉnh đầu mỗi cạnh

 E.

Đỉnh cuối không nhất thiết phải nhỏ hơn đỉnh đầu mỗi cạnh

**Câu 83\.**

Đoạn giả mã dưới đây mô tả thuật toán duyệt các thành phần liên thông của đồ thị vô hướng G có n đỉnh. Giá trị của X là bao nhiêu?

 solt \=0; //Khởi tạo giá trị số thành phần liên thông

 for(u=1; u\<=X; u++)

  if(chuaxet\[u\]) then

   solt \= solt+1;

   BFS(u);

  endif;

 endfor;

 Return(solt);

 A.

n

 B.

n-1

 C.

n+1

 D.

Các phương án khác đều sai.

 E.

n-2

**Câu 84\.**

17 Cho đơn đồ thị vô hướng G gồm 4 đỉnh dưới dạng ma trận kề:  
0 1 1 1  
1 0 1 1  
1 1 0 1  
1 1 1 0  
Sử dụng thuật toán BFS tìm cây khung T của G bắt đầu tại đỉnh s \= 2\. Các cạnh của cây khung T theo thứ tự tìm kiếm của BFS là:

 A.

T \= {(2, 1), (1, 3), (1, 4)}.

 B.

T \= {(2, 1), (1, 3), (2, 4)}.

 C.

T \= {(2, 1), (2,3), (2,4)}.

 D.

T \= {(2, 1), (2, 3), (3, 4)}.

**Câu 85\.**

Xét một cách mô tả thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s đến các đỉnh còn lại của đơn đồ thị có trọng số G gồm n đỉnh biểu diễn dưới dạng ma trận trọng số a\[\]\[\]:

| *(1) Khởi tạo:       (1.1) for vÎ G do {       (1.2)                           d\[v\]= a\[s\]\[v\]; e\[v\]= s; } (2) Bắt đầu tìm kiếm từ s:       (2.1) d\[s\] \= 0; e\[s\] \= 0;         (2.2) ok \= 0; (3) Thực hiện n-1 lần lặp:       (3.1)  ok= 1;            (3.2) for v Î G do       (3.3)        for u Î G do       (3.4)               if  (d\[u\] \> d\[v\] \+ a\[v\]\[u\]) {                                     e\[u\] \= v; d\[u\] \= d\[v\] \+ a\[v\]\[u\]; ok \= 0; }       (3.5) Nếu (ok \= 1\) thì chuyển bước (4); (4) Nếu (ok \= 1\) thì đưa ra d\[v\] và đường đi từ s đến v với mọi v Î G, v khác s; (5) Nếu (ok \= 0\) thì đưa ra thông báo G chứa chu trình âm;*  |
| :---- |

Chọn phương án đúng trong các phương án dưới đây:

 A.

Bước (3.4) bị sai.

 B.

Bước (5) bị sai.

 C.

Bước (3.5) bị sai.

 D.

Các phương án khác đều sai.

 E.

Bước (1.2) bị sai.

**Câu 86\.**

7 Cho đơn đồ thị vô hướng T gồm 4 đỉnh dưới dạng ma trận kề:  
0 1 1 0  
1 0 1 1  
1 1 0 0  
0 1 0 0  
Chọn phương án đúng trong các phương án dưới đây:

 A.

T không phải là cây vì có hai đỉnh 2 và 4 có bậc lẻ.

 B.

T là cây vì T liên thông.

 C.

T không phải là cây vì có hai đỉnh 1 và 3 có bậc chẵn.

 D.

Các phương án khác đều sai.

 E.

T không phải là cây vì có cạnh (1,2) không phải là cạnh cầu.

**Câu 87\.**

Trong các mô tả dưới đây, mô tả nào là chính xác?  
Bài toán tìm đường đi ngắn nhất từ đỉnh xuất phát (đỉnh s) đến đỉnh cuối (đỉnh t) trên đồ thị  
1\. Với s cố định và t thay đổi, đối với đồ thị có trọng số âm, bài toán luôn có lời giải bằng thuật toán Dijkstra  
2\. Với s cố định và t thay đổi, đối với đồ thị có chu trình âm, bài toán luôn có lời giải  
3\. Với s thay đổi và t thay đổi, bài toán được phát biểu dưới dạng tìm đường đi ngắn nhất từ đỉnh s đến tất cả các đỉnh còn lại trên đồ thị  
4\. Với s thay đổi và t thay đổi, đối với đồ thị có trọng số không âm, bài toán được giải quyết bằng cách thực hiện lặp lại n lần thuật toán Bellman-Ford  
5\. Với s thay đổi và t thay đổi, đối với đồ thị không có chu trình âm, bài toán được giải quyết bằng thuật toán Floyd hoặc Bellman-Ford

 A.

Các phương án khác đều sai.

 B.

2, 3, 4

 C.

4, 5

 D.

1, 5

 E.

1, 3

**Câu 88\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 1 | 3 | 4 | 6 |
| 2 | 3 | 4 | 4 | 1 | 5 |
| 3 | 1 | \-7 | 4 | 2 | 2 |

Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 1 đến các đỉnh còn lại của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 2 là 12 với độ dài d\[1\] \= 1\.

 B.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 4 là 1234 với độ dài d\[4\] \= 11\.

 C.

G không thỏa mãn điều kiện để sử dụng thuật toán Bellman-Ford.

 D.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3 là 123 với độ dài d\[3\] \= 5\.

 E.

Các phương án khác đều sai.

**Câu 89\.**

Cho đồ thị G \= (V, E). Hãy chọn phương án đúng trong các phương án sau:

 A.

Đường đi đơn của G thường gọi là đường đi Euler.

 B.

Đường đi đơn trong G chứa tất cả các cạnh của nó gọi là đường đi Euler.

 C.

Đường đi đơn của G đi qua mỗi đỉnh của nó không quá 1 lần gọi là đường đi Euler.

 D.

Các phương án khác đều sai.

 E.

Đường đi đơn trong G đi qua các cạnh của nó gọi là đường đi Euler.

**Câu 90\.**

Cho mạng G \= (V,E) và luồng f trên G. Đường tăng luồng là:

 A.

Đường đi từ s đến t trên G.

 B.

Đường đi từ s đến t trên Gf.

 C.

Các phương án khác đều sai.

 D.

Đường đi ngắn nhất từ s đến t trên G.

 E.

Đường đi ngắn nhất từ s đến t trên Gf.

**Câu 91\.**

Cho mạng G \= (V,E) gồm 5 đỉnh dưới dạng ma trận trọng số:  
0 4 4 0 0  
0 0 0 4 4  
0 0 0 0 4  
0 0 0 0 4  
0 0 0 0 0  
Xét luồng f trong mạng G với giá trị khác 0 là f(1,3) \= f(3,5) \= 4\. Đồ thị tăng luồng Gf bao gồm các cạnh cùng trọng số tương ứng là:

 A.

c(1,2) \= 4, c(1,3) \= 4, c(2,4) \= 4, c(4,5) \= 4, c(5,2) \= 4, c(5,3) \= 4\.

 B.

c(1,2) \= 4, c(1,3) \= 4, c(2,5) \= 4, c(3,5) \= 4, c(4,2) \= 4, c(4,5) \= 4\.

 C.

c(1,2) \= 4, c(2,4) \= 4, c(2,5) \= 4, c(3,1) \= 4, c(4,5) \= 4, c(5,3) \= 4\.

 D.

c(1,2) \= 4, c(2,4) \= 4, c(2,5) \= 4, c(3,1) \= 4, c(3,5) \= 4, c(4,5) \= 4\.

 E.

Các phương án khác đều sai.

**Câu 92\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {2,4} Ke(2) \= {1,3,4,5} Ke(3) \= {2,5} Ke(4) \= (1,2} Ke(5) \= {2,3}  
Hãy chọn phương án đúng trong các phương án sau:

 A.

G không phải là đồ thị Euler nhưng là nửa Euler.

 B.

G không phải là đồ thị nửa Euler.

 C.

Các phương án khác đều sai.

 D.

G là đồ thị Euler.

 E.

G không phải là đồ thị Euler.

**Câu 93\.**

 Trong các mô tả dưới, đâu là tính chất danh sách cạnh của đồ thị vô hướng?

 A.

Đỉnh cuối nhỏ hơn đỉnh đầu mỗi cạnh

 B.

Đỉnh cuối không nhất thiết phải lớn hơn đỉnh đầu mỗi cạnh

 C.

Đỉnh cuối lớn hơn đỉnh đầu mỗi cạnh

 D.

Các phương án khác đều sai.

 E.

Đỉnh cuối không nhất thiết phải nhỏ hơn đỉnh đầu mỗi cạnh

**Câu 94\.**

Cho đơn đồ thị T \= (V, E) gồm n đỉnh và m cạnh là một cây. Hãy chọn phương án đúng trong các phương án sau:

 A.

T là đồ thị vô hướng không chứa chu trình và tất cả các đinh đều có bán bậc ra là lẻ.

 B.

T là đồ thị vô hướng liên thông yếu và tất cả các đinh đều có bán bậc vào là chẵn.

 C.

T là đồ thị vô hướng liên thông và có m \= n-1 cạnh.

 D.

Các phương án khác đều sai.

 E.

T là đồ thị liên thông và có số cạnh m \= n.

**Câu 95\.**

Đồ thị vô hướng G \= (V, E) gồm 5 đỉnh được biểu diễn dưới dạng danh sách kề như bên dưới. Đâu là thứ tự duyệt các đỉnh của thuật toán BFS?  
Ke(1) \= {2, 4} Ke(3) \= {2, 4}  
Ke(2) \= {1, 3, 5} Ke(4) \= {1, 3}, Ke(5) \= {2}

 A.

Các phương án khác đều sai.

 B.

{1, 2, 4, 3, 5}

 C.

{1, 2, 4, 5, 3}

 D.

{1, 2, 3, 4, 5}

 E.

{1, 2, 5, 4, 3}

**Câu 96\.**

Cho đơn đồ thị có hướng G gồm 4 đỉnh dưới dạng ma trận kề:  
0 1 1 0  
0 0 0 1  
0 0 0 1  
1 0 0 0  
Nếu M là ma trận liên thuộc của G với các cạnh theo thứ tự từ điển thì:

 A.

M gồm 5 hàng và 4 cột với M\[3\]\[4\] \= 1 và M\[4\]\[4\] \= \-1.

 B.

Các phương án khác đều sai.

 C.

M gồm 4 hàng và 5 cột với M\[1\]\[5\] \= \-1 và M\[4\]\[5\] \= 1\.

 D.

M gồm 5 hàng và 4 cột với M\[1\]\[1\] \= 1 và M\[2\]\[1\] \= \-1.

 E.

M gồm 4 hàng và 5 cột với M\[2\]\[2\] \= 1 và M\[2\]\[4\] \= \-1.

**Câu 97\.**

Luồng f trên mạng G với đỉnh phát s, đỉnh thu t là cực đại khi và chỉ khi:

 A.

Không tìm được đường tăng luồng trên đồ thị tăng luồng Gf.

 B.

Với mọi cung (u,v) của G đều có f(u,v) \= c(u,v).

 C.

Tồn tại cung (u,v) của G sao cho f(u,v) \= c(u,v).

 D.

Các phương án khác đều sai.

 E.

Giá trị của luồng f bằng độ dài đường đi có ngắn nhất từ đỉnh s đến đỉnh t.

**Câu 98\.**

8 Cho đơn đồ thị vô hướng T gồm 5 đỉnh và 4 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 2 | 4 |
| 1 | 3 | 2 | 5 |

Chọn phương án đúng trong các phương án dưới đây:

 A.

Các phương án khác đều sai.

 B.

T là cây vì có đỉnh 1 là đỉnh trụ.

 C.

T không phải là cây vì có nhiều hơn 2 đỉnh bậc lẻ.

 D.

T là cây vì T liên thông và có số cạnh bằng số đỉnh bớt đi 1\.

 E.

T không phải là cây vì T có chứa chu trình.

**Câu 99\.**

Cho đơn đồ thị có hướng có trọng số G gồm 6 đỉnh và 10 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 3 | 6 | 4 | 6 | 5 |
| 1 | 6 | 6 | 5 | 1 | 6 |
| 2 | 4 | 4 | 5 | 6 | 2 |
| 2 | 5 | 3 | 6 | 3 | 8 |
| 4 | 1 | 5 | 6 | 4 | 4 |

Chọn phương án đúng trong các phương án dưới đây:

 A.

G là một mạng với đỉnh phát s \= 3 và đỉnh thu t \= 6\.

 B.

G là một mạng với đỉnh phát s \= 1 và đỉnh thu t \= 6\.

 C.

Các phương án khác đều sai.

 D.

G là một mạng với đỉnh phát s \= 2 và đỉnh thu t \= 3\.

 E.

G là một mạng với đỉnh phát s \= 1 và đỉnh thu t \= 3\.

**Câu 100\.**

Luồng f trên mạng G với đỉnh phát s, đỉnh thu t là cực đại khi và chỉ khi:

 A.

Các phương án khác đều sai.

 B.

Giá trị của luồng f bằng độ dài đường đi có ít cạnh nhất từ đỉnh s đến đỉnh t.

 C.

Với mọi cung (u,v) của G đều có f(u,v) \= c(u,v).

 D.

Giá trị của luồng f bằng độ dài đường đi có ít cạnh nhất từ đỉnh s đến đỉnh t.

 E.

Giá trị của luồng f bằng khả năng thông qua của một lát cắt nào đó của G.

**Câu 101\.**

 Đồ thị G= gồm 13 đỉnh được biểu diễn ở hình dưới. Đồ thị có bao nhiêu cạnh cầu?

![Z][image5]

 A.

3

 B.

5

 C.

 Các phương án khác đều sai.

 D.

4

 E.

6

**Câu 102\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:  
0 4 4 \-5  
4 0 4 3  
4 4 0 3  
\-5 3 3 0  
Sử dụng thuật toán Kruskal với hiệu chỉnh phù hợp, tìm cây khung T của G có tổng trọng số WT lớn nhất. Các cạnh của cây khung lớn nhất T theo thứ tự tìm kiếm của thuật toán với WT là:

 A.

T \= {(1,2), (2,3), (3,4)} với WT \= 11\.

 B.

Không sử dụng được thuật toán Kruskal do G chứa trọng số âm.

 C.

T \= {(1,2), (1,3), (2,4)} với WT \= 11\.

 D.

 Các phương án khác đều sai.

 E.

T \= {(1,2), (1,3), (3,4)} với WT \= 12\.

**Câu 103\.**

Sắp xếp theo thứ tự để thu được đoạn giả mã của thuật toán BFS 

| Begin  (Khởi tạo):   Queue \= ∅;   Push(Queue, u);   chuaxet\[u\] \= False;  (Lặp): 1\. EndIf; 2\. EndFor; 3\. EndWhile; | 4\. s \= Pop(Queue); 5\. Push(Queue, t); chuaxet\[t\] \= False; 6\. if (chuaxet\[t\]) then 7\. for each t ∈ Ke(s) do 8\. while (Queue ≠ ∅) do  (Trả kết quả):  Return(\<Tập đỉnh được duyệt\>); End.   |
| :---- | :---- |

 A.

C. 4 \-\> 8 \-\> 7 \-\> 6 \-\> 5 \-\> 1 \-\> 2 \-\> 3

 B.

Các phương án khác đều sai.

 C.

\*A. 8 \-\>4 \-\> 7 \-\> 6 \-\> 5 \-\> 1 \-\> 2 \-\> 3

 D.

B. 8 \-\> 4 \-\> 6 \-\> 7 \-\> 5 \-\> 2 \-\> 1 \-\> 3

 E.

D. 4 \-\> 8 \-\> 6 \-\> 7 \-\> 5 \-\> 2 \-\> 1 \-\> 3

**Câu 104\.**

Cho đơn đồ thị có hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 0 0 0 1  
0 0 1 1 0  
0 0 0 0 1  
1 0 0 0 0  
0 1 0 0 0  
Sử dụng thuật toán tìm đường đi Euler E của G. Các đỉnh xuất hiện trong E theo thứ tự khi thực hiện thuật toán là:

 A.

E \= {2, 3, 5, 2, 4, 1, 5}

 B.

E \= {5, 2, 4, 1, 5, 2, 3}.

 C.

E \= {2, 4, 1, 5, 2, 3, 5}.

 D.

E \= {1, 5, 2, 3, 5, 4, 2}.

 E.

Các phương án khác đều sai.

**Câu 105\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 1 1 0 0  
1 0 1 0 0  
1 1 0 1 1  
0 0 1 0 1  
0 0 1 1 0  
Hãy chọn phương án đúng trong các phương án sau:

 A.

G là đồ thị Euler.

 B.

G không phải là đồ thị Euler.

 C.

G không phải là đồ thị Euler nhưng là nửa Euler.

 D.

G không phải là đồ thị nửa Euler.

 E.

Các phương án khác đều sai.

**Câu 106\.**

Sắp xếp theo thứ tự để thu được đoạn giả mã của thuật toán DFS:

| Begin 1\. EndIf; 2\. EndFor; 3\. DFS(v); 4\. \<Thăm đỉnh u\>; // Duyệt đỉnh u | 5\. chuaxet\[u\]:= FALSE; 6\. if (chuaxet\[v\]) then 7\. for each v ∈ ke(u) do End.   |
| :---- | :---- |

 A.

Các phương án khác đều sai.

 B.

4 \-\> 7 \-\> 3 \-\> 2 \-\> 6 \-\> 5 \-\> 1

 C.

4 \-\> 7 \-\> 5 \-\> 3 \-\> 2 \-\> 6 \-\> 1

 D.

4 \-\> 5 \-\> 7 \-\> 6 \-\> 3 \-\> 1 \-\> 2

 E.

4 \-\> 7 \-\> 6 \-\> 4 \-\> 5 \-\> 1 \-\> 2

**Câu 107\.**

 Đồ thị vô hướng G \= (V, E) biểu diễn dưới dạng ma trận kề dưới đây.  
0 1 1 0 0 1  
1 0 0 1 1 1  
1 0 0 1 1 0  
0 1 1 0 1 1  
0 1 1 1 0 0  
1 1 0 1 0 0  
Mô tả nào dưới đây là đúng?

 A.

deg(3) \< deg(2); deg(4) \= deg(5)

 B.

Các phương án khác đều sai.

 C.

deg(1) \= deg(3); deg(4) \< deg(6)

 D.

deg(1) \< deg(2); deg(4) \= deg(5)

 E.

deg(1) \> deg (2); deg(5) \= deg(6)

**Câu 108\.**

Cho mạng G \= (V,E) và luồng f trên G. Cung nghịch trong đồ thị tăng luồng Gf \= (V,Ef) là cung:

 A.

(u, v) nằm trên đường đi ngắn nhất từ s đến t trong Gf nhưng không thuộc G.

 B.

(u, v) là cung của Gf nhưng không phải là cung của G.

 C.

Các phương án khác đều sai.

 D.

(s, v) là cung của Gf nhưng không thuộc G.

 E.

(u, t) là cung của Gf nhưng không thuộc G.

**Câu 109\.**

Đồ thị G \= (V, E) gồm 13 đỉnh được biểu diễn dưới dạng danh sách kề như dưới. Cạnh nào dưới đây không phải là cạnh cầu?  
Ke(1)={2, 3, 11}, Ke(2)={1, 4, 6} Ke(7)={6}, Ke(8)={10}, Ke(9)={5}  
Ke(3)={1, 4}, Ke(4)={2, 3, 6} Ke(10)={5, 8}, Ke(11)={1, 12, 13}  
Ke(5)={9, 10}, Ke(6)={2, 4, 7} Ke(12)={11}, Ke(13)={11}

 A.

Cạnh (11, 12\)

 B.

 Các phương án khác đều sai.

 C.

Cạnh (6, 7\)

 D.

Cạnh (5, 10\)

 E.

Cạnh (3, 4\)

**Câu 110\.**

**Đoạn giả mã của thuật toán Breadth First Search** **được mô tả dưới đây.**

**Cần sửa lại dòng mã nào để thu được giả mã chính xác?**

| Begin  (Khởi tạo):  1\. Queue \= ∅;  2\. Push(Queue, u);  3\. chuaxet\[u\] \= False;  (Lặp):  4\. while (Queue ≠ ∅) do            5\.    s \= Push(Queue);  6\.   for each t ∈ Ke(s) do |     7\.  if (chuaxet\[t\]) then     8\.   Pop(Queue, t); chuaxet\[t\] \= False;          EndIf;        EndFor;      EndWhile;  (Trả kết quả):      Return(\<Tập đỉnh được duyệt\>); End.   |
| :---- | :---- |

 A.

5, 8

 B.

Các phương án khác đều sai.

 C.

2, 5

 D.

2

 E.

Không cần chỉnh sửa

**Câu 111\.**

Cho đồ thị có hướng như hình dưới. Chọn phương án đúng:

![9k=][image6]

 A.

Cung (5,1) có đỉnh đầu là 1 và đỉnh cuối là 5\.

 B.

Cung (2,3) có đỉnh đầu là 2 và đỉnh cuối là 3\.

 C.

Các phương án khác đều sai.

 D.

Cung (5,1) có đỉnh đầu là 5 và đỉnh cuối là 1\.

 E.

Cung (3,4) có đỉnh đầu là 3 và đỉnh cuối là 4\.

**Câu 112\.**

 Cho đồ thị vô hướng G \= (V, E). Đỉnh nào là đỉnh treo của đồ thị?

![2Q==][image7]

 A.

Đỉnh 2, đỉnh 9

 B.

Đỉnh 7, đỉnh 9, đỉnh 10

 C.

Các phương án khác đều sai.  
 

 D.

Đỉnh 1, đỉnh 3

 E.

Đỉnh 5, đỉnh 7

**Câu 113\.**

Cho mạng G \= (V,E) và luồng f trên G. Xét đường tăng luồng P với giá trị tăng luồng d. Xét các thao tác tăng luồng f thành luồng f’ như sau:  
(1) Nếu (u, v) P là cung thuận thì f’(u, v) \= f(u, v) \- d.  
(2) Nếu (u, v) P là cung thuận thì f’(u, v) \= f(u, v) \+ d.  
(3) Nếu (u, v) P là cung nghịch thì f’(v, u) \= f(v, u) \+ d.  
(4) Nếu (u, v) P là cung nghịch thì f’(v, u) \= f(v, u) – d.  
(5) Nếu (u, v) P thì f’(u, v) \= f(u, v).  
Các thao tác tăng luồng đúng là:

 A.

(1), (4) và (5).

 B.

(2), (4) và (5).

 C.

(2), (3) và (5).

 D.

(1), (3) và (5).

 E.

Các phương án khác đều sai.

**Câu 114\.**

 Cho đơn đồ thị vô hướng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 4 | 2 | 5 |
| 1 | 5 | 3 | 4 |
| 2 | 3 | 3 | 5 |

Hãy chọn phương án đúng trong các phương án sau:

 A.

G liên thông và có hai đỉnh 4 và 5 với bậc lẻ nên là đồ thị nửa Euler.

 B.

G liên thông và có hai đỉnh 3 và 5 với bậc lẻ nên là đồ thị nửa Euler.

 C.

Các phương án khác đều sai.

 D.

G là đồ thị Euler.

 E.

G liên thông và có hai đỉnh 2 và 3 với bậc lẻ nên là đồ thị nửa Euler.

**Câu 115\.**

Đồ thị đầy đủ Kn là loại đơn đồ thị vô hướng có nhiều cạnh nhất. Số cạnh của đồ thị là bao nhiêu?

 A.

2n+1

 B.

n(n+1)/2

 C.

Các phương án khác đều sai.

 D.

2n

 E.

n(n-1)/2

**Câu 116\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:  
0 5 7 2  
5 0 2 1  
7 2 0 3  
2 1 3 0  
Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 1 đến đỉnh t \= 3 của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3 là 143 với độ dài d\[3\] \= 5\.

 B.

Không đủ điều kiện để sử dụng thuật toán Bellman-Ford.

 C.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3 là 1423 với độ dài d\[3\] \= 4\.

 D.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3 là 1423 với độ dài d\[3\] \= 5\.

 E.

Các phương án khác đều sai.

**Câu 117\.** Cho đơn đồ thị vô hướng T=(V,E) gồm n đỉnh và m cạnh là một cây. Hãy chọn phương án đúng trong các phương án sau:

 A. T không chứa chu trình và nếu bổ sung thêm 1 cạnh mới vào T sẽ nhận được đúng 1 chu trình.

 B. Hai đỉnh bất kỳ của T được nối với nhau bởi không quá 1 đường đi đơn.

 C. T là đồ thị không chứa chu trình và tất cả các đỉnh đều có bán bậc vào là chẵn.

 D. Các phương án khác đều sai.

 E. T là đồ thị không chứa chu trình và tất cả các đinh đều có bán bậc ra là lẻ.

**Câu 118\.**

Cho đơn đồ thị có trọng số G \= (V,E) và một đỉnh s thuộc G. Thuật toán Dijkstra được sử dụng tìm đường đi ngắn nhất từ s đến các đỉnh còn lại trong trường hợp:

 A.

Các phương án khác đều sai.

 B.

G là đồ thị bất kỳ.

 C.

G chỉ chứa các trọng số không âm.

 D.

G là đồ thị có hướng.

 E.

G là đồ thị vô hướng.

**Câu 119\.**

 Cho đơn đồ thị có hướng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 4 | 4 | 3 |
| 2 | 1 | 4 | 5 |
| 3 | 5 | 5 | 2 |

Hãy chọn phương án đúng trong các phương án sau:

 A.

Các phương án khác đều sai.

 B.

G không phải là đồ thị Euler.

 C.

G là đồ thị Euler.

 D.

G không phải là đồ thị Euler nhưng là đồ thị nửa Euler.

 E.

G không liên thông yếu nên không phải là đồ thị nửa Euler.

**Câu 120\.**

 Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 0 1 0 1  
0 0 1 1 1  
1 1 0 1 0  
0 1 1 0 0  
1 1 0 0 0  
Hãy chọn phương án đúng trong các phương án sau:

 A.

G liên thông và chỉ có hai đỉnh 3 và 4 với bậc lẻ nên là đồ thị nửa Euler.

 B.

Các phương án khác đều sai.

 C.

G không phải là đồ thị nửa Euler cũng không phải là đồ thị Euler.

 D.

G liên thông và chỉ có hai đỉnh 2 và 3 với bậc lẻ nên là đồ thị nửa Euler.

 E.

G liên thông và chỉ có hai đỉnh 2 và 5 với bậc lẻ nên là đồ thị nửa Euler.

**Câu 121\.**

Cho đồ thị G \= (V, E) gồm n đỉnh. Hãy chọn phương án đúng:

 A.

Đường đi trong G đi qua n đỉnh, mỗi đỉnh đúng 1 lần gọi là đường đi Hamilton.

 B.

Đường đi đơn của G thường gọi là đường đi Hamilton.

 C.

Đường đi trong G đi qua n cạnh của nó gọi là đường đi Hamilton.

 D.

Các phương án khác đều sai.

 E.

Đường đi trong G đi qua mỗi đỉnh của nó không quá 1 lần gọi là đường đi Hamilton.

**Câu 122\.**

Đoạn mã dưới đây mô tả một thuật toán đồ thị, đó là thuật toán nào?

| *BƯỚC KHỞI TẠO: s là đỉnh xuất phát       for v ∈ V do {          d\[v\] \= A\[s,v\]; truoc\[v\]=s; } BƯỚC LẶP:   While(V≠ø){     \<Chọn u là đỉnh có d\[u\] nhỏ nhất\>;    \<Cố định nhãn của đỉnh u\>; V=V\\{u};* |    *for v ∈ V do { if (d\[v\]\>d\[u\] \+ A\[u,v\]){     d\[v\]=d\[u\]+A\[u,v\];     truoc\[v\]=u; }    }      } BƯỚC TRẢ LẠI KẾT QUẢ: Return(d(s,t));* |
| :---- | :---- |

 A.

Thuật toán Bellman-Ford.

 B.

Thuật toán Dijkstra

 C.

Thuật toán Floyd.

 D.

Các phương án khác đều sai.

 E.

Thuật toán Kruskal.

**Câu 123\.**

Cho đơn đồ thị vô hướng T gồm 5 đỉnh dưới dạng danh sách kề:

| Ke(1) \= {4, 5} | Ke(2) \= {3, 4} | Ke(3) \= {2} | Ke(4) \= {1, 2} | Ke(5) \= {1} |
| :---- | :---- | :---- | :---- | :---- |

Chọn phương án đúng trong các phương án dưới đây:

 A.

T là cây vì T liên thông và có đỉnh 1 là đỉnh trụ.

 B.

T là cây vì có cạnh (1, 4\) là cạnh cầu.

 C.

T là cây vì T liên thông và không chứa chu trình.

 D.

T là cây vì có T có đúng 2 đỉnh bậc lẻ.

**Câu 124\.**

Cho đơn đồ thị có hướng G \= (V,E) gồm 5 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {3}, Ke(2) \= {1, 5}  
Ke(4) \= {1}  
Ke(3) \= {2, 4}  
Ke(5) \= {3}

Biểu diễn G dưới dạng danh sách cạnh gồm các cạnh theo thứ tự là:

 A.

(1,3), (1,2), (2,5), (3,2), (3,4), (4,1) và (5,3).

 B.

(1,3), (2,1), (2,3), (2,5), (3,4), (4,1) và (5,3).

 C.

Các phương án khác đều sai.

 D.

(1,3), (2,1), (2,5), (3,2), (3,4), (4,1) và (5,3) (Đ)

 E.

(1,3), (1,4), (2,1), (2,5), (3,2), (3,4) và (5,3).

**Câu 125\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2 | 1 | 7 | 4 | 1 | 4 |
| 2 | 3 | \-3 | 4 | 2 | 2 |
| 3 | 1 | \-2 | 4 | 3 | 1 |

Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 4 đến các đỉnh còn lại của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 3 là 423 với độ dài d\[3\] \= \-1.

 B.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 2 là 42 với độ dài d\[2\] \= 2\.

 C.

Các phương án đưa ra đường đi ngắn nhất và độ dài tương ứng đều đúng.

 D.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 1 là 4231 với độ dài d\[1\] \= \-3.

 E.

Các phương án khác đều sai.

**Câu 126\.**

Cần bổ sung nội dung thực hiện của bước (5) trong mô tả thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh s đến các đỉnh còn lại của đơn đồ thị có trọng số G biểu diễn dưới dạng ma trận trọng số a\[\]\[\] với các trọng số không âm:

| (*1\) Khởi tạo:       (1.1) for vÎ G do {       (1.2)                           d\[v\]= a\[s\]\[v\]; e\[v\]= s; vs\[v\]= 0; } (2) Bắt đầu tìm kiếm từ s: d\[s\]= 0; e\[s\]= 0; vs\[s\]= 1; (3) Tìm đỉnh u sao cho d\[u\]= min{d\[v\] | vs\[v\] \= 0}:       (3.1) Nếu không tìm được u thì chuyển bước (7);       (3.2) Nếu tìm được u thì chuyển bước (4). (4) Cập nhật vs\[u\] \= 1; (5)  for v Î G do (6) Quay lại (3). (7) Đưa ra d\[v\] và đường đi từ s đến v với mọi v Î G, v khác s.* |
| :---- |

 

Chọn phương án đúng trong các phương án dưới đây:

 A.

*if  (vs\[v\] \= 0\) {*

                  *e\[v\]= u; d\[v\]= d\[u\] \+ a\[u\]\[v\]; }*

 B.

Các phương án khác đều sai.

 C.

 *if  (vs\[v\] \= 0\) & (d\[v\] \> d\[u\] \+ a\[u\]\[v\]){*

                  *e\[v\]= u; d\[v\]= d\[u\] \+ a\[u\]\[v\]; }*

 D.

*if   (d\[v\] \> d\[u\] \+ a\[u\]\[v\]){*

                  *e\[v\]= u; d\[v\]= d\[u\] \+ a\[u\]\[v\]; }*

 E.

  *if  (vs\[v\] \= 1\) & (d\[v\] \> d\[u\] \+ a\[u\]\[v\]){*

                  *e\[v\]= u; d\[v\]= d\[u\] \+ a\[u\]\[v\]; }*

**Câu 127\.**

 Đoạn mã trình bày thuật toán Dijkstra dưới đây có một vài dòng chưa chính xác, đó là (các) dòng nào?

| *1\. BƯỚC KHỞI TẠO: s là đỉnh xuất phát 2\. for v ∈ V do { 3\.    truoc\[v\]=s; d\[v\] \= A\[s,v\] 4\. } 5\. BƯỚC LẶP: 6\.  While(V≠ø){ 7\.    \<Chọn u là đỉnh có d\[u\] lớn nhất\>; 8\.   \<Cố định nhãn của u\>; V=V\\{u};* | *9\.  for v ∉ V do { 10\. if (d\[v\]\>d\[u\] \+ A\[u,v\]){ 11\.    d\[u\]=d\[v\]+A\[u,v\]; 12\.   truoc\[v\]=u; 13\. } 14\.    } 15\. } 16\. BƯỚC TRẢ LẠI KẾT QUẢ: 17\.                     Return(d(s,t));* |
| :---- | :---- |

 A.

7, 9\.

 B.

3, 9, 11\.

 C.

3, 7, 9, 11\.

 D.

7, 9, 11\.

 E.

Các phương án khác đều sai.

**Câu 128\.**

 Bảng dưới đây cần loại bỏ những hàng nào để trở thành danh sách cạnh của đồ thị vô hướng?

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 2 | 4 |
| 1 | 3 | 3 | 1 |
| 2 | 1 | 3 | 2 |
| 2 | 3 | 4 | 2 |

 A.

Hàng 3, 6, 7, 8

 B.

Không cần loại bỏ hàng nào trong bảng

 C.

Hàng 3, 6

 D.

Hàng 4, 7, 8

 E.

Các phương án khác đều sai.

**Câu 129\.**

Luồng f trên mạng G với đỉnh phát s, đỉnh thu t là luồng cực đại khi và chỉ khi:

 A.

Giá trị của luồng f là lớn nhất.

 B.

Tìm được cung (u, v) của G sao cho f(u,v) \= c(u,v).

 C.

Giá trị của luồng f bằng độ dài đường đi ngắn nhất từ đỉnh s đến đỉnh t.

 D.

Với mọi cung (u,v) của G đều có f(u,v) \= c(u,v).

 E.

Các phương án khác đều sai.

**Câu 130\.**

 Đồ thị có hướng G gồm 5 đỉnh được biểu diễn dưới dạng dạnh sách cạnh như dưới đây. Bổ sung cạnh nào để G trở thành đồ thị có tính liên thông mạnh?

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 2 | 4 |
| 1 | 4 | 3 | 4 |
| 2 | 3 | 5 | 1 |

 A.

Cạnh (5, 4\)

 B.

Cạnh (1, 3\)

 C.

Không cần bổ sung thêm cạnh, G là đồ thị liên thông mạnh

 D.

Các phương án khác đều sai.

 E.

Cạnh (5, 2\)

**Câu 131\.**

 Cho đơn đồ thị vô hướng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 4 | 2 | 5 |
| 1 | 5 | 3 | 4 |
| 2 | 3 | 3 | 5 |

Sử dụng thuật toán tìm đường đi Euler E của G bắt đầu tại đỉnh bậc lẻ với số thứ tự nhỏ nhất. Các đỉnh xuất hiện trong E theo thứ tự khi thực hiện thuật toán là:

 A.

Các phương án khác đều sai.

 B.

E \= {3, 2, 5, 3, 4, 1, 5}.

 C.

E \= {3, 5, 1, 4, 3, 2, 5}.

 D.

E \= {3, 2, 5, 1, 4, 3, 5}.

 E.

E \= {3, 4, 1, 5, 2, 3, 5}.

**Câu 132\.**

Cho đơn đồ thị có hướng G gồm 5 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {5} Ke(2) \= {5} Ke(3) \= {2, 4} Ke(4) \= (1} Ke(5) \= {3, 4}  
Hãy chọn phương án đúng trong các phương án sau:

 A.

G không phải là đồ thị nửa Euler.

 B.

Các phương án khác đều sai.

 C.

G không phải là đồ thị Euler nhưng là nửa Euler.

 D.

G không liên thông yếu nên không phải là đồ thị Euler.

 E.

G là đồ thị Euler.

**Câu 133\.**

Cho đồ thị có hướng G \= (V, E) gồm n đỉnh và m cạnh. Điều kiện cần và đủ để G là đồ thị nửa Hamilton:

 A.

G liên thông yếu và mọi đỉnh của nó đều có các bán bậc lẻ.

 B.

G liên thông yếu và có m \= n-1 cạnh.

 C.

Các phương án khác đều sai.

 D.

Không có điều kiện cần và đủ để xác định sự tồn tại của đường đi Hamilton. (Đ)

 E.

Tồn tại một thành phần liên thông mạnh của G là đồ thị Hamilton.

**Câu 134\.**

Cho mạng G gồm 6 đỉnh và 8 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 4 | 3 | 4 | 2 |
| 1 | 3 | 3 | 3 | 5 | 3 |
| 2 | 4 | 3 | 4 | 6 | 6 |
| 3 | 2 | 1 | 5 | 6 | 4 |

Chọn phương án đúng trong các phương án dưới đây:

 A.

Luồng f trên G với f(1.2) \= 4, f(1,3) \= 3, f(2,4) \= 3, f(3,2) \= 1, f(3,5) \= 3, f(4,6) \= 6\.

 B.

Luồng f trên G với f(1.2) \= 4, f(1,3) \= 3, f(2,4) \= 3, f(3,2) \= 1, f(3,4) \= 2, f(4,6) \= 6\.

 C.

Luồng f trên G với f(1.2) \= 4, f(1,3) \= 3, f(2,4) \= 3, f(3,2) \= 1, f(3,4) \= 2, f(5,6) \= 4\.

 D.

Luồng f trên G với f(1.2) \= 2, f(1,3) \= 3, f(2,4) \= 3, f(3,2) \= 1, f(3,4) \= 2, f(4,6) \= 5\.

 E.

Các phương án khác đều sai.

**Câu 135\.**

Cho đơn đồ thị có hướng G gồm 4 đỉnh dưới dạng ma trận kề:  
0 1 0 1  
0 0 1 0  
1 0 0 0  
0 1 0 0  
Biểu diễn G dưới dạng danh sách cạnh gồm các cạnh theo thứ tự là:

 A.

(1,2), (1,4), (2,3), (1,3) và (4,2).

 B.

Các phương án khác đều sai.

 C.

(1,2), (1,4), (1,3), (2,3) và (4,2).

 D.

(1,2), (1,4), (2,3), (2,4) và (3,1).

 E.

(1,2), (1,4), (2,3), (3,1) và (4,2).

**Câu 136\.**

 **Đồ thị vô hướng G \= (V, E) gồm 10 đỉnh và 10 cạnh được biểu diễn dưới dạng danh sách cạnh như dưới. Số thành phần liên thông của đồ thị là bao nhiêu?**

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 6 | 7 |
| 1 | 3 | 7 | 8 |
| 2 | 3 | 7 | 9 |
| 2 | 4 | 8 | 10 |
| 3 | 4 | 9 | 10 |

 A.

1

 B.

3

 C.

4

 D.

2

 E.

Các phương án khác đều sai.

**Câu 137\.**

Cho đơn đồ thị có hướng G gồm 5 đỉnh và 7 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 1 | 4 | 5 |
| 2 | 3 | 3 | 2 | 5 | 3 |
| 2 | 4 |  |  |  |  |

Sử dụng thuật toán tìm chu trình Euler E của G bắt đầu tại đỉnh s \= 3\. Các đỉnh xuất hiện trong E theo thứ tự khi thực hiện thuật toán là:

 A.

Các phương án khác đều sai.

 B.

E \= {3, 1, 2, 3, 2, 4, 5\. 3}.

 C.

E \= {3, 1, 2, 4, 5, 3, 2, 3}.

 D.

E \= {3, 2, 3, 1, 2, 4, 5, 3}.

 E.

E \= {3, 2, 4, 5, 3, 1, 2, 3}.

**Câu 138\.**

Cho đồ thị vô hướng G \= (V, E) như hình dưới. Chọn phương án đúng:

![2Q==][image8]

 A.

Các phương án khác đều sai.  
 

 B.

Hai đỉnh 1 và 4 kề nhau.

 C.

Hai đỉnh 2 và 3 kề nhau.

 D.

Hai đỉnh 7 và 8 kề nhau.

 E.

Hai đỉnh 9 và 10 kề nhau.

**Câu 139\.**

 Cho đơn đồ thị có hướng G gồm 6 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {5}, Ke(2) \= {3}, Ke(3) \= {4} Ke(4) \= {6}, Ke(5) \= {2}, Ke(6) \= {1}  
Chọn phương án đúng trong các phương án:

 A.

G không liên thông mạnh vì các đỉnh đều có bậc lẻ.

 B.

G là đồ thị liên thông.

 C.

Các phương án khác đều sai.

 D.

G không liên thông mạnh nhưng liên thông yếu.

 E.

G liên thông mạnh.

**Câu 140\.**

 Cho đơn đồ thị có hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 0 0 0 1  
0 0 1 1 0  
0 0 0 0 1  
1 0 0 0 0  
0 1 0 0 0  
Hãy chọn phương án đúng trong các phương án sau:

 A.

G không phải là đồ thị Euler cũng không phải là đồ thị nửa Euler.

 B.

G là đồ thị Euler.

 C.

G không phải là đồ thị Euler nhưng là nửa Euler.

 D.

G không phải là đồ thị nửa Euler.

 E.

Các phương án khác đều sai.

**Câu 141\.**

 Cho đồ thị vô hướng G \= (V, E) gồm 5 đỉnh dưới dạng danh sách cạnh như bên dưới. Đâu là thứ tự duyệt các đỉnh của thuật toán DFS?  
Đỉnh đầu Đỉnh cuối Đỉnh đầu Đỉnh cuối  
1 3 2 4  
1 4 3 4  
1 5 4 5

 A.

{1, 2, 3, 4, 5}

 B.

{1, 3, 4, 2, 5}

 C.

{1, 3, 4, 5, 2}

 D.

Các phương án khác đều sai.

 E.

{1, 5, 4, 2, 3}

**Câu 142\.**

 **Sắp xếp theo thứ tự để thu được đoạn giả mã mô tả thuật toán duyệt các cạnh cầu của đồ thị:**

| // Duyet\_Cau G=\<V, E\>  ReInit(); //∀u ∈ V:           chuaxet\[u\] \= True;  for each e ∈ E do  1\. E \= E ∪{e};    |            2\. ReInit();  3\. endif;            4\. \<e là cầu\>;  5\. E \= E\\{e};  6\. if(DFS(1) ≠ V) then   endfor |
| :---- | :---- |

 A.

5 \-\> 6 \-\> 4 \-\> 3 \-\> 1 \-\> 2

 B.

2 \-\> 1 \-\> 6 \-\> 5 \-\> 4 \-\> 3

 C.

1 \-\> 6 \-\> 4 \-\> 3 \-\> 5 \-\> 2

 D.

 Các phương án khác đều sai.

 E.

5 \-\> 6 \-\> 2 \-\> 4 \-\> 3 \-\> 1

**Câu 143\.**

Cho đơn đồ thị có trọng số G \= (V,E) gồm n đỉnh. Sau khi thực hiện thuật toán, Floyd, G chứa chu trình âm nếu:

 A.

Có hai đỉnh u và v sao cho độ dài đường đi ngắn nhất từ u đến v có giá trị âm.

 B.

Có hai đỉnh u và v sao cho đường đi ngắn nhất từ u đến v có n-1 cạnh.

 C.

Các phương án khác đều sai.

 D.

Có đỉnh u sao cho độ dài đường đi ngắn nhất từ u đến chính nó có giá trị âm.

 E.

Mọi cặp đỉnh u, v của G đều có độ dài đường đi ngắn nhất từ u đến v với giá trị âm.

**Câu 144\.**

Đồ thị vô hướng G \= (V, E) gồm 5 đỉnh được biểu diễn dưới dạng danh sách kề như bên dưới. Đâu là thứ tự duyệt các đỉnh của thuật toán DFS?  
Ke(1) \= {2, 4} ,Ke(3) \= {2, 4}  
Ke(2) \= {1, 3, 5} Ke(4) \= {1, 3}, Ke(5) \= {2}

 A.

{5, 3, 4, 2, 1}

 B.

Các phương án khác đều sai.

 C.

{1, 2, 4, 3, 5}

 D.

{1, 2, 4, 5, 3}

 E.

{1, 2, 3, 5, 4}

**Câu 145\.**

Các đồ thị dưới đây thuộc cùng một loại đồ thị, đó là loại đồ thị nào?  
![][image9]

 

 A.

Đồ thị hai phía

 B.

Các phương án khác đều sai.

 C.

Đồ thị vòng

 D.

Đồ thị đầy đủ

 E.

Đồ thị bánh xe

**Câu 146\.**

Cho đơn đồ thị có trọng số G \= (V,E) với các trọng số không âm và hai đỉnh s, t thuộc G. Để tìm đường đi ngắn nhất từ s đến t nên sử dụng thuật toán:

 A.

Bellman-Ford do thuật toán này dễ cài đặt hơn.

 B.

Các phương án khác đều sai.

 C.

Bellman-Ford có thể phát hiện G chứa chu trình âm.

 D.

Floyd do thuật toán này tổng quát hơn.

 E.

Dijkstra do thuật toán này có tốc độ tính toán nhanh hơn.

**Câu 147\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {3,4,5} Ke(2) \= {3,5} Ke(3) \= {1,2,4} Ke(4) \= (1,3} Ke(5) \= {1,2}  
Hãy chọn phương án đúng trong các phương án sau:

 A.

G liên thông và có hai đỉnh 3 và 4 với bậc lẻ nên là đồ thị nửa Euler.

 B.

G liên thông và có hai đỉnh 1 và 5 với bậc lẻ nên là đồ thị nửa Euler.

 C.

G không phải là đồ thị nửa Euler.

 D.

G liên thông và có hai đỉnh 1 và 3 với bậc lẻ nên là đồ thị nửa Euler.

 E.

Các phương án khác đều sai.

**Câu 148\.**

 Cho đơn đồ thị có hướng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 4 | 4 | 3 |
| 2 | 1 | 4 | 5 |
| 3 | 5 | 5 | 2 |

Sử dụng thuật toán tìm đường đi Euler E của G. Các đỉnh xuất hiện trong E theo thứ tự khi thực hiện thuật toán là:

 A.

E \= {5, 2, 1, 4, 5, 3, 4}.

 B.

E \= {4, 3, 5, 2, 1, 4, 5}.

 C.

Các phương án khác đều sai.

 D.

E \= {5, 2, 1, 4, 3, 5, 4}.

 E.

E \= {4, 5, 2, 1, 4, 3, 5}.

**Câu 149\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:

| 0 | ¥ | ¥ | \-1 |
| :---: | :---: | :---: | :---: |
| ¥ | **0** | \-2 | ¥ |
| \-2 | ¥ | **0** | ¥ |
| ¥ | 4 | 3 | **0** |

Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 3 đến các đỉnh còn lại của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 3 đến đỉnh 1 là 31 với độ dài d\[1\] \= \-2.

 B.

Các phương án khác đều sai.

 C.

G chứa chu trình âm.

 D.

Đường đi ngắn nhất từ đỉnh 3 đến đỉnh 4 là 314 với độ dài d\[4\] \= \-3.

 E.

Đường đi ngắn nhất từ đỉnh 3 đến đỉnh 2 là 3142 với độ dài d\[4\] \= 1\.

**Câu 150\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {3,4,5} Ke(2) \= {3,5} Ke(3) \= {1,2,4} Ke(4) \= (1,3} Ke(5) \= {1,2}  
Sử dụng thuật toán tìm đường đi Euler E của G bắt đầu tại đỉnh bậc lẻ với số thứ tự nhỏ nhất. Các đỉnh xuất hiện trong E theo thứ tự khi thực hiện thuật toán là:

 A.

Các phương án khác đều sai.

 B.

E \= {1, 4, 3, 1, 5, 2, 3}.

 C.

E \= {1, 3, 2, 5, 1, 4, 3}.

 D.

E \= {1, 5, 2, 3, 1, 4, 3}.

 E.

E \= {1, 3, 4, 1, 5, 2, 3}.

**Câu 151\.**

Trường hợp đồ thị được biểu diễn dưới dạng ma trận kề, độ phức tạp của thuật toán Breadth First Search có giá trị là bao nhiêu?

 A.

O(n2.m)

 B.

O(n2) 

 C.

Các phương án khác đều sai.

 D.

O(n)

 E.

O(n.m)

**Câu 152\.**

Cho đơn đồ thị có trọng số G \= (V,E) và hai đỉnh s, t thuộc G. Đường đi ngắn nhất từ s đến t trên đồ thị G là:

 A.

Trọng số nhỏ nhất trong các trọng số của các cạnh nằm trên đường đi từ s đến t.

 B.

Đường đí với tổng trọng số của các cạnh trên đường đi từ s đến t có giá trị nhỏ nhất.

 C.

Các phương án khác đều sai.

 D.

Đường đi từ s đến t có số lượng cạnh nhỏ nhất.

 E.

Đường đi từ s đến t có số lượng đỉnh nhỏ nhất.

**Câu 153\.**

 Cho đồ thị có hướng như hình dưới. Mô tả nào sau đây là đúng?

![ARiQqBvXV8Q7AAAAABJRU5ErkJggg==][image10]

 A.

deg-(1) \+ deg-(2) \+ deg-(3) \+ deg-(4) \+ deg-(5) \= 7

 B.

deg+(1) \+ deg+(2) \+ deg+(3) \+ deg+(4) \+ deg+(5) \= 6

 C.

Các phương án khác đều sai.  
 

 D.

deg-(1) \+ deg-(2) \+ deg-(3) \+ deg-(4) \+ deg-(5) \= 9

 E.

deg+(1) \+ deg+(2) \+ deg+(3) \+ deg+(4) \+ deg+(5) \= 8

**Câu 154\.**

Cho đơn đồ thị có trọng số G \= (V,E) và hai đỉnh s, t thuộc G. Thuật toán Dijkstra được sử dụng tìm đường đi ngắn nhất từ s đến đến t trong trường hợp:

 A.

G là đồ thị vô hướng.

 B.

G chứa không quá 1 cạnh với trọng số âm.

 C.

G chỉ chứa các trọng số không âm.

 D.

Các phương án khác đều sai.

 E.

G là đồ thị có hướng.

**Câu 155\.**

Đồ thị vô hướng G \= (V, E) gồm 10 đỉnh và 10 cạnh được biểu diễn dưới dạng danh sách cạnh như dưới. Số thành phần liên thông của đồ thị là bao nhiêu?

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 6 | 7 |
| 1 | 3 | 7 | 8 |
| 2 | 4 | 7 | 9 |
| 2 | 5 | 8 | 10 |
| 2 | 6 | 9 | 10 |

 A.

1

 B.

2

 C.

Các phương án khác đều sai.

 D.

3

 E.

4

**Câu 156\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng danh sách kề:

| Ke(1) \= {3,4,5} | Ke(2) \= {3,5} | Ke(3) \= {1,4} | Ke(4) \= {1,3} | Ke(5) \= {1,2} |
| :---- | :---- | :---- | :---- | :---- |

Sử dụng thuật toán DFS tìm cây khung T của G bắt đầu tại đỉnh s \= 5\. Các cạnh của cây khung T theo thứ tự tìm kiếm của DFS là:

 A.

Các phương án khác đều sai.

 B.

T \= {(5,1), (1,3), (3,4),(3,2)}.

 C.

T \= {(5,1), (1,3), (1,4), (5,2)}.

 D.

T \= {(5,1), (5,2), (1,3),(1,4)}.

 E.

T \= {(5,1), (1,3), (3,4), (5,2)}.

**Câu 157\.**

Cho mạng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 3 | 4 | 5 |
| 1 | 3 | 3 | 3 | 5 | 1 |
| 2 | 4 | 6 | 4 | 5 | 1 |

Chọn phương án đúng trong các phương án dưới đây:

 A.

Luồng cực đại f trên G có giá trị luồng val(f) \= 6\.

 B.

Luồng cực đại f trên G có giá trị luồng val(f) \= 2\.

 C.

Luồng cực đại f trên G có giá trị luồng val(f) \= 5\.

 D.

Các phương án khác đều sai.

 E.

Luồng cực đại f trên G có giá trị luồng val(f) \= 3\.

**Câu 158\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:  
0 7 8 1  
7 0 2 3  
8 2 0 6  
1 3 6 0  
Sử dụng thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh s \= 1 đến các đỉnh còn lại của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 2 là 142 với độ dài d\[2\] \= 4\.

 B.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3 là 1423 với độ dài d\[3\] \= 6\.

 C.

Các phương án khác đều sai.

 D.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 4 là 14 với độ dài d\[4\] \= 1\.

 E.

Các phương án đưa ra đường đi ngắn nhất và độ dài tương ứng đều đúng.

**Câu 159\.**

Đồ thị bánh xe dưới đây sau khi loại bỏ một đỉnh và các cạnh nối với đỉnh đó sẽ trở thành đồ thị vòng. Đó là đỉnh nào?

 A.

Các phương án khác đều sai.

 B.

Đỉnh 1

 C.

Đỉnh 3

 D.

Đỉnh 4

 E.

Đỉnh 2

**Câu 160\.**

 Cho đơn đồ thị vô hướng G \= (V, E) gồm 6 đỉnh được biểu diễn dưới dạng ma trận kề như dưới. Số thành phần liên thông của đồ thị là bao nhiêu?  
0 0 0 0 1 0  
0 0 1 0 0 0  
0 1 0 0 0 1  
0 0 0 0 1 1  
1 0 0 1 0 0  
0 0 1 1 0 0

 A.

2

 B.

3

 C.

Các phương án khác đều sai.

 D.

1

 E.

0

**Câu 161\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {2,4} Ke(2) \= {1,3,4,5} Ke(3) \= {2,5} Ke(4) \= (1,2} Ke(5) \= {2,3}  
Sử dụng thuật toán tìm chu trình Euler E của G bắt đầu tại đỉnh s \= 5\. Các đỉnh xuất hiện trong E theo thứ tự khi thực hiện thuật toán là:

 A.

E \= {5, 2, 4, 1, 2, 3, 5}.

 B.

Các phương án khác đều sai.

 C.

E \= {5, 2, 1, 4, 2, 3, 5}.

 D.

E \= {5, 3, 2, 4, 1, 2, 5}.

 E.

E \= {5, 3, 2, 1, 4, 2, 5}.

**Câu 162\.**

 Xét thuật toán được mô tả dưới đây:

|  Hamilton(k){     for vÎ Ke(x\[k-1\]){       if (k= n+1) {            if (v= x\[1\]) GhiNhan(x\[1\], …, x\[n\]);          } else              if  (vs\[v\]= 0\) {                 x\[k\]= v; vs\[v\]= 1;  Hamilton(k+1);                 vs\[v\]= 0; }                }        } |     LietKeHamilton(s){          for (v Î G)                      vs\[v\]= 0;           x\[1\]= s;           vs\[s\]= 1;           Hamilton(2);    }       |
| :---- | :---- |

Hãy chọn phương án đúng trong các phương án sau:

 A.

Thuật toán chỉ có thể tìm được đường đi Hamilton bắt đầu tại đỉnh s của đồ thị vô hướng.

 B.

Thuật toán chỉ có thể tìm được đường đi Hamilton bắt đầu tại đỉnh s của đồ thị có hướng.

 C.

Các phương án khác đều sai.

 D.

Thuật toán có thể tìm được tất cả chu trình Hamilton bắt đầu tại đỉnh s của đồ thị.

 E.

Thuật toán chỉ có thể tìm được một chu trình Hamilton bắt đầu tại đỉnh s.

**Câu 163\.**

Cho mạng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 2 | 4 | 6 |
| 1 | 3 | 6 | 3 | 5 | 5 |
| 1 | 5 | 6 | 4 | 5 | 6 |

Xét luồng f trong mạng G với giá trị khác 0 là f(1,5) \= 6\. Đồ thị tăng luồng Gf bao gồm các cạnh cùng trọng số tương ứng là:

 A.

Các phương án khác đều sai.

 B.

c(1,2) \= 3, c(1,3) \= 5, c(1,5) \= 6, c(2,4) \= 6, c(3,5) \= 5, c(5,4) \= 6\.

 C.

c(1,2) \= 3, c(1,3) \= 5, c(2,4) \= 6, c(3,5) \= 5, c(4,5) \= 6, c(5,1) \= 6\.

 D.

c(1,2) \= 3, c(1,3) \= 6, c(1,5) \= 6, c(3,5) \= 5, c(4,2) \= 6, c(4,5) \= 6..

 E.

c(1,2) \= 3, c(1,5) \= 6, c(2,4) \= 6, c(3,1) \= 6, c(3,5) \= 5, c(4,5) \= 6..

**Câu 164\.**

 Cho đồ thị có hướng G \= (V, E) gồm 5 đỉnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 1 |
| 1 | 3 | 3 | 2 |
| 2 | 1 | 4 | 5 |
| 2 | 3 | 5 | 4 |

Đồ thị có thể chia làm mấy thành phần liên thông mạnh?

 A.

1\.

 B.

Các phương án khác đều sai.

 C.

3\.

 D.

2\.

 E.

4\.

**Câu 165\.**

Cho đơn đồ thị T \= (V, E) gồm n đỉnh và m cạnh là một cây. Hãy chọn phương án đúng trong các phương án sau:

 A.

T là đồ thị vô hướng không chứa chu trình và tất cả các đinh đều có bậc chẵn.

 B.

T là đồ thị vô hướng liên thông và mỗi cạnh của T đều là cạnh cầu.

 C.

T là đồ thị vô hướng liên thông và mỗi đỉnh của T đều là đỉnh trụ.

 D.

Các phương án khác đều sai.

 E.

T là đồ thị vô hướng liên thông và tất cả các đinh đều có bậc lẻ.

**Câu 166\.**

 Đoạn giả mã dưới đây mô tả thuật toán duyệt các đỉnh trụ của đồ thị.  
Cần sửa lại dòng mã nào để thu được giả mã chính xác?

// Duyet\_Tru G=\<V, E\>

 ReInit(); //∀u ∈ V: chuaxet\[u\] \= True;

 for each v ∈ V do

 1\. endif;

 2\. \<v là trụ\>;

 3\. if(DFS(u) ≠ V\\{v}) then // Duyệt đỉnh u ≠ v

 4\. ReInit();

 5\. chuaxet\[v\] \= False;

 endfor;

 A.

 Các phương án khác đều sai.

 B.

3 \-\> 2 \-\> 4 \-\> 1 \-\> 5

 C.

3 \-\> 4 \-\> 1 \-\> 2 \-\> 5

 D.

3 \-\> 2 \-\> 5 \-\> 4 \-\> 1

 E.

5 \-\> 3 \-\> 2 \-\> 4 \-\> 1

**Câu 167\.**

 Đồ thị vô hướng G \= (V, E) biểu diễn dưới dạng ma trận trọng số dưới đây.  
Đồ thị có bao nhiêu cạnh?  
∞ 3 4 5 6  
3 ∞ 1 1 2  
4 1 ∞ 2 1  
5 1 2 ∞ 2  
6 2 1 2 ∞

 A.

9

 B.

Các phương án khác đều sai.

 C.

18

 D.

20

 E.

8

**Câu 168\.**

 Đồ thị vô hướng G \= (V, E) được biểu diễn dưới dạng ma trận trọng số dưới đây. Đỉnh nào không phải là đỉnh treo của đồ thị?  
∞ 3 4 5 6  
3 ∞ ∞ ∞ ∞  
4 ∞ ∞ ∞ ∞  
5 ∞ ∞ ∞ ∞  
6 ∞ ∞ ∞ ∞

 A.

1

 B.

3

 C.

4

 D.

5

 E.

Các phương án khác đều sai.

**Câu 169\.**

Cho đơn đồ thị có trọng số G \= (V,E) gồm n đỉnh và hai đỉnh s, t thuộc G. Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ s đến t trong trường hợp:

 A.

G có không quá n cạnh với trọng số âm.

 B.

Các phương án khác đều sai.

 C.

G là đồ thị có hướng.

 D.

G có hướng không chứa chu trình âm.

 E.

G là đồ thị vô hướng.

**Câu 170\.**

Cho đơn đồ thị có hướng có trọng số G \= (V,E) với các trọng số không âm. G là mạng nếu:

 A.

G liên thông yếu.

 B.

Các phương án khác đều sai.

 C.

G liên thông mạnh.

 D.

G có duy nhất một đỉnh u và duy nhất một đỉnh v sao cho deg-(u) \= deg+(v) \= 0\.

 E.

G có tất cả các đỉnh v thỏa mãn deg-(v) \= deg+(v).

**Câu 171\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 0 1 0 1  
0 0 1 1 1  
1 1 0 1 0  
0 1 1 0 0  
1 1 0 0 0  
Sử dụng thuật toán tìm đường đi Euler E của G bắt đầu tại đỉnh bậc lẻ với số thứ tự nhỏ nhất. Các đỉnh xuất hiện trong E theo thứ tự khi thực hiện thuật toán là:

 A.

E \= {2, 3, 1, 5, 2, 4, 3}

 B.

E \= {2, 4, 3, 2, 5, 1, 3}.

 C.

E \= {2, 3, 4, 2, 5, 1, 3}.

 D.

E \= {2, 5, 1, 3, 2, 4, 3}.

 E.

Các phương án khác đều sai.

**Câu 172\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:

![wD41TMgHvhA1jK6jhtFl1C+6bp8aZnYdAAAAwDOEfAAAAMAzhHwAAADAM4R8AAAAwDOEfAAAAMAzhHwAAADAM4R8AAAAwDOEfAAAAMAzhHwAAADAM4R8AAAAwDOEfAAAAMAzgXPONQ+2RRAEzUMAAADAydg1qrc65AMAAAD4PIbrAAAAAJ4h5AMAAACeIeQDAAAAniHkAwAAAJ4h5AMAAACeIeQDAAAAniHkAwAAAJ4h5AMAAACeIeQDAAAAniHkAwAAAJ4h5AMAAACeIeQDAAAAniHkAwAAAJ4h5AMAAACeIeQDAAAAniHkAwAAAJ75P5pkwzhWVGlNAAAAAElFTkSuQmCC][image11]

Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 2 đến đỉnh t \= 4 của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 4 là 2314 với độ dài d\[4\] \= 5\.

 B.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 4 là 24 với độ dài d\[4\] \= \-1.

 C.

G không thỏa mãn điều kiện để sử dụng thuật toán Bellman-Ford.

 D.

Không có đường đi từ đỉnh 2 đến đỉnh 4\.

 E.

Các phương án khác đều sai.

**Câu 173\.**

Trong các mô tả dưới đây, mô tả nào là sai?  
Bài toán tìm đường đi ngắn nhất từ đỉnh xuất phát (đỉnh s) đến đỉnh cuối (đỉnh t) trên đồ thị:  
1\. Với s cố định và t thay đổi, đối với đồ thị có trọng số không âm, bài toán luôn có lời giải bằng thuật toán Dijkstra.  
2\. Với s cố định và t thay đổi, đối với đồ thị có chu trình âm, bài toán luôn có lời giải.  
3\. Với s cố định và t thay đổi, bài toán được phát biểu dưới dạng tìm đường đi ngắn nhất giữa tất cả các cặp đỉnh của đồ thị.  
4\. Với s thay đổi và t thay đổi, đối với đồ thị có trọng số không âm, bài toán được giải quyết bằng cách thực hiện lặp lại n lần thuật toán Dijkstra.  
5\. Với s thay đổi và t thay đổi, đối với đồ thị trọng số âm nhưng không có chu trình âm, bài toán được giải quyết bằng thuật toán Dijkstra.

 A.

1, 2, 4

 B.

Các phương án khác đều sai.

 C.

1, 3, 4, 5

 D.

2, 3, 4

 E.

2, 3, 5

**Câu 174\.**

 Cho đồ thị vô hướng G \= (V, E) gồm 6 đỉnh dưới dạng danh sách cạnh:  
Đỉnh đầu Đỉnh cuối Đỉnh đầu Đỉnh cuối  
1 2 2 4  
1 3 3 6  
1 6 4 5  
2 3 5 6  
Nếu biểu diễn G dưới dạng ma trận liên thuộc M với các cạnh như trên thì:

 A.

M gồm 8 hàng và 8 cột và có M\[1\]\[2\] \= 1, M\[3\]\[2\] \= 1\.

 B.

Các phương án khác đều sai.

 C.

M gồm 6 hàng và 8 cột và có M\[5\]\[8\] \= 1, M\[6\]\[8\] \= \-1.

 D.

M gồm 6 hàng và 8 cột và có M\[1\]\[1\] \= 1, M\[2\]\[1\] \= \-1.

 E.

M gồm 6 hàng và 8 cột và có M\[4\]\[7\] \= 1, M\[5\]\[7\] \= 1\.

**Câu 175\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 5 | 2 | 3 | 4 |
| 1 | 3 | \-6 | 2 | 4 | 4 |
| 1 | 4 | 5 | 3 | 4 | 4 |

Sử dụng thuật toán Kruskal tìm cây khung nhỏ nhất T của G. Các cạnh của cây khung nhỏ nhất T theo thứ tự tìm kiếm của thuật toán và WT là:

 A.

T \= {(1,3), (2,3), (3,4)} và WT \= 2\.

 B.

T \= {(1,3), (2,3), (2,4)} và WT \= 2\.

 C.

Không sử dụng được thuật toán Kruskal do G chứa trọng số âm.

 D.

T \= {(1,3), (2,3), (2,4)} và WT \= 1\.

**Câu 176\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 2 | 3 | 4 |
| 1 | 3 | 3 | 2 | 4 | 3 |
| 1 | 4 | 6 | 3 | 4 | 1 |

Sử dụng thuật toán Kruskal với hiệu chỉnh phù hợp, tìm cây khung T của G có tổng trọng số WT lớn nhất. Các cạnh của cây khung lớn nhất T theo thứ tự tìm kiếm của thuật toán với WT là:

 A.

Kruskal là T \= {(1,4), (2,3), (1,3)} với WT \= 13\.

 B.

T \= {(1,4), (2,3), (2,4)} với WT \= 13\.

 C.

T \= {(1,4), (2,3), (1,2)} với WT \= 14\.

 D.

T \= {(1,4), (2,3), (1,2)} với WT \= 13\.

 E.

 Các phương án khác đều sai.

**Câu 177\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 7 | 4 | 1 | 4 |
| 3 | 1 | \-5 | 4 | 2 | 8 |
| 3 | 2 | 2 | 4 | 3 | 1 |

Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 4 đến đỉnh t \= 2 của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 2 là 4312 với độ dài d\[3\] \= 2\.

 B.

Không tìm được đường đi ngắn nhất từ đỉnh 4 dến đỉnh 2\. (Đ)

 C.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 2 là 432 với độ dài d\[3\] \= 3\.

 D.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 2 là 4312 với độ dài d\[3\] \= 3\.

 E.

Các phương án khác đều sai.

**Câu 178\.**

Xét một cách mô tả thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh s đến các đỉnh còn lại của đơn đồ thị có trọng số G biểu diễn dưới dạng ma trận trọng số a\[\]\[\]:

| *(1) Khởi tạo:       (1.1) for vÎG do {       (1.2)                           d\[v\]= a\[s\]\[v\]; e\[v\]= s; vs\[v\]= 0; } (2) Bắt đầu tìm kiếm từ s: d\[s\]= 0; e\[s\]= 0; vs\[s\]= 1; (3) Tìm đỉnh u sao cho d\[u\]= min{d\[v\] | vs\[v\] \= 0}:       (3.1) Nếu không tìm được u thì chuyển bước (7);       (3.2) Nếu tìm được u thì chuyển bước (4). (4) Cập nhật vs\[u\] \= 1; (5)  for v Î G do          (5.1)  if  (d\[v\] \> d\[u\] \+ a\[u\]\[v\]) {          (5.2)          e\[v\]= u; d\[v\]= d\[u\] \+ a\[u\]\[v\]; } (6) Quay lại (3). (7) Đưa ra d\[v\] và đường đi từ s đến v với mọi v Î G, v khác s.* |
| :---- |

Chọn phương án đúng trong các phương án dưới đây:

 A.

Bước (6) bị sai.

 B.

Bước (5.1) bị sai.

 C.

Bước (3.1) bị sai.

 D.

Các phương án khác đều sai.

 E.

Bước (1.2) bị sai.

**Câu 179\.**

14 Thuật toán nào là thuật toán được áp dụng để giải quyết bài toán tìm đường đi ngắn nhất trên đồ thị?

 A.

Prim, Euler, Hamilton.

 B.

Floyd, Bellman-Ford .

 C.

Kruskal, Bellman-Ford, Dijkstra.

 D.

Dijkstra, Bellman-Ford, DFS.

**Câu 180\.**

Cho đơn đồ thị vô hướng G gồm 4 đỉnh dưới dạng ma trận kề:  
0 1 0 0  
1 0 1 1  
0 1 0 1  
0 1 1 0  
Biểu diễn G dưới dạng danh sách cạnh gồm các cạnh theo thứ tự là:

 A.

(1,2), (2,3), (3,4) và (2,4).

 B.

(1,2), (2,3), (2,4) và (3,4).

 C.

Các phương án khác đều sai.

 D.

(1,2), (1,3), (2,4) và (3,4).

 E.

(1,2), (2,3), (4,2) và (4,3).

**Câu 181\.**

 Đồ thị dưới đây thuộc loại đồ thị nào?

![Z][image12]

 A.

Đồ thị bánh xe, đồ thị hai phía

 B.

Đồ thị đầy đủ, đồ thị vòng

 C.

Đồ thị vòng, đồ thị bánh xe

 D.

Các phương án khác đều sai.

 E.

Đồ thị hai phía, đồ thị đầy đủ

**Câu 182\.**

 Đồ thị vô hướng G \= (V, E) gồm 6 đỉnh được biểu diễn dưới dạng danh sách cạnh như dưới đây. Tổng bậc các đỉnh của đồ thị là bao nhiêu?

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 2 | 6 |
| 1 | 5 | 4 | 6 |
| 2 | 3 | 5 | 6 |
| 2 | 4 |  |  |

 A.

8

 B.

14

 C.

15

 D.

Các phương án khác đều sai.

 E.

7

**Câu 183\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {3} Ke(2) \= {4, 5} Ke(3) \= {2, 4} Ke(4) \= (2, 5} Ke(5) \= {1, 3}  
Sử dụng thuật toán tìm chu trình Euler E của G bắt đầu tại đỉnh s \= 5\. Các đỉnh xuất hiện trong E theo thứ tự khi thực hiện thuật toán là:

 A.

Các phương án khác đều sai.

 B.

E \= {5, 1, 3, 2, 4, 2, 5, 3, 4, 5}.

 C.

E \= {5, 3, 4, 2, 4, 5, 1, 3, 2, 5}.

 D.

E \= {5, 3, 2, 4, 2, 5, 1, 3, 4, 5}.

 E.

E \= {5, 1, 3, 4, 2, 5, 3, 2, 4, 5}.

**Câu 184\.**

Cho đồ thị vô hướng G \= (V, E) gồm n đỉnh và m cạnh. Điều kiện cần và đủ để G là đồ thị Euler:

 A.

G không chứa đỉnh bậc lẻ.

 B.

G liên thông và mọi đỉnh của nó đều có bậc chẵn.

 C.

G liên thông và có m \= n cạnh.

 D.

Mọi thành phần liên thông của G là đồ thị Euler.

 E.

Các phương án khác đều sai.

**Câu 185\.**

 Cho đơn đồ thị vô hướng G \= (V, E) gồm 6 đỉnh được biểu diễn dưới dạng ma trận kề như dưới. Số thành phần liên thông của đồ thị là bao nhiêu?  
0 0 0 0 1 0  
0 0 1 0 0 0  
0 1 0 0 0 1  
0 0 0 0 0 1  
1 0 0 0 0 0  
0 0 1 1 0 0

 A.

2

 B.

Các phương án khác đều sai.

 C.

0

 D.

3

 E.

1

**Câu 186\.**

Cho đơn đồ thị vô hướng G gồm 4 đỉnh dưới dạng ma trận trọng số:  
0 5 3 3  
5 0 \-3 6  
3 \-3 0 2  
3 6 2 0  
Sử dụng thuật toán Prim tìm cây khung nhỏ nhất T của G bắt đầu tại đỉnh s \= 2\. Các cạnh của cây khung nhỏ nhất theo thứ tự tìm kiếm của thuật toán với WT là:

 A.

T \= {(2,3), (3,4), (3,1)} với WT \= 2\.

 B.

Các phương án khác đều sai.

 C.

T \= {(2,3), (3,4), (4,1)} với WT \= 2\.

 D.

Không sử dụng được thuật toán Prim do G chứa trọng số âm.

 E.

T \= {(2,3), (3,4), (3,1)} với WT \= 1\.

**Câu 187\.**

 Cho đơn đồ thị vô hướng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 3 | 2 | 4 |
| 1 | 5 | 2 | 5 |
| 2 | 3 | 4 | 5 |

Sử dụng thuật toán liệt kê tất cả các chu trình Hamilton H của G bắt đàu tại đỉnh s \= 3\. Các đỉnh xuất hiện theo thứ tự khi thực hiện thuật toán trong H đầu tiên được liệt kê là:

 A.

H \= {3, 1, 4, 5, 2}.

 B.

Các phương án khác đều sai.

 C.

H \= {3, 2, 5, 4, 1}.

 D.

H \= {3, 2, 4, 5, 1}.

 E.

H \= {3, 1, 5, 4, 2}.

**Câu 188\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:

| 0 | ¥ | 5 | 2 |
| :---: | :---: | :---: | :---: |
| 1 | **0** | ¥ | 9 |
| 3 | 4 | **0** | ¥ |
| ¥ | ¥ | 1 | **0** |

Sử dụng thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh s \= 2 đến đỉnh t \= 3 của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Các phương án khác đều sai.

 B.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 3 là 23 với độ dài d\[3\] \= 4\.

 C.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 3 là 2143 với độ dài d\[3\] \= 4\.

 D.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 3 là 213 với độ dài d\[3\] \= 4\.

 E.

Không có đường đi từ đỉnh 2 đến đỉnh 3\.

**Câu 189\.**

Cho mạng G gồm 6 đỉnh và 8 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 5 | 3 | 4 | 5 |
| 1 | 3 | 6 | 3 | 5 | 1 |
| 2 | 4 | 6 | 4 | 6 | 6 |
| 2 | 5 | 3 | 5 | 6 | 6 |

Chọn phương án đúng trong các phương án dưới đây:

 A.

Lát cắt (X,X\*) với X \= {1,2,3,4} có khả năng thông qua là c(X,X\*) \= 16\.

 B.

Các phương án khác đều sai.

 C.

Lát cắt (X,X\*) với X \= {1,2} có khả năng thông qua là c(X,X\*) \= 16\.

 D.

Lát cắt (X,X\*) với X \= {1,2,3,4,5}có khả năng thông qua là c(X,X\*) \= 15\.

 E.

Lát cắt (X,X\*) với X \= {1,2,3} khả năng thông qua là c(X,X\*) \= 15\.

**Câu 190\.**

 Đoạn giả mã của thuật toán Depth First Search được mô tả dưới đây.  
Begin  
1\.    \<Thăm đỉnh u\>;  
2\.    chuaxet\[u\]: \= TRUE;  
3\.    for each v ∈ ke(u) do  
4\.   	 if (chuaxet\[v\]) then      
5\.   		 DFS(u);  
6\.   	 End If;  
7\.    End For;  
End.  
7\. End For;  
End.  
Cần sửa lại dòng mã nào để thu được giả mã chính xác?

 A.

2, 5

 B.

Các phương án khác đều sai.

 C.

Không cần chỉnh sửa

 D.

3, 4

 E.

2

**Câu 191\.**

 Cho đơn đồ thị có hướng G gồm 6 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {2, 3}, Ke(2) \= {3, 4} Ke(5) \= {2, 6}  
Ke(3) \= {4, 5}, Ke(4) \= {4, 6} Ke(6) \= {1, 2}  
Đồ thị có thể chia làm mấy thành phần liên thông mạnh?

 A.

4\.

 B.

1\.

 C.

2\.

 D.

3\.

 E.

Các phương án khác đều sai.

**Câu 192\.**

Cần bổ sung nội dung thực hiện của bước (3.4) trong mô tả thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s đến các đỉnh còn lại của đơn đồ thị có trọng số G gồm n đỉnh biểu diễn dưới dạng ma trận trọng số a\[\]\[\]:

| *(1) Khởi tạo:       (1.1) for vÎ G do {       (1.2)                           d\[v\]= a\[s\]\[v\]; e\[v\]= s; } (2) Bắt đầu tìm kiếm từ s:       (2.1) d\[s\] \= 0; e\[s\] \= 0;         (2.2) ok \= 0; (3) Thực hiện n-1 lần lặp:       (3.1)  ok= 1;            (3.2) for v Î G do       (3.3)        for u Î G do       (3.4)                      (3.5) Nếu (ok \= 1\) thì chuyển bước (4); (4) Nếu (ok \= 1\) thì đưa ra d\[v\] và đường đi từ s đến v với mọi v Î G, v khác s; (5) Nếu (ok \= 0\) thì đưa ra thông báo G chứa chu trình âm;* |
| :---- |

**Chọn phương án đúng trong các phương án dưới đây**:

 A.

 *if  (d\[u\] \> d\[v\] \+ a\[v\]\[u\]) {*

                                    *e\[u\] \= v; d\[u\] \= d\[v\] \+ a\[v\]\[u\]; ok \= 0; }*

 B.

 *if  (d\[v\] \> d\[u\] \+ a\[u\]\[v\]) {*

                                    *e\[v\] \= u; d\[v\] \= d\[u\] \+ a\[u\]\[v\]; ok \= 0; }*

 C.

. *if (vs\[u\] \= 0\) & (d\[u\] \> d\[v\] \+ a\[v\]\[u\]) {*

                                    *e\[u\] \= v; d\[u\] \= d\[v\] \+ a\[v\]\[u\]; ok \= 0; }*

 D.

 *if  (vs\[v\] \= 0\) & (d\[v\] \> d\[u\] \+ a\[u\]\[v\]) {*

                                    *e\[v\] \= u; d\[v\] \= d\[u\] \+ a\[u\]\[v\]; ok \= 0; }*

 E.

Các phương án khác đều sai.

**Câu 193\.**

Cho đơn đồ thị có hướng G \= (V,E) gồm 5 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {3}, Ke(2) \= {1, 5} , Ke(4) \= {1}  
Ke(3) \= {2, 4}n , Ke(5) \= {3}  
Biểu diễn G dưới dạng ma trận liên thuộc M với các cạnh theo thứ tự từ điển có:

 A.

Các phương án khác đều sai.

 B.

M gồm 5 hàng và 7 cột và có M\[3\]\[7\] \= 1, M\[5\]\[7\] \= \-1.

 C.

M gồm 7 hàng và 7 cột và có M\[1\]\[2\] \= \-1, M\[2\]\[2\] \= 1\.

 D.

M gồm 5 hàng và 7 cột và có M\[1\]\[1\] \= 1, M\[1\]\[1\] \= 1\.

 E.

M gồm 5 hàng và 7 cột và có M\[1\]\[6\] \= \-1, M\[4\]\[6\] \= 1\.

**Câu 194\.**

 Mô tả dưới đây là định nghĩa của loại đồ thị nào?  
"... G \= (V,E) bao gồm V là tập đỉnh, E là cặp có thứ tự gồm hai phần tử của V được gọi là các cung. Hai cung e1, e2 tương ứng với cùng một cặp đỉnh được gọi là cung lặp"

 A.

Đa đồ thị vô hướng

 B.

Giả đồ thị vô hướng

 C.

Các phương án khác đều sai.  
 

 D.

Đơn đồ thị có hướng

 E.

Đơn đồ thị vô hướng

**Câu 195\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 4 | 2 | 3 | 3 |
| 1 | 3 | 8 | 2 | 4 | 2 |
| 1 | 4 | 1 | 3 | 4 | 5 |

Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 1 đến đỉnh t \= 3 của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3 là 143 với độ dài d\[3\] \= 6\.

 B.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3 là 1423 với độ dài d\[3\] \= 5\.

 C.

Các phương án khác đều sai.

 D.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3 là 1423 với độ dài d\[3\] \= 6\.

 E.

Không tìm được đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3\.

**Câu 196\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 4 | 1 | 8 |
| 3 | 1 | \-5 | 4 | 2 | \-7 |
| 3 | 2 | 4 | 4 | 3 | 4 |

Kí hiệu d\[i\]\[j\] là độ dài đường đi ngắn nhất từ i đến j và e\[i\]\[j\] là đỉnh trước j trên đường đi ngắn nhất từ i đến j. Sử dụng thuật toán Floyd tìm đường đi ngắn nhất giữa các cặp đỉnh của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Không đủ điều kiện sử dụng thuật toán Floyd.

 B.

Có các giá trị khởi tạo: e\[1\]\[4\] \= 4, e\[3\]\[2\] \= 3, e\[4\]\[2\] \= 4, e\[4\]\[1\] \= 1..

 C.

Các phương án khác đều sai.

 D.

Có các giá trị khởi tạo: d\[1\]\[4\] \= ∞ (vô cùng), e\[3\]\[2\] \= 3, d\[4\]\[2\] \= \-7, e\[4\]\[1\] \= 1\.

 E.

Có các giá trị khởi tạo: d\[1\]\[4\] \= ∞ (vô cùng) , d\[3\]\[2\] \= 4, d\[4\]\[2\] \= \-7, d\[4\]\[1\] \= 8\.

**Câu 197\.**

 Đồ thị có hướng G \= (V, E) được biểu diễn dưới dạng ma trận kề như hình dưới. Đồ thị có thể chia làm mấy thành phần liên thông mạnh?  
0    1    1    0    0  
0    0    0    1    0  
0    0    0    1    0  
0    0    0    0    1  
0    1    0    0    0

 A.

Các phương án khác đều sai.

 B.

3

 C.

1

 D.

0

 E.

2

**Câu 198\.**

 Đồ thị vòng 5 đỉnh cần bổ sung thêm bao nhiêu cạnh để trở thành đồ thị đầy đủ?

 A.

Các phương án khác đều sai.

 B.

4

 C.

6

 D.

5

 E.

8

**Câu 199\.**

 Cho đồ thị có hướng G \= (V, E) gồm 6 đỉnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 3 | 3 | 2 |
| 1 | 5 | 4 | 5 |
| 2 | 4 | 5 | 3 |
| 2 | 6 | 5 | 6 |

Chọn phương án đúng trong các phương án:

 A.

G không liên thông.

 B.

G không liên thông mạnh và không liên thông yếu.

 C.

Các phương án khác đều sai.

 D.

G là đồ thị liên thông mạnh.

 E.

G không liên thông mạnh nhưng liên thông yếu.

**Câu 200\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:  
0 3 1 5  
3 0 3 3  
1 3 0 2  
5 3 2 0  
Sử dụng thuật toán Prim tìm cây khung nhỏ nhất T của G bắt đầu tại đỉnh s \= 1\. Các cạnh của cây khung nhỏ nhất theo thứ tự tìm kiếm của thuật toán với WT là:

 A.

T \= {(1,3), (3,4), (3,2)} với WT \= 5\.

 B.

T \= {(1,3), (3,4), (1,2)} với WT \= 6\.

 C.

T \= {(1,3), (3,4), (1,2)} với WT \= 5\.

 D.

T \= {(1,3), (3,4), (4,2)} với WT \= 6\.

 E.

Các phương án khác đều sai.

**Câu 201\.**

 Trường hợp đồ thị được biểu diễn dưới dạng danh sách kề có n đỉnh m cạnh, độ phức tạp của thuật toán Breadth First Search có giá trị là bao nhiêu?

 A.

Các phương án khác đều sai.

 B.

O(n2.m)

 C.

O(n.m)

 D.

O(n)

 E.

O(n2)

**Câu 202\.**

 Đơn đồ thị vô hướng G \= (V,E) gồm 5 đỉnh biểu diễn dưới dạng danh sách kề.  
Ke(1) \= {2, 3}, Ke(2) \= {1, 3, 4, 5} , Ke(4) \= {2, 3, 5}  
Ke(3) \= {1, 2, 4} Ke(5) \= {2, 4}  
Nếu biểu diễn G dưới dạng ma trận kề A thì:

 A.

Ma trận A gồm 5 hàng, 5 cột và có hàng 5 là (0, 1, 1, 0, 0).

 B.

Các phương án khác đều sai.

 C.

Ma trận A gồm 5 hàng, 5 cột và có cột 2 là (1, 0, 0, 1, 1).

 D.

Ma trận A gồm 5 hàng, 5 cột và có hàng 2 là (1, 0, 1, 1, 1).

 E.

Ma trận A gồm 5 hàng, 5 cột và có cột 4 là (1, 0, 0, 0, 1).

**Câu 203\.**

 Đồ thị G \= (V, E) được biểu diễn dưới dạng ma trận kề dưới đây.  
0 1 1 0 0 1  
1 0 0 1 1 1  
0 0 0 1 1 0  
1 1 0 0 1 1  
1 0 1 0 0 0  
0 0 0 1 1 0  
Tổng tất cả bán bậc vào của đồ thị bằng bao nhiêu?

 A.

16

 B.

34

 C.

Các phương án khác đều sai.

 D.

17

 E.

32

**Câu 204\.**

Cho đơn đồ thị vô hướng T \= (V, E) gồm n đỉnh và m cạnh là một cây. Hãy chọn phương án đúng trong các phương án sau:

 A.

Hai đỉnh bất kỳ của T được nối với nhau bởi đúng 1 đường đi đơn.

 B.

D. T là đồ thị không chứa chu trình và tất cả các đinh đều có bậc lẻ.

 C.

E. Các phương án khác đều sai.

 D.

T là đồ thị liên thông và mỗi đỉnh của T đều là đỉnh trụ.

 E.

C.Hai đỉnh bất kỳ của T được nối với nhau bởi không quá 1 đường đi đơn.

**Câu 205\.**

Cho đơn đồ thị có trọng số G \= (V,E) và hai đỉnh s, t thuộc G. Độ dài đường đi từ s đến t trên đồ thị G là:

 A.

Trọng số lớn nhất trong các trọng số của các cạnh nằm trên đường đi từ s đến t.

 B.

Các phương án khác đều sai.

 C.

Tổng các trọng số của các cạnh nằm trên đường đi từ s đến t.

 D.

Số lượng các đỉnh nằm trên đường đi từ s đến t.

 E.

Số lượng các cạnh nằm trên đường đi từ s đến t.

**Câu 206\.**

Cho đơn đồ thị vô hướng có trọng số G \= (V, E) gồm n đỉnh và m cạnh. Xét mô tả thuật toán Prim tìm cây khung nhỏ nhất T bắt đầu tại đỉnh s và WT của G như sau:

| (1) T= Æ; VT \= {s}; WT= 0; (2) while (V\\VT ≠ Æ) {         (2.1)         (2.2) if  (Tìm được e) {                    T \= T È {e};  WT= WT \+ \<trọng số của e\>; VT \= VT È {v};                           }          (2.3)    else  Return (\<G không có cây khung\>);            }  (3) Return (T và WT);   |
| :---- |

Thao tác cần thực hiện trong bước (2.1) là:

 A.

Đánh dấu tất cả các cạnh ei V chưa được chọn (VS(ei) \= 0).

 B.

.

 C.

Đánh dấu tất cả các đỉnh v V chưa được chọn (VS(v) \= 0).

 D.

Các phương án khác đều sai.

 E.

.

**Câu 207\.**

Cho đồ thị có hướng G \= (V, E) gồm 5 đỉnh dưới dạng danh sách cạnh:  
Đỉnh đầu Đỉnh cuối Đỉnh đầu Đỉnh cuối  
1 4 3 5  
2 1 4 1  
2 5 4 3  
3 1 5 3  
Nếu biểu diễn G dưới dạng ma trận liên thuộc M với các cạnh như trên thì:

 A.

M gồm 5 hàng và 8 cột và có M\[3\]\[7\] \= \-1, M\[4\]\[7\] \= 1\.

 B.

M gồm 8 hàng và 8 cột và có M\[2\]\[3\] \= 1, M\[5\]\[3\] \= \-1.

 C.

M gồm 5 hàng và 8 cột và có M\[1\]\[1\] \= 1, M\[4\]\[1\] \= 1\.

 D.

M gồm 5 hàng và 8 cột và có M\[3\]\[8\] \= 1, M\[5\]\[8\] \= \-1.

 E.

Các phương án khác đều sai.

**Câu 208\.**

Cho mạng G \= (V,E) với đỉnh phát s và đỉnh thu t. Xét hàm thực f(u,v): E R có một số tính chất sau:  
(1) Với mọi đỉnh v V khác s và t có tổng giá trị luồng f trên các cung có đỉnh cuối là v bằng giá trị luồng f trên các cung có đỉnh đầu là v.  
(2) Với mọi cung (u,v) E có f(u,v) \> 0\.  
(3) Với mọi cung (u,v) E có f(u,v) 0\.  
(4) Với mọi cung (u,v) E có f(u,v) c(u,v).  
(5) Với mọi cung (u,v) E có f(u,v) \< c(u,v).  
Hàm f(u,v) là một luồng trên G khi và chỉ khi thỏa mãn các điều kiện:

 A.

(1), (3) và (4).

 B.

(1), (2) và (5).

 C.

(1), (2) và (4).

 D.

Các phương án khác đều sai.

 E.

(1), (3) và (5).

**Câu 209\.**

Đơn đồ thị có hướng G \= (V, E) gồm 5 đỉnh được biểu diễn dưới dạng danh sách kề. deg-(5) có giá trị là bao nhiêu?  
Ke(1) \= {2, 3}, Ke(2) \= {1, 4, 5} , Ke(4) \= {1, 3}  
Ke(3) \= {2, 4, 5} , Ke(5) \= {1, 2, 3, 4}

 A.

1

 B.

4

 C.

3

 D.

2

 E.

Các phương án khác đều sai.

**Câu 210\.**

Cho đơn đồ thị vô hướng T gồm 5 đỉnh và 4 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 2 | 3 |
| 1 | 3 | 4 | 5 |

Chọn phương án đúng trong các phương án dưới đây:

 A.

T không phải là cây vì có cạnh (2,3) không phải cạnh cầu.

 B.

Các phương án khác đều đúng.

 C.

T không phải là cây vì có cạnh (1,2) không phải cạnh cầu.

 D.

T không phải là cây vì T có chứa chu trình.

 E.

T không phải là cây vì T không liên thông.

**Câu 211\.**

 Cho đơn đồ thị có hướng G gồm 5 đỉnh và 7 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 1 | 4 | 5 |
| 2 | 3 | 3 | 2 | 5 | 3 |
| 2 | 4 |  |  |  |  |

Hãy chọn phương án đúng trong các phương án sau:

 A.

G không phải là đồ thị nửa Euler.

 B.

G là đồ thị Euler.

 C.

G là đồ thị nửa Euler.

 D.

G không phải là đồ thị Euler.

 E.

Các phương án khác đều sai.

**Câu 212\.**

Cho luồng f trên mạng G với đỉnh phát s và đỉnh thu t. Giá trị của luồng f bằng:

 A.

Tổng giá trị luồng trên các cung trên đường đi ít cung nhất từ s đến t.

 B.

Tổng giá trị luồng trên các cung trên đường đi ngắn nhất từ s đến t.

 C.

Tổng giá trị luồng trên các cung của G.

 D.

Các phương án khác đều sai.

 E.

Tổng giá trị luồng trên các cung đi ra từ s.

**Câu 213\.**

25 Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:  
0 1 3 3  
1 0 2 2  
3 2 0 2  
3 2 2 0  
Sử dụng thuật toán Kruskal tìm cây khung nhỏ nhất T của G. Các cạnh của cây khung nhỏ nhất T theo thứ tự tìm kiếm của thuật toán và WT là:

 A.

T \= {(1,2), (2,3), (2,4)} và WT \= 4\.

 B.

Các phương án khác đều sai.

 C.

T \= {(1,2), (2,3), (3,4)} và WT \= 5\.

 D.

T \= {(1,2), (2,4), (3,4)} và WT \= 5\.

 E.

T \= {(1,2), (2,3), (2,4)} và WT \= 5\.

**Câu 214\.**

 Đồ thị vô hướng G \= (V, E) gồm 8 đỉnh biểu diễn dưới dạng danh sách cạnh như bên dưới. Sử dụng thuật toán BFS tìm kiếm đường đi từ đỉnh 1 đến đỉnh 6?

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 5 |
| 1 | 3 | 3 | 6 |
| 1 | 6 | 5 | 7 |
| 2 | 4 | 5 | 8 |
| 2 | 7 | 6 | 8 |

 A.

1 \-\> 2 \-\> 7 \-\> 5 \-\> 3 \-\> 6

 B.

1 \-\> 6

 C.

1 \-\> 2 \-\> 7 \-\> 5 \-\> 8 \-\> 6

 D.

1 \-\> 3 \-\> 5 \-\> 8 \-\> 6

 E.

Các phương án khác đều sai.

**Câu 215\.**

Đồ thị có hướng G \= (V, E) gồm 6 đỉnh được biểu diễn dưới dạng ma trận liên thuộc. Mô tả nào dưới đây là chính xác?

|   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| a | 1 | \-1 | 1 | 0 | 0 | 0 | 0 | \-1 | 0 |
| b | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | \-1 |
| c | 0 | 1 | 0 | \-1 | 0 | 1 | 0 | 0 | 0 |
| d | 0 | 0 | \-1 | 0 | \-1 | \-1 | 0 | 0 | 0 |
| e | \-1 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |
| f | 0 | 0 | 0 | 0 | 0 | 0 | \-1 | 1 | 0 |

 

 A.

deg-(b) \= 2

 B.

deg+(a) \= 4

 C.

deg-(c) \= 1

 D.

Các phương án khác đều sai.

 E.

deg+(d) \= 3

**Câu 216\.**

 Đoạn giả mã dưới đây mô tả ứng dụng thuật toán Breadth First Search để tìm đường đi từ đỉnh nào đến đỉnh nào?

| Begin (Khởi tạo):   Queue \= ∅; Push(Queue, s);   chuaxet\[s\] \= False; (Lặp):    while (Queue ≠ ∅) do      u \= Pop(Queue); for each v ∈ Ke(u) do  if (chuaxet\[v\]) then |         Push(Queue, v); chuaxet\[v\] \= False;         truoc\[v\]=u;        EndIf;     EndFor;   EndWhile; (Trả kết quả):    Return(\<Tập đỉnh được duyệt\>); End. |
| :---- | :---- |

 A.

Đỉnh v đến đỉnh u

 B.

Đỉnh u đến đỉnh v

 C.

Các phương án khác đều sai.

 D.

Đỉnh u đến đỉnh s

 E.

Đỉnh v đến đỉnh s

**Câu 217\.**

Cho đồ thị có hướng G \= (V, E) gồm 5 đỉnh dưới dạng danh sách cạnh:  
Đỉnh đầu Đỉnh cuối Đỉnh đầu Đỉnh cuối  
1 4 3 5  
2 1 4 1  
2 5 4 3  
3 1 5 3  
Nếu biểu diễn G dưới dạng danh sách kề thì:

 A.

Đỉnh 2 có mặt trong Ke(1) và Ke(5).

 B.

Các phương án khác đều sai.

 C.

Đỉnh 4 có mặt trong Ke(1) và Ke(3).

 D.

Đỉnh 6 không có mặt trong danh sách kề nào.

 E.

Đỉnh 3 có mặt trong Ke(4) và Ke(5). (Đ)

**Câu 218\.**

Trong các mô tả về tính chất của ma trận kề đối với đồ thị vô hướng, những mô tả nào là chính xác?  
1\. Tổng các phần tử của ma trận bằng số cạnh  
2\. Tổng các phần tử của hàng u bằng tổng các phần tử của cột u  
3\. Tổng các phần tử của hàng u là bán đỉnh bậc ra của đỉnh u  
4\. Tổng các phần tử của cột u là bán đỉnh bậc ra của đỉnh u

 A.

1, 2, 4

 B.

2, 3

 C.

Các phương án khác đều sai.

 D.

1, 3, 4

 E.

1, 3

**Câu 219\.**

Đồ thị vô hướng G \= (V, E) gồm 6 đỉnh được biểu diễn dưới dạng danh sách cạnh như bảng dưới. Đồ thị này có bao nhiêu đỉnh trụ?

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 4 |
| 1 | 3 | 4 | 5 |
| 2 | 3 | 4 | 6 |
| 2 | 4 | 5 | 6 |

 A.

3

 B.

0

 C.

 Các phương án khác đều sai.

 D.

2

 E.

4

**Câu 220\.**

Cho mạng G \= (V,E) và luồng f trên G. Đồ thị tăng luồng Gf \= (V,Ef) được xác định như sau:  
(1) Nếu e \= (u, v) E với f(u, v) \= 0 thì (u, v) Ef với trọng số c(u, v).  
(2) Nếu e \= (u, v) E thì (u, v) Ef với trọng số c(u, v) – f(u,v).  
(3) Nếu e \= (u, v) E với f(u, v) \= c(u, v) thì (v, u) Ef với trọng số f(u, v);  
(4) Nếu e \= (u, v) E với 0 \< f(u, v) \< c(u, v) thì (u, v) Ef với trọng số c(u, v) \- f(u, v).  
(5) Nếu e \= (u, v) E với 0 \< f(u, v) \< c(u, v) thì (v, u) Ef với trọng số f(u, v).  
Chọn phương án đúng trong các phương án dưới đây:

 A.

(1), (2), (3) và (5).

 B.

Các phương án khác đều sai.

 C.

(1), (2), (4) và (5).

 D.

(1), (2), (4) và (5).

 E.

(1), (2), (3) và (4).

**Câu 221\.**

Đồ thị vô hướng G \= (V, E) gồm 10 đỉnh và 10 cạnh được biểu diễn dưới dạng danh sách cạnh như dưới. Số thành phần liên thông của đồ thị là bao nhiêu?

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 6 | 7 |
| 1 | 3 | 7 | 8 |
| 2 | 3 | 7 | 9 |
| 2 | 4 | 8 | 10 |
| 3 | 5 | 9 | 10 |

 A.

1

 B.

2

 C.

Các phương án khác đều sai.

 D.

3

 E.

4

**Câu 222\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:

| 0 | ¥ | ¥ | \-4 |
| :---: | :---: | :---: | :---: |
| ¥ | **0** | 2 | ¥ |
| \-3 | ¥ | **0** | ¥ |
| ¥ | 2 | 4 | **0** |

Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 4 đến đỉnh t \= 1 của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

G chứa chu trình âm.

 B.

Các phương án khác đều sai.

 C.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 1 là 4231 với độ dài d\[1\] \= 1\.

 D.

Đường đi ngắn nhất từ đỉnh 4 đến đỉnh 1 là 431 với độ dài d\[4\] \= \-1.

 E.

Không có đường đi từ đỉnh 4 đến đỉnh 1\.

**Câu 223\.**

13 Cho đơn đồ thị vô hướng G \= (V, E) gồm n đỉnh và m cạnh. Hãy chọn phương án đúng trong các phương án sau:

 A.

G có cây khung khi và chỉ khi G là đồ thị liên thông.

 B.

G có cây khung khi và chỉ khi G tất cả m cạnh đều là các cạnh cầu.

 C.

G có cây khung khi và chỉ khi G có m \= n-1 cạnh.

 D.

G có cây khung khi và chỉ khi G không chứa chu trình.

 E.

Các phương án khác đều sai.

**Câu 224\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:  
0 8 1 9  
8 0 3 2  
1 3 0 5  
9 2 5 0  
Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 1 đến các đỉnh còn lại của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3 là 13 với độ dài d\[3\] \= 1\.

 B.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 2 là 132 với độ dài d\[2\] \= 4\.

 C.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 3 là 1324 với độ dài d\[4\] \= 6\.

 D.

Các phương án đưa ra đường đi ngắn nhất và độ dài tương ứng đều đúng.

 E.

Các phương án khác đều sai.

**Câu 225\.**

Cho mạng G \= (V,E) và luồng f trên G. Giá trị tăng luồng d là:

 A.

Giá trị nhỏ nhất trong các trọng số của các cung thuộc đường đi từ s đến t trên Gf.

 B.

Giá trị nhỏ nhất trong các trọng số của các cung thuộc đường đi ngắn nhất từ s đến t.

 C.

Các phương án khác đều sai.

 D.

Giá trị lớn nhất trong các trọng số của các cung thuộc đường đi ngắn nhất từ s đến t.

 E.

Giá trị lớn nhất trong các trọng số của các cung thuộc đường đi từ s đến t trên Gf.

**Câu 226\.**

 Đồ thị vô hướng G= được gọi là định chiều được khi nào?

 A.

Khi tồn tại đỉnh treo trong đồ thị

 B.

Khi có 1 và chỉ 1 cạnh của đồ thị là cạnh cầu

 C.

Khi tất cả các cạnh của đồ thị là cạnh cầu

 D.

Các phương án khác đều sai.

 E.

Khi tất cả các cạnh của đồ thị không phải là cạnh cầu

**Câu 227\.**

 Cho đơn đồ thị có hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 1 1 0 0  
1 0 1 0 0  
1 1 0 0 0  
0 0 0 0 1  
0 0 0 1 0  
Chọn phương án đúng trong các phương án:

 A.

 Các phương án khác đều sai.

 B.

G là đồ thị liên thông mạnh.

 C.

G không liên thông mạnh nhưng liên thông yếu.

 D.

G không liên thông mạnh và không liên thông yếu.

 E.

G là đồ thị liên thông.

**Câu 228\.**

Cho đồ thị vô hướng G \= (V, E) gồm n đỉnh và m cạnh. Điều kiện cần và đủ để G là đồ thị nửa Euler:

 A.

G liên thông và chứa không quá 2 đỉnh bậc lẻ.

 B.

Tồn tại một thành phần liên thông của G là đồ thị Euler.

 C.

G liên thông và mọi đỉnh của nó đều có bậc lẻ.

 D.

G liên thông và có m \= n-1 cạnh.

 E.

Các phương án khác đều sai.

**Câu 229\.**

12 Cho đơn đồ thị vô hướng G \= (V, E) gồm n đỉnh và m cạnh. Hãy chọn phương án đúng trong các phương án sau:

 A.

G có cây khung khi và chỉ khi G tất cả m cạnh đều là các cạnh cầu.

 B.

G có cây khung khi và chỉ khi G không chứa chu trình.

 C.

G có cây khung khi và chỉ khi G có m \= n-1 cạnh.

 D.

G có cây khung khi và chỉ khi G là đồ thị liên thông.

**Câu 230\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:  
0 4 4 4  
4 0 4 5  
4 4 0 7  
4 5 7 0  
Sử dụng thuật toán Prim với hiệu chỉnh phù hợp, tìm cây khung T của G có tổng trọng số WT lớn nhất bắt đầu tại đỉnh s \= 3\. Các cạnh của cây khung lớn nhất T theo thứ tự tìm kiếm của thuật toán với WT là:

 A.

T \= {(3,4), (4,2), (2,1)} với WT \= 16\.

 B.

T \= {(3,4), (4,2), (3,1)} với WT \= 17\.

 C.

Các phương án khác đều sai.

 D.

T \= {(3,4), (4,2), (2,1)} với WT \= 17\.

 E.

T \= {(3,4), (3,1), (4,2)} với WT \= 16\.

**Câu 231\.**

 Cho đơn đồ thị có hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 0 1 1 0  
1 0 0 0 0  
0 1 0 0 0  
1 0 1 0 0  
1 0 0 1 0  
Sử dụng thuật toán liệt kê tất cả các chu trình Hamilton H của G bắt đàu tại đỉnh s \= 2\. Các đỉnh xuất hiện theo thứ tự khi thực hiện thuật toán trong H đầu tiên được liệt kê là:

 A.

H \= {2, 5, 4, 1, 3}.

 B.

H \= {2, 5, 1, 4, 3}.

 C.

H \= {2, 3, 1, 4, 5}.

 D.

H \= {2, 5, 1, 3, 4}.

 E.

Các phương án khác đều sai.

**Câu 232\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 6 | 2 | 3 | 7 |
| 1 | 3 | 6 | 2 | 4 | 6 |
| 1 | 4 | 6 | 3 | 4 | \-4 |

Sử dụng thuật toán Prim với hiệu chỉnh phù hợp, tìm cây khung T của G có tổng trọng số WT lớn nhất bắt đầu tại đỉnh s \= 3\. Các cạnh của cây khung lớn nhất T theo thứ tự tìm kiếm của thuật toán với WT là:

 A.

Không sử dụng được thuật toán Prim với hiệu chỉnh phù hợp do G chứa trọng số âm.

 B.

Các phương án khác đều sai.

 C.

T \= {(3,2), (3,1), (1,4)} với WT \= 19\.

 D.

T \= {(3,2), (2,1), (1,4)} với WT \= 19\.

 E.

T \= {(3,2), (2,1), (1,4)} với WT \= 20\.

**Câu 233\.**

Trường hợp đồ thị được biểu diễn dưới dạng danh sách kề có n đỉnh m cạnh, độ phức tạp của thuật toán Depth First Search có giá trị là bao nhiêu?

 A.

O(n.m)

 B.

O(max(n, m))

 C.

Các phương án khác đều sai.

 D.

O(n)

 E.

O(n2)

**Câu 234\.**

Cho đồ thị có hướng có trọng số G gồm 4 đỉnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 4 | 3 | 2 | 1 |
| 1 | 4 | 8 | 4 | 1 | 4 |
| 2 | 4 | 2 | 4 | 3 | 5 |

Nếu biểu diễn G dưới dạng ma trận trọng số A thì:

 A.

Ma trận A gồm 4 hàng, 4 cột và có hàng 4 là (4, ∞, 5, 0). (Đ)

 B.

Ma trận A gồm 4 hàng, 4 cột và có cột 2 là (4, 0, 1, 2).

 C.

Các phương án khác đều sai.

 D.

Ma trận A gồm 4 hàng, 4 cột và có hàng 2 là (4, 0, 1, 2).

 E.

Ma trận A gồm 4 hàng, 4 cột và có hàng 3 là (∞, 1, 0, 5).

**Câu 235\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:

| 0 | 4 | 4 | \-5 |
| :---: | :---: | :---: | :---: |
| 4 | **0** | 3 | 3 |
| 4 | 3 | **0** | 3 |
| \-5 | 3 | 3 | **0** |

Sử dụng thuật toán Kruskal tìm cây khung nhỏ nhất T của G. Các cạnh của cây khung nhỏ nhất T theo thứ tự tìm kiếm của thuật toán và WT là:

 A.

Các phương án khác đều sai.

 B.

T \= {(1,4), (2,3), (2,4)} với WT \= 1\.

 C.

T \= {(1,4), (2,3), (3,4)} với WT \= 1\.

 D.

T \= {(1,4), (2,3), (2,4)} với WT \= 0\.

 E.

Không sử dụng được thuật toán Kruskal do G chứa trọng số âm.

**Câu 236\.**

31 Đồ thị vô hướng G \= (V,E) được biểu diễn dưới dạng danh sách kề như dưới. Số thành phần liên thông của đồ thị là bao nhiêu?  
Ke(1) \= {2, 3} Ke(4) \= { ø }  
Ke(2) \= {1, 3} Ke(5) \= {6}  
Ke(3) \= {1, 2} Ke(6) \= {5}

 A.

4

 B.

Các phương án khác đều sai.

 C.

2

 D.

1

 E.

3

**Câu 237\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:  
0 5 5 5  
5 0 \-8 7  
5 \-8 0 5  
5 7 5 0  
Sử dụng thuật toán Prim với hiệu chỉnh phù hợp, tìm cây khung T của G có tổng trọng số WT lớn nhất bắt đầu tại đỉnh s \= 4\. Các cạnh của cây khung lớn nhất T theo thứ tự tìm kiếm của thuật toán với WT là:

 A.

T \= {(4,2), (2,1), (1,3)} với WT \= 18\.

 B.

Không sử dụng được thuật toán Prim với hiệu chỉnh phù hợp do G chứa trọng số âm.

 C.

Các phương án khác đều sai.

 D.

T \= {(4,2), (2,1), (1,3)} với WT \= 17\.

 E.

T \= {(4,2), (4,1), (1,3)} với WT \= 17\.

**Câu 238\.**

Đồ thị vô hướng được biểu diễn dưới dạng danh sách cạnh. Bậc của đỉnh u thuộc đồ thị có thể đếm được bằng cách nào?

 A.

Số lần đỉnh u xuất hiện ở cột đỉnh cuối của danh sách cạnh

 B.

Các phương án khác đều sai.

 C.

(Số lần đỉnh u xuất hiện ở cột đỉnh đầu của danh sách cạnh) x 2

 D.

(Số lần đỉnh u xuất hiện ở cột đỉnh cuối của danh sách cạnh) x 2

 E.

Số lần đỉnh u xuất hiện ở cột đỉnh đầu của danh sách cạnh

**Câu 239\.**

Cho đồ thị G \= (V, E). Hãy chọn phương án đúng trong các phương án sau:

 A.

Chu trình đơn trong G đi qua tất cả các đỉnh gọi là chu trình Euler.

 B.

Các phương án khác đều sai.

 C.

Chu trình đơn trong G đi qua mỗi đỉnh của nó không quá 1 lần gọi là chu trình Euler.

 D.

Chu trình đơn trong G đi qua mỗi cạnh của nó không quá 1 lần gọi là chu trình Euler.

 E.

Chu trình đơn trong G chứa tất cả các cạnh của nó gọi là chu trình Euler.

**Câu 240\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2 | 1 | 7 | 4 | 1 | 4 |
| 2 | 3 | \-3 | 4 | 2 | 2 |
| 3 | 1 | \-2 | 4 | 3 | 1 |

Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 4 đến các đỉnh còn lại của G. Đỉnh t có đường đi ngắn nhất từ s đến t có giá trị lớn nhất là:

 A.

Các phương án khác đều sai.

 B.

Đỉnh t \= 1\.

 C.

Đỉnh t \= 3\.

 D.

Không tìm được t do G chứa chu trình âm.

 E.

Đỉnh t \= 2\.

**Câu 241\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng danh sách kề:  
Ke(1)={4,5} Ke(2)={3,4,5} Ke(3) \= {2,4,5} Ke(4) \= (1,2,3} Ke(5) \= {1,2,3}  
Sử dụng thuật toán liệt kê tất cả các chu trình Hamilton H của G bắt đàu tại đỉnh s \= 5\. Các đỉnh xuất hiện theo thứ tự khi thực hiện thuật toán trong H đầu tiên được liệt kê là:

 A.

H \= {5, 2, 3, 4, 1}.

 B.

H \= {5, 1, 4, 2, 3}.

 C.

H \= {5, 1, 4, 2, 3}.

 D.

Các phương án khác đều sai.

 E.

H \= {5, 3, 2, 4, 1}.

**Câu 242\.**

Cho đồ thị vô hướng G \= (V, E) gồm 5 đỉnh dưới dạng danh sách cạnh như bên dưới. Đâu là thứ tự duyệt các đỉnh của thuật toán BFS?

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 3 | 2 | 5 |
| 1 | 4 | 3 | 4 |
| 2 | 3 | 3 | 5 |

 A.

{1, 3, 4, 5, 2}

 B.

{1, 2, 3, 5, 4}

 C.

{1, 2, 3, 4, 5}

 D.

{1, 3, 4, 2, 5}

 E.

Các phương án khác đều sai.

**Câu 243\.**

Cho mạng G \= (V,E) và luồng f trên G. Cung thuận trong đồ thị tăng luồng Gf \= (V,Ef) là cung:

 A.

(u, v) nằm trên đường đi từ s đến t trong G hoặc Gf.

 B.

(s, v) đồng thời là cung của G và Gf.

 C.

Các phương án khác đều sai.

 D.

(u, v) đồng thời là cung của G và Gf.

 E.

(u, t) đồng thời là cung của G và Gf.

**Câu 244\.**

 Đơn đồ thị vô hướng G \= (V,E) gồm 6 đỉnh được biểu diễn dưới dạng danh sách kề. Số cạnh của đồ thị là bao nhiêu?  
Ke(1) \= {2, 3}, Ke(2) \= {1, 3, 4, 5} , Ke(5) \= {2, 4, 6}  
Ke(3) \= {1, 2, 4}, Ke(4) \= {2, 3, 5, 6} , Ke(6) \= {4, 5}

 A.

19

 B.

17

 C.

20

 D.

18

 E.

Các phương án khác đều sai.

**Câu 245\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:  
0 6 1 9  
6 0 2 3  
1 2 0 5  
9 3 5 0  
Sử dụng thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh s \= 1 đến đỉnh t \= 4 của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 4 là 134 với độ dài d\[4\] \= 6\.

 B.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 4 là 1324 với độ dài d\[4\] \= 6\.

 C.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 4 là 134 với độ dài d\[4\] \= 5\.

 D.

Các phương án khác đều sai.

 E.

Đường đi ngắn nhất từ đỉnh 1 đến đỉnh 4 là 14 với độ dài d\[4\] \= 6\.

**Câu 246\.**

Cho đơn đồ thị có hướng có trọng số G=(V,E) có 5 đỉnh dạng ma trận trọng số:  
0 0 0 3 1  
1 0 0 4 0  
2 2 0 0 0  
0 0 0 0 0  
0 0 0 5 0  
Chọn phương án đúng trong các phương án dưới đây:

 A.

G là một mạng với đỉnh phát s \= 3 và đỉnh thu t \= 4\.

 B.

Các phương án khác đều sai.

 C.

G là một mạng với đỉnh phát s \= 3 và đỉnh thu t \= 5\.

 D.

G là một mạng với đỉnh phát s \= 4 và đỉnh thu t \= 5\.

 E.

G không phải là một mạng.

**Câu 247\.**

Cho đơn đồ thị vô hướng có trọng số G \= (V, E) gồm n đỉnh và m cạnh. Xét mô tả thuật toán Prim có hiệu chỉnh tìm cây khung có tổng trọng số lớn nhất T và WT bắt đầu tại đỉnh s của G như sau:

| (1) T= Æ; VT \= {s}; WT= 0; (2) while (V\\VT ≠ Æ) {         (2.1)         (2.2) if  (Tìm được e) {                    T \= T È {e};  WT= WT \+ \<trọng số của e\>; VT \= VT È {v};                           }          (2.3)    else  Return (\<G không có cây khung\>);            }  (3) Return (T và WT);   |
| :---- |

Thao tác cần thực hiện trong bước (2.1) là:

 A.

Các phương án khác đều sai.

 B.

Sắp xếp m cạnh của G theo thứ tự giảm của trọng số e1, …, em.

 C.

Đánh dấu tất cả các cạnh ei V chưa được chọn (VS(ei) \= 0).

 D.

.

 E.

Đánh dấu tất cả các đỉnh v V chưa được chọn (VS(v) \= 0).

**Câu 248\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 2 | 3 | 3 |
| 1 | 3 | 3 | 2 | 4 | 2 |
| 1 | 4 | 6 | 3 | 4 | 1 |

Sử dụng thuật toán Kruskal tìm cây khung nhỏ nhất T của G. Các cạnh của cây khung nhỏ nhất T theo thứ tự tìm kiếm của thuật toán và WT là:

 A.

T \= {(3,4), (2,4), (1,2)} với WT \= 6\.

 B.

T \= {(3,4), (2,4), (2,3)} với WT \= 6\.

 C.

T \= {(3,4), (2,4), (1,2)} với WT \= 5\.

 D.

Các phương án khác đều sai.

 E.

T \= {(3,4), (2,4), (1,3)} với WT \= 6\.

**Câu 249\.**

Cho đơn đồ thị có hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 0 0 1 0  
1 0 0 0 1  
1 0 0 1 1  
1 0 1 0 0  
0 1 0 0 0  
Chọn phương án đúng:

 A.

Đỉnh 1 có mặt trong Ke(2), Ke(3) và Ke(4).

 B.

Đỉnh 4 có mặt trong Ke(1), Ke(2) và Ke(3).

 C.

Các phương án khác đều sai.

 D.

Đỉnh 2 có mặt trong Ke(1), Ke(4) và Ke(5).

 E.

Đỉnh 3 có mặt trong Ke(1), Ke(4) và Ke(5).

**Câu 250\.**

 Cho đồ thị vô hướng G \= (V, E) gồm n đỉnh và m cạnh. Điều kiện cần và đủ để G là đồ thị Hamilton:

 A.

Các phương án khác đều sai.

 B.

G không chứa đỉnh bậc lẻ.

 C.

Mọi thành phần liên thông của G là đồ thị Hamilton.

 D.

G liên thông và có m \= n cạnh.

 E.

G liên thông và mọi đỉnh của nó đều có bậc chẵn.

**Câu 251\.**

Cho đồ thị vô hướng G như hình dưới. Chọn phương án đúng:

![][image13]

 A.

Các phương án khác đều sai.

 B.

G là đồ thị hai phía với các tập X-đỉnh \= {1,2,3,4,5} và Y-đỉnh \= {6,7}.

 C.

G là đồ thị hai phía với các tập X-đỉnh \= {1,2,3,4} và Y-đỉnh \= {5,6,7}.

 D.

G là đồ thị hai phía với các tập X-đỉnh \= {1,6,7} và Y-đỉnh \= {2,3,4,5}.

 E.

G là đồ thị hai phía với các tập X-đỉnh \= {1,2,5,6} và Y-đỉnh \= {3,4,7}.

**Câu 252\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng danh sách kề:

| Ke(1)={2,3,4,5} | Ke(2)={1,4,5} | Ke(3)={1,5} | Ke(4)={1.2.5} | Ke(5)={1,2,3,4} |
| :---- | :---- | :---- | :---- | :---- |

Sử dụng thuật toán BFS tìm cây khung T của G bắt đầu tại đỉnh s \= 3\. Các cạnh của cây khung T theo thứ tự tìm kiếm của BFS là:

 A.

T \= {(3,1), (3,5), (1,2),(1,4)}.

 B.

T \= {(3,1), (1,2), (1,4), (1,5)}.

 C.

T \= {(3,1), (3,5), (5,2), (5,4)}.

 D.

Các phương án khác đều sai.

 E.

T \= {(3,1), (1,2), (2,4),(4,5)}.

**Câu 253\.**

Cho luồng f trên mạng G với đỉnh phát s và đỉnh thu t. Giá trị của luồng f bằng:

 A.

Tổng giá trị khả năng thông qua các cung của G.

 B.

Tổng giá trị luồng trên các cung trên đường đi nhiều cung nhất từ s đến t.

 C.

Tổng giá trị luồng trên các cung đi vào t.

 D.

Các phương án khác đều sai.

 E.

Tổng giá trị luồng trên các cung trên đường đi ít cung nhất từ s đến t.

**Câu 254\.**

Đơn đồ thị có hướng G= gồm 6 đỉnh và 10 cạnh được biểu diễn dưới dạng danh sách cạnh như dưới.

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 6 |
| 1 | 5 | 4 | 5 |
| 2 | 3 | 4 | 6 |
| 2 | 4 | 5 | 3 |
| 2 | 5 | 6 | 2 |

Bán bậc của các đỉnh là:

 A.

deg+(1) \= 2, deg-(2) \= 2, deg-(4) \= 2 và deg-(6) \= 2\.

 B.

deg+(1) \= 2, deg-(3) \= 2, deg+(4) \= 2 và deg-(5) \= 3\. (Đ)

 C.

deg-(1) \= 2, deg+(2) \= 3, deg-(4) \= 1 và deg+(6) \= 1\.

 D.

deg-(3) \= 1, deg+(4) \= 3, deg-(5) \= 3 và deg+(6) \= 1\.

 E.

Các phương án khác đều sai.

**Câu 255\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 1 1 0 0  
1 0 1 0 0  
1 1 0 1 1  
0 0 1 0 1  
0 0 1 1 0  
Sử dụng thuật toán tìm chu trình Euler E của G bắt đầu tại đỉnh s \= 1\. Các đỉnh xuất hiện trong E theo thứ tự khi thực hiện thuật toán là:

 A.

E \= {1, 3, 5, 4, 3, 2, 1}.

 B.

Các phương án khác đều sai.

 C.

E \= {1, 2, 3, 5, 4, 3, 1}.

 D.

E \= {1, 3, 4, 5, 3, 2, 1}.

 E.

E \= {1, 2, 3, 4, 5, 3, 1}.

**Câu 256\.**

Trong các loại đồ thị dưới đây, đồ thị nào có cung?  
1\. Đơn đồ thị vô hướng  
2\. Đa đồ thị vô hướng  
3\. Giả đồ thị vô hướng  
4\. Đơn đồ thị có hướng  
5\. Đa đồ thị có hướng

 A.

2, 4, 5

 B.

3

 C.

4, 5

 D.

2, 3, 5

 E.

Các phương án khác đều sai.  
 

**Câu 257\.**

Đồ thị có hướng G \= (V,E) biểu diễn dưới dạng ma trận kề như dưới đây.

| 0 | 1 | 1 | 0 | 0 |
| :---- | :---- | :---- | :---- | :---- |
| 1 | 0 | 0 | 1 | 1 |
| 0 | 0 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 |

Để biểu diễn ma trận G dưới dạng ma trận liên thuộc cần kẻ bảng bao nhiêu hàng, bao nhiêu cột?

 A.

5 hàng, 12 cột 

 B.

6 hàng, 6 cột

 C.

5 hàng, 10 cột

 D.

Các phương án khác đều sai.

 E.

5 hàng, 5 cột

**Câu 258\.**

Đơn đồ thị vô hướng G \= (V,E) gồm 6 đỉnh được biểu diễn dưới dạng danh sách kề. Bậc của đỉnh 6 bằng bậc của đỉnh nào dưới đây?  
Ke(1) \= {2, 3}, Ke(2) \= {1, 3, 4, 5} , Ke(5) \= {2, 4, 6}  
Ke(3) \= {1, 2, 4}, Ke(4) \= {2, 3, 5, 6} , Ke(6) \= {4, 5}

 A.

2

 B.

3

 C.

5

 D.

Các phương án khác đều sai.

 E.

4

**Câu 259\.**

Đồ thị vô hướng đầy đủ G \= (V, E) có n đỉnh. Tổng bậc của n đỉnh là:

 A.

n(n-1)

 B.

n(n+1)/2

 C.

Các phương án khác đều sai.

 D.

2n+1

 E.

2n

**Câu 260\.**

Cho mạng G \= (V,E) và lát cắt (X, X\*). Khả năng thông qua của (X, X\*) là:

 A.

Độ dài đường đi ngắn nhất từ s đến t.

 B.

Các phương án khác đều sai.

 C.

Tổng của các khả năng thông qua c(s,v), với v Î X\*.

 D.

Tổng của các khả năng thông qua c(u,v) với u X và vÎ  X\*.

 E.

Tổng của các khả năng thông qua c(u,t), với uÎ  X.

**Câu 261\.**

Trong các loại đồ thị dưới đây, đồ thị nào có cạnh bội?  
1\. Đơn đồ thị vô hướng  
2\. Đa đồ thị vô hướng  
3\. Giả đồ thị vô hướng  
4\. Đơn đồ thị có hướng  
5\. Đa đồ thị có hướng

 A.

Các phương án khác đều sai.  
 

 B.

2, 3, 4, 5

 C.

2, 3, 5

 D.

2, 4, 5

 E.

1, 3, 4

**Câu 262\.**

Đồ thị vô hướng G \= (V, E) được biểu diễn dưới dạng danh sách cạnh như dưới. Đỉnh nào dưới đây là đỉnh treo?  
Đỉnh đầu Đỉnh cuối Đỉnh đầu Đỉnh cuối

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 2 | 6 |
| 1 | 5 | 4 | 6 |
| 2 | 3 | 5 | 6 |
| 2 | 4 |  |  |

 A.

1

 B.

6

 C.

2

 D.

Các phương án khác đều sai.

 E.

3

**Câu 263\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 2 | 4 |
| 1 | 5 | 2 | 5 |
| 2 | 3 | 3 | 4 |

Sử dụng thuật toán BFS tìm cây khung T của G bắt đầu tại đỉnh s \= 4\. Các cạnh của cây khung T theo thứ tự tìm kiếm của BFS là:

 A.

T \= {(4,2), (2,1), (1,5), (2,3)}.

 B.

T \= {(4,2), (2,1), (2,3),(2,5)}.

 C.

T \= {(4,2), (4,3), (2,1), (2,5)}.

 D.

T \= {(4,2), (2,1), (2,5),(4,3)}.

**Câu 264\.**

Đồ thị vô hướng G \= (V, E) gồm 5 đỉnh được biểu diễn dưới dạng ma trận kề như bên dưới. Đâu là thứ tự duyệt các đỉnh của thuật toán BFS?  
0 0 1 1 1  
0 0 0 1 1  
1 0 0 0 0  
1 1 0 0 1  
1 1 0 1 0

 A.

{1, 3, 4, 2, 5}

 B.

{1, 5, 4, 2, 3}

 C.

{1, 3, 4, 5, 2}

 D.

Các phương án khác đều sai.

 E.

{1, 2, 3, 4, 5}

**Câu 265\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 4 | 3 | 2 | 4 | 6 |
| 2 | 1 | 8 | 3 | 1 | 1 |
| 2 | 3 | 1 | 3 | 4 | 4 |

Sử dụng thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh s \= 2 đến các đỉnh còn lại của G. Đỉnh t có đường đi ngắn nhất từ s đến t có giá trị lớn nhất là:

 A.

Đỉnh t \= 3\.

 B.

Các phương án khác đều sai.

 C.

Các phương án khác đều đúng.

 D.

Đỉnh t \= 1\.

 E.

Đỉnh t \= 4\.

**Câu 266\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 1 | 2 | 3 | 1 |
| 1 | 3 | 2 | 2 | 4 | 1 |
| 1 | 4 | 1 | 3 | 4 | \-1 |

Sử dụng thuật toán Prim tìm cây khung nhỏ nhất T của G bắt đầu tại đỉnh s \= 4\. Các cạnh của cây khung nhỏ nhất theo thứ tự tìm kiếm của thuật toán với WT là:

 A.

Không sử dụng được thuật toán Prim do G chứa trọng số âm.

 B.

Các phương án khác đều sai.

 C.

T \= {(4,3), (3,2), (2,1)} với WT \= 1\.

 D.

T \= {(4,3), (4,2), (4,1)} với WT \= 1\.

 E.

T \= {(4,3), (4,1), (1,2)} với WT \= 1\.

**Câu 267\.**

 Đồ thị vô hướng đầy đủ G có 5 đỉnh. Tổng bậc của 5 đỉnh là bao nhiêu?

 A.

15

 B.

Các phương án khác đều sai.

 C.

16

 D.

11

 E.

10

**Câu 268\.**

Cho mạng G gồm 6 đỉnh dưới dạng ma trận trọng số:

| 0 | 4 | 5 | 0 | 0 | 0 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | **0** | 0 | 6 | 7 | 0 |
| 0 | 0 | **0** | 6 | 4 | 0 |
| 0 | 0 | 0 | **0** | 0 | 7 |
| 0 | 0 | 0 | 0 | **0** | 6 |
| 0 | 0 | 0 | 0 | 0 | **0** |

Chọn phương án đúng trong các phương án dưới đây:

 A.

Luồng f trên G với f(1.2) \= 4, f(1,3) \= 5, f(2,5) \= 4, f(3,4) \= 6, f(4,6) \= 6, f(5,6) \= 4\.

 B.

Các phương án khác đều sai.

 C.

Luồng f trên G với f(1.2) \= 4, f(1,3) \= 4, f(2,4) \= 4, f(3,5) \= 4, f(4,6) \= 4, f(5,6) \= 4\.

 D.

Luồng f trên G với f(1.2) \= 5, f(1,3) \= 4, f(2,4) \= 6, f(3,5) \= 4, f(4,6) \= 4, f(5,6) \= 4\.

 E.

Luồng f trên G với f(1.2) \= 4, f(1,3) \= 3, f(2,4) \= 6, f(3,5) \= 4, f(4,6) \= 4, f(5,6) \= 4\.

**Câu 269\.**

Cho đơn đồ thị có trọng số G \= (V,E) gồm n đỉnh. Sử dụng thuật toán Floyd tìm đường đi ngắn nhất giữa các cặp đỉnh của G trong trường hợp:

 A.

Các phương án khác đều sai.

 B.

G là đồ thị có hướng.

 C.

G chứa không quá n cạnh với trọng số âm.

 D.

G là đồ thị với các trọng số không âm.

 E.

G là đồ thị có hướng, không chứa chu trình âm.

**Câu 270\.**

Đồ thị có hướng G \= (V, E) biểu diễn dưới dạng ma trận kề dưới đây. Vậy deg-(2) \+ deg-(3) bằng bao nhiêu?  
0 1 1 0 0  
1 0 0 1 1  
0 0 0 1 1  
1 1 0 0 1  
1 0 1 0 0

 A.

5

 B.

Các phương án khác đều sai.

 C.

7

 D.

6TRR10

 E.

4

**Câu 271\.**

Xét hàm trên C/C++ biểu diễn thuật toán tìm chu trình/đường đi Euler:

| void ceu(int a\[\]\[\], int n, int u) {    int top \=0, v; k= 0;    top++; s\[top\]= u;   while (top \> 0\)  {        int v= s\[top\];  int ok= 1;      for (int x= 1; x\<= n; x++)         if (a\[v\]\[x\] \==1){                  top++; s\[top\]= x; ok= 0;                          …                     }        |    if (ok \== 1\) {                     k++; ce\[k\]= v;                     top--;                   }           }      for (v \= k; v\> 0; v--)                   cout \<\< ce\[v\] \<\< “ “; }       |
| :---- | :---- |

Các câu lệnh còn thiếu ở vị trí dấu ba chấm là:

 A.

a\[v\]\[x\]= 0; a\[x\]\[v\]= 0; break;

 B.

a\[v\]\[x\]= 0; a\[x\]\[v\]= 0;

 C.

a\[x\]\[v\]= 0; break;

 D.

a\[v\]\[x\]= 0; break;

 E.

Các phương án khác đều sai.

**Câu 272\.**

 Đồ thị vô hướng biểu diễn ở hình dưới. Đỉnh nào là đỉnh trụ của đồ thị?  
![9k=][image14]

 A.

Đỉnh 8, đỉnh 10

 B.

Đỉnh 5, đỉnh 6

 C.

Đỉnh 4, đỉnh 5

 D.

Đỉnh 6, đỉnh 7

 E.

 Các phương án khác đều sai.

**Câu 273\.**

Cho đơn đồ thị T \= (V, E) gồm n đỉnh và m cạnh là một cây. Hãy chọn phương án đúng trong các phương án sau:

 A.

Các phương án khác đều sai.

 B.

T là đồ thị vô hướng không chứa chu trình và có m \= n-1 cạnh.

 C.

T là đồ thị liên thông yếu và không chứa chu trình.

 D.

T là đồ thị vô hướng liên thông và tất cả các đinh đều có bậc chẵn.

 E.

T là đồ thị vô hướng không chứa chu trình và tất cả các đinh đều có bậc lẻ.

**Câu 274\.**

Cho đơn đồ thị có hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 0 0 1 1  
1 0 0 0 0  
0 0 0 1 0  
0 1 0 0 1  
1 0 1 0 0  
Hãy chọn phương án đúng trong các phương án sau:

 A.

G không phải là đồ thị Euler.

 B.

G không phải là đồ thị Euler nhưng là đồ thị nửa Euler.

 C.

G là đồ thị Euler.

 D.

Các phương án khác đều sai.

 E.

G không phải là đồ thị nửa Euler.

**Câu 275\.**

Đồ thị có hướng có trọng số được biểu diễn bằng danh sách cạnh bên dưới.  
Đỉnh đầu Đỉnh cuối Trọng số Đỉnh đầu Đỉnh cuối Trọng số

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 5 | 4 | 3 | 7 |
| 2 | 3 | 8 | 4 | 5 | 5 |
| 2 | 4 | 6 | 5 | 6 | 4 |
| 2 | 5 | 3 | 6 | 4 | 3 |
| 3 | 1 | 2 |  |  |  |

Tổng deg+(2) \+ deg-(2) bằng bao nhiêu?

 A.

Các phương án khác đều sai.

 B.

1

 C.

4

 D.

3

 E.

2

**Câu 276\.**

 Trường hợp đồ thị được biểu diễn dưới dạng danh sách cạnh có n đỉnh, m cạnh, độ phức tạp của thuật toán Depth First Search có giá trị là bao nhiêu?

 A.

O(n.m)

 B.

Các phương án khác đều sai.

 C.

O(n2.m)

 D.

O(max(n,m)

 E.

O(n2)

**Câu 277\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 1 0 1 0  
1 0 1 0 1  
0 1 0 1 1  
1 0 1 0 1  
0 1 1 1 0  
Sử dụng thuật toán liệt kê tất cả các chu trình Hamilton H của G bắt đàu tại đỉnh s \= 1\. Các đỉnh xuất hiện theo thứ tự khi thực hiện thuật toán trong H đầu tiên được liệt kê là:

 A.

Các phương án khác đều sai.

 B.

H \= {1, 4, 5, 3, 2}.

 C.

H \= {1, 2, 3, 5, 4}.

 D.

H \= {1, 4, 3, 5, 2}.

 E.

H \= {1, 2, 5, 3, 4}.

**Câu 278\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | \-7 | 2 | 3 | 2 |
| 1 | 3 | 5 | 2 | 4 | 2 |
| 1 | 4 | 1 | 3 | 4 | 2 |

Sử dụng thuật toán Kruskal với hiệu chỉnh phù hợp, tìm cây khung T của G có tổng trọng số WT lớn nhất. Các cạnh của cây khung lớn nhất T theo thứ tự tìm kiếm của thuật toán với WT là:

 A.

Không sử dụng được thuật toán Kruskal với hiệu chỉnh phù hợp do G chứa trọng số âm.

 B.

T \= {(1,3), (2,3), (3,4)} với WT \= 9\.

 C.

T \= {(1,3), (2,3), (2,4)} với WT \= 9\.

 D.

Các phương án khác đều sai.

 E.

T \= {(1,3), (2,3), (2,4)} với WT \= 10\.

**Câu 279\.**

Cho đồ thị có hướng như hình dưới. Đường đi nào được gọi là chu trình?  
![9k=][image15]

 A.

1 \-\> 5 \-\> 4 \-\> 3

 B.

Các phương án khác đều sai.  
 

 C.

1 \-\> 5 \-\> 4 \-\> 2 \-\> 1 \-\> 5 \-\> 4 \-\> 3

 D.

4 \-\> 2 \-\> 1 \-\> 3

 E.

5 \-\> 4 \-\> 2 \-\> 3

**Câu 280\.**

Đồ thị G \= (V, E) được biểu diễn dưới dạng ma trận trọng số dưới đây.  
Mô tả nào dưới đây là chính xác?  
∞ 3 ∞ ∞ ∞ 5  
2 ∞ ∞ ∞ 1 ∞  
∞ ∞ ∞ 2 6 1  
1 ∞ 3 ∞ 2 ∞  
∞ 4 3 5 ∞ ∞  
∞ ∞ 2 7 ∞ ∞

 A.

Các phương án khác đều sai.

 B.

deg+(6) \> deg-(6)

 C.

deg+(5) \+ deg+(6) \= 5

 D.

deg-(2) \= 3 (Đ)

 E.

deg-(2) \= deg-(3) \= deg-(5)

**Câu 281\.**

Cho đơn đồ thị có hướng G gồm 5 đỉnh dưới dạng ma trận kề:  
0 0 1 0 1  
0 0 0 1 1  
0 1 0 0 0  
0 0 0 0 1  
1 0 0 0 0  
Chọn phương án đúng trong các phương án:

 A.

 Các phương án khác đều sai.

 B.

G là đồ thị liên thông mạnh.

 C.

G không liên thông mạnh vì chứa số lẻ đỉnh.

 D.

G là đồ thị liên thông.

 E.

G không liên thông mạnh vì deg-(1) deg+(1).

**Câu 282\.**

**Cho đơn đồ thị vô hướng G \= (V, E) gồm 6 đỉnh được biểu diễn dưới dạng ma trận kề như dưới. Số thành phần liên thông của đồ thị là bao nhiêu?**

| 0 | 0 | 0 | 0 | 1 | 0 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 |

 A.

Các phương án khác đều sai.

 B.

0

 C.

3

 D.

2

 E.

1

**Câu 283\.**

Cho mạng G \= (V,E) gồm 5 đỉnh dưới dạng ma trận trọng số:  
0 5 4 0 0  
0 0 0 6 6  
0 0 0 0 5  
0 0 0 0 6  
0 0 0 0 0  
Xét hàm f trong mạng G với các giá trị khác 0: f(1,2) \= 5, f(1,3) \= 4, f(2,5) \= 6, f(3,5) \= 5\. Chọn phương án đúng trong các phương án sau:

 A.

Các phương án khác đều sai.

 B.

Hàm f là luồng cực đại với val(f) \= 12\.

 C.

Hàm f là luồng cực đại với val(f) \= 9\.

 D.

Hàm f là luồng cực đại với val(f) \= 11\.

 E.

Hàm f không phải là luồng trong G.

**Câu 284\.**

Cho đồ thị có hướng như hình dưới. Mô tả nào sau đây là đúng?

![Z][image16]

 A.

deg+(1) \= deg+(2)

 B.

deg+(1) \+ deg+(2) \+ deg+(3) \+ deg+(4) \+ deg+(5) \= 8

 C.

Các phương án khác đều sai.  
 

 D.

deg-(4) \= deg-(3)

 E.

deg-(1) \+ deg-(2) \+ deg-(3) \+ deg-(4) \+ deg-(5) \= 14

**Câu 285\.**

18 Cho đơn đồ thị vô hướng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh:  
Đỉnh đầu Đỉnh cuối Đỉnh đầu Đỉnh cuối  
1 2 2 4  
1 3 2 5  
2 3 3 5  
Sử dụng thuật toán DFS tìm cây khung T của G bắt đầu tại đỉnh s \= 3\. Các cạnh của cây khung T theo thứ tự tìm kiếm của DFS là:

 A.

T \= {(3,1), (1,2), (2,4), (3,5)}.

 B.

T \= {(3,1), (3,2), (3,5),(2,4)}.

 C.

T \= {(3,1), (1,2), (2,4), (2,5)}.

 D.

Các phương án khác đều sai.

 E.

T \= {(3,2), (2,1), (2,4),(2,5)}.

**Câu 286\.**

Cho mạng G \= (V,E) gồm 5 đỉnh dưới dạng ma trận trọng số:  
0 0 0 6 6  
0 0 0 0 7  
2 3 0 0 0  
0 0 0 0 7  
0 0 0 0 0  
Chọn phương án đúng trong các phương án dưới đây:

 A.

Luồng cực đại f trên G có giá trị luồng val(f) \= 7\.

 B.

Luồng cực đại f trên G có giá trị luồng val(f) \= 6\.

 C.

Các phương án khác đều sai.

 D.

Luồng cực đại f trên G có giá trị luồng val(f) \= 3\.

 E.

Luồng cực đại f trên G có giá trị luồng val(f) \= 5\.

**Câu 287\.**

29 Cho đơn đồ thị vô hướng có trọng số G \= (V, E) gồm n đỉnh và m cạnh. Xét mô tả thuật toán Kruskal có hiệu chỉnh tìm cây khung có tổng trọng số lớn nhất T và WT của G như sau:

| (1) (2) T= Æ;  WT= 0; k \= 0; (3)  For  (ei Î E){           if ( T È {ei} không chứa chu trình){               T \= T È {ei};                 WT= WT \+ \<Trọng số của ei\>;                    |               k++;               if  (k \= n-1)                       Return (T và WT);                  }         }  (4) Return (\<G không có cây khung\>); |
| :---- | :---- |

Thao tác cần thực hiện trong bước (1) là:

 A.

Sắp xếp m cạnh của G theo thứ tự từ điển e1, …, em.

 B.

Sắp xếp m cạnh của G theo thứ tự giảm của trọng số e1, …, em.

 C.

Sắp xếp m cạnh của G theo thứ tự tăng của trọng số e1, …, em.

 D.

Các phương án khác đều sai.

 E.

Đánh dấu tất cả các cạnh ei V chưa được chọn (VS(ei) \= 0).

**Câu 288\.**

Cho đơn đồ thị có hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 2 | 2 | 3 | 5 |
| 1 | 3 | 3 | 2 | 4 | 4 |
| 1 | 4 | 1 | 4 | 3 | 6 |

Sử dụng thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh s \= 3 đến các đỉnh còn lại của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Không có đường đi từ đỉnh 3 đến đỉnh 2\.

 B.

Các phương án khác đều sai.

 C.

Đường đi ngắn nhất từ đỉnh 3 đến đỉnh 2 là 32 với độ dài d\[2\] \= 5\.

 D.

Đường đi ngắn nhất từ đỉnh 3 đến đỉnh 4 là 314 với độ dài d\[4\] \= 4\.

 E.

Đường đi ngắn nhất từ đỉnh 3 đến đỉnh 1 là 31 với độ dài d\[1\] \= 3\.

**Câu 289\.**

22 Cho đơn đồ thị vô hướng có trọng số G \= (V, E) gồm n đỉnh. Đặt W(T) là tổng trọng số trên các cạnh của cây khung T của G. Cây khung T nhỏ nhất của G là:

 A.

T chứa ít cạnh nhất.

 B.

T bao gồm n-1 cạnh có trọng số nhỏ nhất trong G.

 C.

Các phương án khác đều sai.

 D.

T có W(T) nhỏ nhất.

 E.

T chỉ gồm các cạnh nằm trên đường đi ngắn nhất từ đỉnh 1 đến đỉnh n.

**Câu 290\.**

Cho đồ thị có hướng G \= (V,E) như hình dưới.  
![9k=][image17]  
Chọn phương án đúng trong các phương án:

 

 A.

Các phương án khác đều sai.

 B.

Đồ thị vô hướng nền của G có chứa cạnh (3,4).

 C.

Đồ thị vô hướng nền của G có chứa cạnh (1,3).

 D.

Đồ thị vô hướng nền của G có chứa cạnh (5,4). (Đ)

 E.

Đồ thị vô hướng nền của G có chứa cạnh (3,5).

**Câu 291\.**

Cho đồ thị có hướng G \= (V, E) gồm 5 đỉnh dưới dạng danh sách cạnh:  
Đỉnh đầu Đỉnh cuối Đỉnh đầu Đỉnh cuối  
1 4 3 5  
2 1 4 1  
2 5 4 3  
3 1 5 2  
Nếu biểu diễn G dưới dạng ma trận kề A thì:

 A.

Ma trận A gồm 5 hàng, 5 cột và có cột 2 là (1, 0, 0, 0, 1).

 B.

Ma trận A gồm 5 hàng, 5 cột và có hàng 4 là (1, 0, 0, 0, 0).

 C.

Ma trận A gồm 5 hàng, 5 cột và có hàng 2 là (1, 0, 0, 0, 1).

 D.

Các phương án khác đều sai.

 E.

Ma trận A gồm 5 hàng, 5 cột và có hàng 5 là (0, 1, 1, 0, 0).

**Câu 292\.**

 Đồ thị G \= (V, E) gồm 13 đỉnh được biểu diễn dưới dạng danh sách kề như dưới. Đỉnh nào dưới đây không phải là đỉnh trụ?  
Ke(1)={2, 3, 11}, Ke(2)={1, 4, 6} Ke(7)={6}, Ke(8)={10}, Ke(9)={5}  
Ke(3)={1, 4}, Ke(4)={2, 3, 6} Ke(10)={5, 8}, Ke(11)={1, 12, 13}  
Ke(5)={9, 10}, Ke(6)={2, 4, 7}, Ke(12)={11}, Ke(13)={11}

 A.

Đỉnh 5

 B.

Đỉnh 10

 C.

Đỉnh 11

 D.

 Các phương án khác đều sai.

 E.

Đỉnh 6

**Câu 293\.**

 Xét thuật toán được mô tả dưới đây:

| Euler(s){      Stack \= Æ; Queue \= Æ;      \<Đưa đỉnh s vào Stack\>;      While (Stack ¹ Æ){         \<Lấy x là đỉnh đầu của Stack\>;         if (Ke(x) ¹ Æ){             \<Lấy y là đỉnh đầu tiên của Ke(x)\>;               \<Đưa đỉnh y vào Stack\>;             Ke(x) \= Ke(x)\\{y};        |        Ke(y) \= Ke(y)\\{x};           } else{                  \<Loại bỏ đỉnh x khỏi Stack\>;                 \<Đưa đỉnh y vào Queue\>;             }      }      Return (\<Các đỉnh của Queue theo thứ tự ngược lại\>);  } |
| :---- | :---- |

Hãy chọn phương án đúng trong các phương án sau:

 A.

Thuật toán có thể tìm được chu trình/đường đi Euler bắt đầu tại đỉnh s.

 B.

Thuật toán chỉ có thể tìm được đường đi Euler bắt đầu tại đỉnh s.

 C.

Thuật toán chỉ có thể tìm được chu trình/đường đi Euler bắt đầu tại đỉnh s của đồ thị vô hướng.

 D.

Thuật toán chỉ có thể tìm được chu trình Euler bắt đầu tại đỉnh s.

 E.

Các phương án khác đều sai.

**Câu 294\.**

Cho đơn đồ thị vô hướng G \= (V, E) gồm n đỉnh. Xét mô tả thuật toán sử dụng BFS tìm cây khung T của G bắt đầu tại đỉnh s như sau:

| Bfs(s){     Queue \= Æ; Queue Ü s; VS\[s\] \= 1;     While (Queue ¹ Æ) {           u Ü Queue;           For v Î Ke(u)          if (VS\[v\] \= 0\) {                Queue Ü v; VS(v) \= 1;                 T \= T È (u, v);          } } | Tree\_Bfs(s){      For  v Î V                 VS\[v\] \= 0;      T \= Æ;      Bfs(s);      For v Î V         if (VS\[v\] \= 0\)             Return(\< Không có cây khung\>);      Return (T); } |
| :---- | :---- |

Hãy chọn phương án đúng trong các phương án sau:

 A.

T là cây khung của G vì T chứa ít cạnh nhất của G.

 B.

T là cây khung của G vì T liên thông có n đỉnh và n-1 cạnh.

 C.

T là cây khung của G vì T có n-1 cạnh.

 D.

T là cây khung của G vì T liên thông và có n đỉnh.

**Câu 295\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh và 6 cạnh dưới dạng danh sách cạnh với trọng số:

| Đỉnh đầu | Đỉnh cuối | Trọng số | Đỉnh đầu | Đỉnh cuối | Trọng số |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2 | 7 | 2 | 3 | 6 |
| 1 | 3 | 1 | 2 | 4 | 1 |
| 1 | 4 | 2 | 3 | 4 | 5 |

Sử dụng thuật toán Bellman-Ford tìm đường đi ngắn nhất từ đỉnh s \= 2 đến các đỉnh còn lại của G. Chọn phương án đúng trong các phương án dưới đây:

 A.

Các phương án đưa ra đường đi ngắn nhất và độ dài tương ứng đều đúng.

 B.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 3 là 2413 với độ dài d\[3\] \= 4\.

 C.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 4 là 24 với độ dài d\[4\] \= 1\.

 D.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 1 là 241 với độ dài d\[1\] \= 3\.

 E.

Các phương án khác đều sai.

**Câu 296\.**

Cho đơn đồ thị có trọng số G gồm 4 đỉnh với các trọng số không âm. Kí hiệu d\[i\]\[j\] là độ dài đường đi ngắn nhất từ i đến j và e\[i\]\[j\] là đỉnh trước j trên đường đi ngắn nhất từ i đến j. Sử dụng thuật toán Floyd tìm đường đi ngắn nhất giữa các cặp đỉnh của G nhận được kết quả sau:

| d\[2\]\[1\] \= 5, e\[2\]\[1\] \= 4 | d\[2\]\[2\] \= 0, e\[2\]\[2\] \= 2 | d\[2\]\[3\] \= 2, e\[2\]\[3\] \= 2 | d\[2\]\[4\] \= 4, e\[2\]\[2\] \= 3 |
| :---: | :---: | :---: | :---: |

Chọn phương án đúng trong các phương án dưới đây:

 A.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 3 là 23 với độ dài d\[2\]\[3\] \= 2\.

 B.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 4 là 234 với độ dài d\[2\]\[4\] \= 4\.

 C.

Các phương án khác đều sai.

 D.

Đường đi ngắn nhất từ đỉnh 2 đến đỉnh 1 là 2341 với độ dài d\[2\]\[1\] \= 5\.

 E.

Các phương án đưa ra đường đi ngắn nhất và độ dài tương ứng đều đúng.

**Câu 297\.**

Đồ thị G \= (V, E) gồm 6 đỉnh được biểu diễn dưới dạng danh sách cạnh như bảng dưới. Đồ thị có bao nhiêu cạnh cầu?

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 2 | 3 | 4 |
| 1 | 3 | 4 | 5 |
| 2 | 3 | 4 | 6 |
| 2 | 4 | 5 | 6 |

 A.

 Các phương án khác đều sai.

 B.

1

 C.

3

 D.

4

 E.

2

**Câu 298\.**

Cho đơn đồ thị có hướng G \= (V,E) gồm 5 đỉnh dưới dạng danh sách kề:  
Ke(1) \= {2, 3}, Ke(2) \= {1, 4, 5} Ke(4) \= {1, 3}  
Ke(3) \= {2, 4, 5} Ke(5) \= {1, 2, 3, 4}  
Nếu biểu diễn G dưới dạng ma trận kề A thì:

 A.

Ma trận A gồm 5 hàng, 5 cột và có cột 4 là (1, 0, 0, 0, 1).

 B.

Ma trận A gồm 5 hàng, 5 cột và có hàng 5 là (0, 1, 1, 1, 0).

 C.

Các phương án khác đều sai.

 D.

Ma trận A gồm 5 hàng, 5 cột và có cột 3 là (1, 0, 0, 0, 1).

 E.

Ma trận A gồm 5 hàng, 5 cột và có hàng 2 là (1, 0, 0, 1, 1).

**Câu 299\.**

Cho đơn đồ thị có trọng số G \= (V,E) với các trọng số không âm và một đỉnh s thuộc G. Để tìm đường đi ngắn từ s đến các đỉnh còn lại nên sử dụng thuật toán:

 A.

Dijkstra do thuật toán này có tốc độ tính toán nhanh hơn.

 B.

Bellman-Ford do thuật toán này cài đặt ngắn hơn.

 C.

Các phương án khác đều sai.

 D.

Floyd do thuật toán này có thể phát hiện chu trình âm.

 E.

Bellman-Ford do thuật toán này tổng quát hơn.

**Câu 300\.**

Đơn đồ thị vô hướng G \= (V,E) gồm 6 đỉnh được biểu diễn dưới dạng danh sách kề. Bậc của đỉnh 2 bằng bao nhiêu?  
Ke(1) \= {2, 3}, Ke(2) \= {1, 3, 4, 5}  
Ke(5) \= {2, 4, 6}  
Ke(3) \= {1, 2, 4}, Ke(4) \= {2, 3, 5, 6}  
Ke(6) \= {4, 5}

 A.

7

 B.

5

 C.

Các phương án khác đều sai.

 D.

4 (Đ)

 E.

6

**Câu 301\.**

 Trong các mô tả dưới đây, mô tả nào là chính xác?  
1\. Nếu DFS(u) \= V, với đồ thị vô hướng, ta chưa thể kết luận đồ thị liên thông  
2\. Nếu BFS(u) \= V, với đồ thị vô hướng, ta chưa thể kết luận đồ thị liên thông  
3\. Nếu DFS(u) \= V, với đồ thị có hướng, ta có thể kết luận tồn tại đường đi từ tất cả các đỉnh đến đỉnh u  
4\. Nếu BFS(u) \= V, với đồ thị có hướng, ta có thể kết luận tồn tại đường đi từ tất cả các đỉnh đến đỉnh u

 A.

 Các phương án khác đều sai.

 B.

2

 C.

1, 2

 D.

3, 4

 E.

3

**Câu 302\.**

Cho đơn đồ thị vô hướng G gồm 5 đỉnh và 6 cạnh dưới dạng danh sách cạnh:

| Đỉnh đầu | Đỉnh cuối | Đỉnh đầu | Đỉnh cuối |
| :---: | :---: | :---: | :---: |
| 1 | 3 | 2 | 5 |
| 1 | 4 | 3 | 4 |
| 2 | 4 | 4 | 5 |

Sử dụng thuật toán tìm chu trình Euler E của G bắt đầu tại đỉnh s \= 4\. Các đỉnh xuất hiện trong E theo thứ tự khi thực hiện thuật toán là:

 A.

Các phương án khác đều sai.

 B.

E \= {4, 1, 3, 4, 5, 2, 4}.

 C.

E \= {4, 2, 5, 4, 1, 3, 4}.

 D.

E \= {4, 3, 1, 4, 2, 5, 4}.

 E.

E \= {4, 1, 3, 4, 2, 5, 4}.

**Câu 303\.**

Cho đơn đồ thị vô hướng có trọng số G gồm 4 đỉnh dạng ma trận trọng số:  
0 7 8 1  
7 0 2 3  
8 2 0 6  
1 3 6 0  
Sử dụng thuật toán Dijkstra tìm đường đi ngắn nhất từ đỉnh s \= 1 đến các đỉnh còn lại của G. Đỉnh t có đường đi ngắn nhất từ s đến t có giá trị lớn nhất là:

 A.

Đỉnh t \= 3\.

 B.

Đỉnh t \= 2\.

 C.

Các phương án khác đều đúng.

 D.

Các phương án khác đều sai.

 E.

Đỉnh t \= 4\.

**Câu 304\.**

Cho đồ thị có hướng G \= (V, E). Điều kiện cần và đủ để G là đồ thị nửa Euler nhưng không phải là Euler:

 A.

G liên thông yếu và có hai đỉnh với bán bậc vào và bán bậc ra chênh lệch nhau 1\.

 B.

G liên thông yếu và có hai đỉnh với bán bậc vào và bán bậc ra là lẻ..

 C.

G liên thông mạnh và có hai đỉnh với bán bậc vào và bán bậc ra chênh lệch nhau 1\.

 D.

G liên thông yếu và có hai đỉnh với bán bậc vào và bán bậc ra khác nhau.

 E.

Các phương án khác đều sai.

**Câu 305\.**

Cần bổ sung nội dung thực hiện của bước (2.4) trong mô tả thuật toán Floyd tìm đường đi ngắn nhất giữa các cặp đỉnh của đơn đồ thị có trọng số G biểu diễn dưới dạng ma trận trọng số a\[\]\[\]:

| *(1) Khởi tạo:       (1.1) d\[i\]\[j\]= a\[i\]\[j\];       (1.2) e\[i\]\[j\]= i; (2) Thực hiện 3 vòng lặp lồng nhau:       (2.1) for  k Î G do       (2.2)       for i Î G do       (2.3)              for  j Î G do        (2.4)                 (3) Xuất kết quả:        (3.1) Nếu có đỉnh u mà d\[u\]\[u\] \< 0 thì xuất thông báo G chứa chu trình âm;       (3.2) Ngược lại xuất d\[i\]\[j\]  và e\[i\]\[j\].* |
| :---- |

Chọn phương án đúng trong các phương án dưới đây:

 A.

if (d\[k\]\[j\]\> d\[k\]\[i\] \+ d\[i\]\[j\]) {  
e\[k\]\[j\]= e\[k\]\[i\]; d\[k\]\[j\]= d\[k\]\[i\] \+ d\[i\]\[j\]; }

 B.

if (d\[j\]\[k\]\> d\[j\]\[i\] \+ d\[i\]\[k\]) {  
e\[j\]\[k\]= e\[k\]\[i\]; d\[j\]\[k\]= d\[j\]\[i\] \+ d\[i\]\[k\]; }

 C.

if (d\[i\]\[j\]\> d\[i\]\[k\] \+ d\[k\]\[j\]) {  
e\[i\]\[j\]= e\[k\]\[j\]; d\[i\]\[j\]= d\[i\]\[k\] \+ d\[k\]\[j\]; }

 D.

if (d\[i\]\[k\]\> d\[i\]\[j\] \+ d\[j\]\[k\]) {  
e\[i\]\[k\]= e\[k\]\[j\]; d\[i\]\[k\]= d\[i\]\[j\] \+ d\[j\]\[k\]; }

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,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>

[image4]: <data:image/png;base64,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>

[image5]: <data:image/png;base64,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>

[image6]: <data:image/png;base64,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>

[image7]: <data:image/png;base64,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>

[image8]: <data:image/png;base64,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>

[image9]: <data:image/png;base64,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>

[image10]: <data:image/png;base64,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>

[image11]: <data:image/png;base64,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>

[image12]: <data:image/png;base64,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>

[image13]: <data:image/png;base64,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>

[image14]: <data:image/png;base64,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>

[image15]: <data:image/png;base64,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>

[image16]: <data:image/png;base64,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>

[image17]: <data:image/png;base64,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>