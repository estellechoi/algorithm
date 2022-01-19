# Data Structures

1. Stack & Queue
2. Recursion
3. Array & String
4. Linked List
5. Tree
6. Graph
7. DFS & BFS
8. Hash Table (Map)

## 1. Stack & Queue

Stack과 Queue는 Linear 자료구조로, 데이터를 넣고/빼는 방식을 제한함으로써 데이터를 관리합니다. 같은 Linear 자료구조인 [Array](https://leetcode.com/explore/learn/card/array-and-string/)가 Index를 사용해서 랜덤하게 데이터를 넣고 빼는 반면, 가장 마지막에 넣은 데이터부터 빼도록 제한된 것이 Stack, 가장 먼저 넣은 데이터부터 빼도록 제한된 것이 Queue 자료구조입니다. 이 두 자료구조를 사용할 때 체크할 점은 Overflow/Underflow 여부입니다. 할당된 크기가 다 찼는데 데이터를 넣으려고하면 Overflow, 아무것도 없는 빈 상태에서 빼내려고하면 Underflow입니다.

<br />

### 1-1. Stack

LiFo 자료구조입니다. Last in, 나중에 들어온게, First out, 먼저 나가는 방식으로 데이터를 다룹니다. JavaScript에서는 흔히 `Array` 객체의 `push()` & `pop()` 메소드를 사용해서 Stack 자료구조를 구현할 수 있습니다. JavaScript 런타임의 [호출 스택](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)이 대표적인 Stack 자료구조로, 런타임에서 가장 나중에 발견된(쌓인) 함수부터 차례로 실행되죠.

```typescript
const arr: string[] = []

arr.push('A') // ['A']
arr.push('B') // ['A', 'B']
arr.push('C') // ['A', 'B', 'C']

const popedItem = arr.pop() // ['A', 'B']
console.log(popedItem) // 'C'
```

만약 Size 제한이 있는 Stack을 구현한다면, `new Array(arrayLength)` 생성자를 사용해서 크기가 있는 배열을 사용할 수 있겠습니다.

```typescript
const stack: string[] = new Array(10)
```

<br />

### 1-2. Queue

FiFo 자료구조입니다. First in, 먼저 들어온게, First out, 먼저 나가는 방식으로 데이터를 다룹니다. JavaScript 런타임의 [메시지 큐](https://developer.mozilla.org/ko/docs/Web/JavaScript/EventLoop#%ED%81%90)가 대표적으로 Queue 자료구조를 사용합니다. JavaScript `Array` 객체의 `unshift()` & `pop()` 메소드를 사용해서 간단히 구현할 수 있고, 역방향 큐를 구현하려면 `push()` & `shift()` 조합을 사용하면 됩니다.

```typescript
const arr: string[] = []

arr.unshift('A') // ['A']
arr.unshift('B') // ['B', 'A']
arr.unshift('C') // ['C', 'B', 'A']

const popedItem = arr.pop() // ['C', 'B']
console.log(popedItem) // 'A'
```

<br />

### 1-🍎. What's next

- [Leetcode stack & queue overview](https://leetcode.com/explore/learn/card/queue-stack/)
- [Leetcode stack problems](https://leetcode.com/tag/stack/)
- [Leetcode queue problems](https://leetcode.com/tag/queue/)

<br />

## 2. Recursion

### 2-1. Recursion vs Loop

자기 자신을 호출하는 함수를 재귀함수(Reculsive Function), 이 기법을 재귀(Recursion)이라고 합니다. 반복해서 자기 자신을 호출하기 때문에 [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) Loop와 비슷하다고 생각하기 쉽지만, 이 둘은 작동 방식이 크게 다릅니다. Loop와 Recursion을 각각 사용하여 [Factorial(`n!`)](https://en.wikipedia.org/wiki/Factorial) 함수를 작성해보면 차이를 더 잘 볼 수 있습니다.

```typescript
// Loop
function factorial(num: number): number {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result *= num
    }
    return result
}
```

```typescript
// Recursion
function factorial(num: number): number {
    if (num <= 1) return 1
    return num * factorial(num - 1)
}
```

다음과 같은 이유로 Recursion은 [FP](https://en.wikipedia.org/wiki/Functional_programming)에서도 유용합니다.

- Loop는 얼마나 반복할지를 정해야 하지만, Recursion은 반복 횟수에는 관심이 없고 Exit 조건이 중요합니다. 이 사실은 [깊이를 알기 어려운 Tree 자료구조를 탐색할 때도 유용](https://medium.com/weekly-webtips/simplifying-functional-programming-with-recursion-javascript-aa7007f4b159)한데, 길이나 깊이를 알 필요 없이 Exit 조건만 명확하면 되기 때문입니다.

- Recursion은 사람에게 친숙한 [점화식](https://ko.wikipedia.org/wiki/%EC%A0%90%ED%99%94%EC%8B%9D) 형태로 코드를 작성하게 해줍니다: _n! = n * (n-1)!_

<br />

### 2-2. Stack → Recursion

JavaScript에서 호출되는 모든 함수는 하나의 호출 스택에 쌓입니다. 자기 자신을 반복해서 호출하는 재귀함수 역시 반복해서 호출 스택에 쌓이므로, Recursion은 Stack 자료구조를 사용합니다. 역으로 생각하면, Stack 자료구조를 사용하는 알고리즘은 Recursion으로도 해결할 수 있습니다.

<br />

### 2-🍎. What's next

- [Leetcode recursion overview](https://leetcode.com/explore/learn/card/recursion-i/)
- [Leetcode recursion problems](https://leetcode.com/tag/recursion/)

<br />

## 3. Array & String

### 3-🍎. What's next

- [Leetcode array overview](https://leetcode.com/explore/featured/card/fun-with-arrays/)
- [Leetcode array & string overview](https://leetcode.com/explore/learn/card/array-and-string/)
- [Leetcode array problems](https://leetcode.com/tag/array/)
- [Leetcode string problems](https://leetcode.com/tag/string/)

<br />

## 4. Linked List

### 4-🍎. What's next

- [Leetcode linked list overview](https://leetcode.com/explore/learn/card/linked-list/)
- [Leetcode linked list problems](https://leetcode.com/tag/linked-list/)

<br />

## 5. Tree

Tree 자료구는 [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)을 생각하면 됩니다. 루트 노드인 `html`을 시작으로 자식 노드들이 계층 형태로 파생되는 것이 DOM의 형태이죠. DOM은 Tree 자료구조를 사용합니다.

<br />

### 5-1. BST(Binary Search Tree)

[BST, 이진탐색트리](https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/)는 최대 2개의 자식 노드만 허용하는 Tree로, Tree에 데이터를 넣을 때 다음 규칙을 따르는 것이 특징입니다. 나름의 정렬 방식인건데, 이 방식 덕분에 BST의 가장 작은 값은 가장 왼쪽 끝 노드에, 가장 큰 값은 가장 오른쪽 끝 노드에서 바로 찾을 수 있습니다.

- 왼쪽 자식 트리는 부모 노드보다 작은 값만 포함합니다.
- 오른쪽 자식 트리는 부모 노드보다 큰 값만 포함합니다.
- 중복된 값을 허용하지 않습니다.

<br />

![BST](./../assets/bst.png)

<br />

사진출처: [Data Structure(2)(Tree, Hash table, Graph, Binary Search Tree) - Hwanseog Choi](https://medium.com/@hwanseogchoi/data-structure-2-tree-hash-table-graph-binary-search-tree-d5fdfa6afc5e)

<br />

### 5-2. DFT(Depth-First Traversal)

DFT는 Tree를 Vertically 순회하는 방법으로 보통 다음의 3가지로 나누어 이야기합니다. 코드에서는 Recursion 사용이 강조됩니다.

#### Pre-order

위에서 생성한 Tree를 Pre-order 방법으로 순회하면 다음과 같이 데이터를 추출할 수 있습니다. 부모 → 왼쪽 → 오른쪽 자식 순으로 데이터를 추출하는데, Tree를 순회하면서 부모 노드를 만나면 즉시 추출하는 방식입니다.

```
43 → 10 → 9 → 12 → 11 → 79 → 54 → 50 → 90
```

#### In-order

In-order 방법은 왼쪽 → 부모 → 오른쪽 자식 순으로 데이터를 추출합니다. 왼쪽 Tree를 먼저 추출한 후 오른쪽 Tree로 넘어가기 전에 부모 노드를 추출합니다. In-order 순회 방법은 BST에서 찰떡인데, 아래와 같이 추출 과정에서 데이터가 자동으로 정렬되기 때문입니다.

```
9 → 10 → 11 → 12 → 43 → 50 → 54 → 79 → 90
```

#### Post-order

왼쪽 → 오른쪽 → 부모 순으로 데이터를 추출합니다.

```
9 → 11 → 12 → 10 → 50 → 54 → 90 → 79 → 43
```

<br />

### 5-3. BFT(Breadth-First Traversal)

Tree의 깊이보다 너비가 클 때는 BFT가 더 나은 선택일 수 있습니다. 이때 Queue를 사용하고, DFT와 다르게 Recursion 보다는 Loop 사용이 효율적입니다.

### 5-🍎. What's next

- [Leetcode binary tree overview](https://leetcode.com/explore/learn/card/data-structure-tree/)
- [Leetcode binary tree problems](https://leetcode.com/tag/binary-tree/)

<br />

## 6. Graph

Graph 자료구조는 여러 관점에서 설명할 수 있는데, 가장 간단하게 Tree 자료구조에서 "부모 노드는 하나만 가질 수 있다"는 규칙을 제외하면 Graph 자료구조가 됩니다. _many-to-many_ 관계인 데이터들을 담아야할 때 Graph 자료구조가 사용됩니다.

![Node](./../assets/node.png)

Graph에서 다음 개념들을 알아둬야 합니다. 위의 Tree 섹션에서 언급했던 용어들이고, 동일한 개념입니다.

- 노드 : Graph의 각 지점
- 엣지 : 노드와 노드를 연결하는 선으로, 노드간 관계를 나타냄
- 인접 : 두 노드가 엣지를 통해 직접 연결되어 있으면, 두 노드는 인접(Adjacent)하다고 함

<br />

### 6-1. Adjacency Matrix

Graph 자료구조를 코드에서 다루기 위해서는 명확한 표현 방법이 필요한데, 그 중 하나가 [Adjacency Matrix](https://en.wikipedia.org/wiki/Adjacency_matrix) 입니다. 노드와 노드의 관계를 각각 `(x, y)` 형태의 Matrix(행렬)로 나타낼 수 있다는 아이디어로, 아래와 같이 `0` 노드와 `1` 노드를 잇는 엣지에 `5`라고 번호를 매기면 `(0, 1) = 5`로 노드의 연결 관계를 표현합니다. 같은 방식으로 `1` 노드와 `2` 노드는 연결되어있지 않으므로 `(1, 2) = null`로 표현할 수 있겠죠.

![Graph](./../assets/graph.png)

<br />

위 Graph의 모든 노드와 노드의 연결 관계를 Matrix로 나타내면 다음과 같습니다.

![Adjacency Matrix](./../assets/graph-matrix.png)

<br />

코드에서 Matrix는 흔히 이차원배열을 사용해서 표현합니다. 만약 노드 `0`과 노드 `2`의 연결 관계를 알고싶다면, `graph[0][2]`로 접근하면 되기 때문에, 두 노드의 관계를 간편하게 확인하고 싶을 때는 Matrix를 사용하는 것이 최고의 방법입니다.

```typescript
type Nullable<T> = T | null;

const graph: Nullable<number>[][] = [
    [0, 5, 7],
    [5, 0, null],
    [7, null, 0],
]
```

```typescript
console.log(graph[0][2]) // 7
```

<br />

### 6-2. Adjancency List

[Adjancency List](https://en.wikipedia.org/wiki/Adjacency_list)는 Matrix와 달리 List 관점에서 Graph 자료구조를 바라보는 방법으로, 두 노드간에 아무런 관계가 없다면 데이터를 저장하지 않습니다.

```typescript
const graph: number[][][] = [
    [[1, 5], [2, 7]],
    [[0, 5]],
    [[0, 7]],
]
```

만약 노드 `1`과 노드 `2`의 연결 관계를 알고싶다면, 다음과 같이 인접하는 노드 정보를 순회하면서 확인해야 합니다. 직관적인 확인은 어렵지만, 실제로 연결된 정보만 저장하기 때문에 Matrix에 비해 메모리 사용에 이점이 있습니다. 따라서 특정 노드와 연결된 모든 노드들을 순회하면서 검사해야하는 경우라면, Matrix보다 메모리와 순회를 절약할 수 있는 List가 더 적합합니다.

```typescript
const node1: number[][] = graph[1] // [[0, 5]]
const filtered = node1.filter(item => item[0] === 2)
```

<br />

### 6-🍎. What's next

- [Leetcode graph problems](https://leetcode.com/tag/graph/)

<br />

## 7. DFS & BFS

DFS/BFS는 탐색 알고리즘 중에서도 자주 언급되는 것들인데, 탐색 방향에 있어 각각 Depth/Breadth 기준으로 First Search(우선 탐색)하는 알고리즘입니다. 다음 그래프를 `1` 노드부터 DFS, BFS 해보면서 정리해보려고 합니다. 같은 레벨의 노드 중에서는 숫자가 작은 노드부터 순회합니다.

![Graph](./../assets/graph-search.png)

<br />

### 7-1. DFS

위의 그래프를 DFS하면 데이터를 이렇게 추출할 수 있습니다. 일단 하나의 자식 노드를 탐색하기 시작하면, 해당 자식이 갖고있는 하위 Tree를 모두 탐색한 후에 그 다음 형제 노드의 탐색을 시작합니다.

```
1 → 2 → 7 → 6 → 8 → 3 → 4 → 5
```

DFS를 코드로 구현할 때는 Stack을 사용하는데요, 루트에서 순회를 시작하여 마주치는 노드들을 Stack에 쌓아두고, 그 중 한 노드에 인접한 노드들을 다시 순회하며 Stack에 쌓고, 결국 가장 하위의 노드까지 순회한 후 Stack을 비우며 형제 노드들을 같은 방식으로 탐색하겠다는 아이디어입니다. Stack은 함수 호출 스택을 사용하는 Recursion으로 대체할 수 있습니다. (Stack ↔︎ Recursion)

<br />

#### Stack

```typescript
function dfs(graph: number[][], startNode: number) {
    const stack: number[] = []
    const visited: Set = new Set()

    visited.add(startNode)
    stack.push(startNode)

    while (stack.length > 0) {
        const node = stack.pop() // 역순으로 다시 올라가자
        for (let adj of graph[node]) {
            if (!visited.has(adj)) {
                stack.push(adj) // 자식들을 스택에 넣어주자 (큰 수 부터 넣어서, 작은 수부터 꺼내서 깊이 탐색을 해야함)
                visited.add(adj) // 방문 처리
            }
        }
    }
}

dfs(graph, 1)
```

#### Recursion

```typescript
function dfsAux(graph: number[][], adj: number, visited: boolean[]) {
    visited[adj] = true

    for (let adj of graph[adj]) {
        if (!visited[adj]) dfsAux(graph, adj, visited)
    }
}

function dfs(graph: number[][], startNode: number) {
    let visited: boolean[] = []
    dfsAux(graph, startNode, visited)
}
```

### 7-2. BFS

<br />

## 8. Hash Table (Map)

<br />

---

### References

- [Data Structures in JavaScript For Frontend Software Engineers - Thon Ly](https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c)
- [6 JavaScript data structures you must know - Amanda Fawcett](https://www.educative.io/blog/javascript-data-structures)
- [Linked list | Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [Big O notation | Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation)
- [What is a Linked List? Linked List vs Array - YOON MI KIM](https://medium.com/@yk392/what-is-a-linked-list-linked-list-vs-array-92f0db4015cc)
- [Simplifying Functional Programming with Recursion (Javascript) - Meghan Hein](https://medium.com/weekly-webtips/simplifying-functional-programming-with-recursion-javascript-aa7007f4b159)
- [Depth-First Search in TypeScript](https://www.devmaking.com/learn/algorithms/depth-first-search/typescript/)