# Data Structures & Search

1. Stack & Queue
2. Recursion
3. Array & String
4. Linked List
5. Tree
6. Graph
7. DFS & BFS
8. Hash Table (Map)

<br />

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

### 3-1. Dynamic Array

Array에 관해서라면, Fixed Array와 Dynamic Array를 구분할 수 있어야합니다. JavaScript에서 Array 객체로 구현된 Array는 기본적으로 Dynamic Array 입니다. Array를 초기화하는 방법에 따라 최초 길이가 다를 수는 있지만, 언제든 `push()`, `pop()`과 같은 Array 메소드들을 사용하여 길이를 변경할 수 있습니다. 참고로 `Array()` 생성자를 사용하면 지정된 길이를 가진 빈 Array가 할당되고, `[]`와 같이 리터럴 방식으로 초기화하면 실제 원소들로 채워진 만큼의 길이를 가진 Array가 할당됩니다.

```typescript
// array via constructor
const arr: string[] = new Array<string>(5) // array with 5 empty slots created

// array literal
const dynamicArr: string[] = []
```

<br />

실제로 위와 같이 선언한 것들을 콘솔에 찍어보면 다음과 같이 차이점을 확인할 수 있습니다.

```typescript
// array via constructor
console.log(arr.length) // 5
console.log(arr) // [empty × 5]

// array literal
console.log(dynamicArr.length) // 0
console.log(dynamicArr) // []
```

<br />

이번에는 각각 `push()` 메소드를 사용하여 원소를 추가해보겠습니다. 생성자를 사용해서 만든 `arr`의 경우, 이미 할당된 5 개의 빈 공간들을 침범하지 않고 추가 공간을 만들어 6 번째 원소로서 추가합니다.

```typescript
// array via constructor
arr.push('Yujin') // [empty × 5, 'Yujin']
console.log(arr.length) // 6

// array literal
dynamicArr.push('Yujin') // ['Yujin']
console.log(dynamicArr.length) // 1
```

<br />

### 3-2. Fixed Array

위에서 정리해본 것처럼 JavaScript에서 `Array` 객체만으로는 길이가 고정된 배열을 만들 수 없습니다. 원하는 길이의 빈 공간이 할당된 배열을 만들 수는 있지만 `push()` 메소드를 사용하여 언제든 길이를 늘릴 수 있기 때문입니다. JavaScript로 길이가 고정된 배열을 구현하려면 [`Object.seal()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) 메소드를 사용하면 됩니다.

```typescript
Object.seal(arr)

arr.push('Bomin') // Uncaught TypeError: Cannot add property 6, object is not extensible
arr.pop() // Uncaught TypeError: Cannot delete property '5' of [object Array]
```

<br />

### 3-3. String

String(문자열)은 글자들로 이루어진 Array입니다. 그래서 거의 모든 언어에서 Array 객체에서 제공하는 메소드를 String 객체에서도 거의 동일하게 제공합니다. String에 대해 신경쓸 부분은, 사용하는 언어에서 String이 Mutable한지 Immutable한지를 구분해야 한다는 것입니다. 예를 들어 JavaScript에서 String은 Immutable 한데, 이게 무슨 말이나면요. 다음과 같이 Index를 사용해서 String의 한 글자를 Read 할 수는 있지만, Write 할 수 없다는 뜻입니다. TypeScript를 사용하신다면 진작에 `Index signature in type 'String' only permits reading.ts(2542)`라는 에러 메시지를 보실 수 있습니다!

```typescript
let str = 'hello world'
str[5] = ','
console.log(str[5]) // ' '

str = 'hello,world'
console.log(str) // 'hello,world'
```

<br />

### 3-🍎. What's next

- [Leetcode array overview](https://leetcode.com/explore/featured/card/fun-with-arrays/)
- [Leetcode array & string overview](https://leetcode.com/explore/learn/card/array-and-string/)
- [Leetcode array problems](https://leetcode.com/tag/array/)
- [Leetcode string problems](https://leetcode.com/tag/string/)

<br />

## 4. Linked List

### 4-1. Linked List vs Array

Linked List는 마치 Array처럼 동작하지만, 매우 다릅니다. Array는 Index로 구분할 수 있는 원소들의 논리적 순서와 각 원소가 메모리 상에서 갖게되는 주소의 순서가 일치합니다. 반면 Linked List의 노드들은 논리적 순서와 물리적 순서가 다른데, 메모리 상에서는 연속된 주소가 할당되지 않고 제각각 존재하지만 서로에 대한 연결정보를 통해 논리적인 순서를 갖습니다. 이렇듯 서로 다른 메커니즘때문에 다음과 같은 차이점들이 있습니다.

<br />

#### 탐색

- Array는 Index를 통해 특정 원소에 Random Access가 가능하다. 원소들이 연속된 메모리 주소를 갖기 때문. 시간복잡도는 `O(1)`.
- Linked List에서 특정 노드에 접근하려면 첫 번째 원소부터 순차적으로 검사해야만 가능하다. 최악의 경우 시간복잡도는 `O(N)`.

<br />

#### 삽입/삭제

- Array에 삽입/삭제가 발생하면 시간복잡도는 `O(N)`이다. 각 원소를이 차례로 밀리며 메모리의 연속된 주소상에 있도록 조정되기 때문.
- Linked List에 삽입/삭제가 발생해도, 최악의 경우 시간복잡도는 `O(N)`이 되는데 이는 삽입/삭제하려는 노드를 탐색하는 과정이 수반되기 때문.

<br />

### 4-2. Linked List in JavaScript

JavaScript는 Linked List를 네이티브 객체로 제공하지 않기 때문에 [다음과 같이](./linkedList.ts) 직접 구현해서 사용할 수 있겠습니다. `Node` 클래스는 자기 자신과 다음 노드에 대한 정보를 갖고, `LinkedList` 클래스는 가장 첫번 째 노드에 대한 정보와 List의 길이 정보를 갖도록하는 식으로 구현해볼 수 있습니다. [Implementation of LinkedList in Javascript | GeeksForGeeks](https://www.geeksforgeeks.org/implementation-linkedlist-javascript/) 문서를 참고했습니다.

```typescript
class LNode<T> {
    node: LNode<T>
    next: LNode<T> | null

    constructor(node: LNode<T>) {
        this.node = node
        this.next = null
    }
}

interface ILinkedList<T> {
    head: LNode<T> | null
    size: number
    addNew(node: LNode<T>): void
    insertAt(node: LNode<T>, index: number): boolean
    removeFrom(index: number): LNode<T> | null
    removeElement(node: LNode<T>): LNode<T> | null
    indexOf(node: LNode<T>): number
    isEmpty(): boolean
}

class LinkedList<T> implements ILinkedList<T> {
    head: LNode<T> | null
    size: number

    constructor() {
        this.head = null
        this.size = 0
    }

    // methods...
}
```

<br />

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

DFT는 Tree를 Depth First, 깊이 우선 순회하는 방법으로 보통 다음의 3가지로 나누어 이야기합니다. DFT는 DFS와 비슷하게 형제 노드보다 자식 노드를 우선으로 순회하기 때문에 코드로 DFT를 구현할 때는 Stack 자료구조가 사용되고, Stack은 Recursion으로 대체할 수 있으니 Recursion을 사용해서 구현하기도 합니다.

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

Tree의 깊이보다 너비가 클 때는 BFT가 더 나은 선택일 수 있습니다. DFT와 달리, 자식 노드보다는 형제 노드를 우선적으로 순회합니다. DFT가 Stack을 사용한다면, BFT는 Queue를 사용합니다.

<br />

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

### 6-2. Adjacency List

[Adjacency List](https://en.wikipedia.org/wiki/Adjacency_list)는 Matrix와 달리 List 관점에서 Graph 자료구조를 바라보는 방법으로, 두 노드간에 아무런 관계가 없다면 데이터를 저장하지 않습니다.

```typescript
const graph: number[][][] = [
    [[1, 5], [2, 7]],
    [[0, 5]],
    [[0, 7]],
]
```

만약 노드 `0`과 노드 `2`의 연결 관계를 알고싶다면, 다음과 같이 인접하는 노드 정보를 순회하면서 확인해야 합니다. 직관적인 확인은 어렵지만, 실제로 연결된 정보만 저장하기 때문에 Matrix에 비해 메모리 사용에 이점이 있습니다. 따라서 특정 노드와 연결된 모든 노드들을 순회하면서 검사해야하는 경우라면, Matrix보다 메모리와 순회를 절약할 수 있는 List가 더 적합합니다.

```typescript
const node1: number[][] = graph[0] // [[1, 5], [2, 7]]
const filtered = node1.filter(item => item[0] === 2) // [[2, 7]] → 7
```

<br />

Adjacency List는 다음과 같이 노드들의 인접 여부만 나타낼 수도 있습니다.

```typescript
const graph: number[][] = [
    [1, 2],
    [0],
    [0],
]
```

<br />

### 6-3. Matrix vs List

상황에 따라 Matrix와 List 형태 중 더 나은 것을 선택해서 사용하면 됩니다. 각각의 장단점을 정리해보면,

- Matrix: 모든 노드와 노드의 관계를 나타내기 위해 메모리를 절약할 수 없지만, 특정한 두 노드의 관계를 알고싶다면 한 번에 접근할 수 있음

- List: 실제 연결이 있는 경우에만 연결 정보를 담으면 되므로 메모리 절약, 특정한 두 노드의 관계를 알기 위해서는 인접 노드들을 순회하면서 찾아야하므로 느릴 수 있음

<br />

### 6-🍎. What's next

- [Leetcode graph problems](https://leetcode.com/tag/graph/)

<br />

## 7. DFS & BFS

DFS/BFS는 탐색 알고리즘 중에서도 자주 언급되는 것들인데, 탐색 방향에 있어 각각 Depth/Breadth(깊이/너비) 기준으로 First Search(우선 탐색)하는 알고리즘입니다. 다음 그래프를 `1` 노드부터 DFS, BFS 해보면서 정리해보려고 합니다. Pre-order 이고, 같은 레벨의 노드 중에서는 숫자가 작은 노드부터 순회합니다.

![Graph](./../assets/graph-search.png)

<br />

### 7-1. DFS

DFS, 깊이우선탐색. 위의 그래프를 DFS하면 데이터를 이렇게 추출할 수 있습니다. 일단 하나의 자식 노드를 탐색하기 시작하면, 해당 자식이 갖고있는 하위 Tree를 모두 탐색한 후에 그 자식의 형제 노드를 탐색하기 시작합니다.

```
1 → 2 → 7 → 6 → 8 → 3 → 4 → 5
```

DFS를 코드로 구현할 때는 Stack을 사용하는데요, 루트에서 인접한 노드들을 Stack에 쌓아두고, 그 중 한 노드의 인접한 노드들을 다시 순회하며 Stack에 쌓고, 결국 가장 하위의 노드까지 순회한 후 Stack을 비우며 형제 노드들을 역으로 탐색하겠다는 아이디어입니다. Stack은 함수 호출 스택을 사용하는 Recursion으로 대체할 수 있습니다. (Stack ↔︎ Recursion)

<br />

#### Stack

```typescript
function dfs(graph: number[][], startNode: number) {
    const stack: number[] = []
    const visited: Set<number> = new Set()

    visited.add(startNode)
    stack.push(startNode)

    while (stack.length > 0) {
        // 가장 마지막에 쌓인 노드부터 추출하고
        const node = stack.pop()!

        // 방금 꺼낸 노드의 모든 인접 노드를 검사하자
        const adjs = graph[node]
        for (let adj of adjs) {
            if (!visited.has(adj)) {
                stack.push(adj) // 인접 노드들을 Stack 위에 쌓자
                visited.add(adj) // 중복 검사를 피하기 위한 방문 처리
            }
        }
    }
}

dfs(graph, 1)
```

<br />

#### Recursion

```typescript
function dfs(graph: number[][], node: number, visited: Set<number>) {
    visited.add(node) // 방문 처리

    // 모든 인접 노드를 검사하자
    const adjs = graph[node]
    for (let adj of adjs) {
        // 인접 노드를 핸들링하는 함수를 호출 스택에 쌓자
        if (!visited.has(adj)) dfs(graph, adj, visited)
    }  
}

dfs(graph, 1, new Set())
```

<br />

### 7-2. BFS

BFS는 너비우선탐색으로, 위의 동일한 Graph를 BFS하면 다음 순서로 데이터를 추출할 수 있습니다.

```
1 → 2 → 3 → 8 → 7 → 4 → 5 → 6
```

DFS가 Stack/호출스택을 사용한다면, BFS는 Queue를 사용합니다. 너비 우선으로 탐색하기 때문에, 루트에서 시작해서 FiFo, 먼저 발견한 순서대로 추출하겠다는 거죠!

<br />

#### Queue

```typescript
function bfs(graph: number[][], startNode: number) {
    const queue: number[] = []
    const visited: Set = new Set()

    visited.add(startNode)
    queue.push(startNode)

    while (queue.length > 0) {
        // 가장 먼저 넣었던 노드부터 빼내고
        const node = queue.shift()

        // 이 노드의 인접 노드들을 Queue의 뒤에 추가해준다
        const adjs = graph[node]
        for (let adj of adjs) {
            if (!visited.has(adj)) {
                queue.push(adj)
                visited.add(adj) // 중복 검사를 피하기 위한 방문 처리
            }
        }
    }
}

bfs(graph, 1)
```

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
- [What is the difference between traversal and search? | Quora](https://www.quora.com/What-is-the-difference-between-traversal-and-search)
- [Implementation of LinkedList in Javascript | GeeksForGeeks](https://www.geeksforgeeks.org/implementation-linkedlist-javascript/)
- [Backend Engineer Interview - xlffm3](https://github.com/xlffm3/backend-engineer-interview/blob/main/data-structure/data-structure.md#q6-deque--arraydeque)