# Algorithms & Complexity

1. Time Complexity, Space Complexity

<br />

## 1. Time Complexity, Space Complexity

### 1-1. Complexity

Complexity, 복잡도라는 것은 알고리즘이 얼마나 효율적인가를 표현하는 방식입니다. 알고리즘을 평가할 때는 1) 알고리즘의 런타임과 환경설정에 무관하고, 2) 입력의 갯수와 상관관계가 있고, 3) 두 알고리즘을 아주 명확하게 구분할 수 있어야하는데, 시간복잡도와 공간복잡도가 이 조건들을 만족하기 때문에 알고리즘을 평가하는데 널리 사용되고 있습니다.

> Generally, there is always more than one way to solve a problem in computer science with different algorithms. Therefore, it is highly required to use a method to compare the solutions in order to judge which one is more optimal. The method must be:
> Independent of the machine and its configuration, on which the algorithm is running on.
> Shows a direct correlation with the number of inputs.
> Can distinguish two algorithms clearly without ambiguity.
>- [Time Complexity and Space Complexity | GeeksForGeeks](https://www.geeksforgeeks.org/time-complexity-and-space-complexity/)

<br />

보통 알고리즘의 복잡도를 얘기할 때는 최악의 경우를 가[Big O Notation](https://en.wikipedia.org/wiki/Big_O_notation)이 사용됩니다.정합니다. 예를 들어 배열을 돌며 특정 값을 찾을 때는 그 값을 가장 마지막 Loop에서 찾거나, 원하는 값이 존재하지 않는 시나리오를 가정하고 복잡도를 계산하게 됩니다. 이 복잡도는 [Big O Notation](https://en.wikipedia.org/wiki/Big_O_notation)을 사용해서 표기하는데, 입력의 갯수 `N`이 증가할 수록 필요한 시간과 공간은 얼마나 빠르게 늘어날 것인가를 표시하는 방법입니다.

> In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows. - Wikipedia

- `O(1)`: 입력 갯수와 상관없이 항상 같은 횟수의 연산이 일어난다
- `O(logN)`: 입력 갯수가 늘어날 수록, 연산의 횟수는 점점 느린 속도로 늘어난다
- `O(N)`: 입력 갯수와 비례하여 연산의 횟수가 늘어난다
- `O(N²)`: 입력 갯수가 늘어날 수록, 연산의 횟수는 그 제곱만큼 점점 빠른 속도로 늘어난다

<br />

### 1-2. Time Complexity

시간복잡도는 알고리즘이 실행될 때 얼마나 오랜 시간이 소요되는가를 나타내는 지표입니다. 여기서 말하는 시간은 실제 소요되는 물리적 시간이 아닌, 연산이 일어나는 횟수입니다. 보통 연산이 1회 동작하는데 걸리는 시간을 상수 `C`로 나타내기 때문에, 시간복잡도는 `N` 개의 입력이 주어졌을 때 연산이 몇 번 일어날 것이냐를 계산해서 나타냅니다. Big O를 사용해서 표기한다면, 입력 갯수인 `N`이 증가할 때 필요한 연산의 횟수는 `N`과 어떤 상관관계를 갖고 늘어날 것인지를 계산해보면 됩니다. 흔히 Loop in Loop 케이스라면 시간 복잡도는 `O(N²)`이 됩니다.

<br />

시간복잡도를 제대로 이해하기 위해 아래의 예제를 정리해보려고 합니다. 이 Loop in Loop 형태의 알고리즘은 얼핏보면 시간복잡도를 `O(N * logN)`으로 착각하기 쉽습니다.

```typescript
let count: number = 0
for (let i = N; i > 0; i /= 2) {
    for (let j = 0; j < i; j += 1) {
        count += 1
    }
}
```

하지만 실제로 `count += 1` 연산이 몇 번 수행되는가를 유심히 생각해보면, 연산의 총 횟수는 `N + (N / 2) + (N / 4) + + 1 = 2N`이 되고, 따라서 시간복잡도는 `O(N)` 입니다.

`i = N`일 때, `N`

`i = N / 2`일 때, `N / 2`

`i = N / 4`일 때, `N / 4`

...

<br />

### 1-3. Space Complexity

공간복잡도는 알고리즘이 실행될 때 얼마나 많은 양의 리소스가 필요한가를 나타냅니다. 예를 들어 어떤 알고리즘이 실행될 때 주어진 입력의 갯수(배열의 길이)만큼 반복문을 돌면서 빈 배열에 값들을 쌓아간다면, 인자로 받은 배열과, 길이가 최대 `N`인 배열 변수 1 개, `for` Loop의 `i` 변수가 필요하고, 이 알고리즘의 공간복잡도는 `N + N + 1 = 2N + 1`, Big O로는 `O(N)`으로 표기할 수 있습니다.

```typescript
function copy<T>(arr: T[]): T[] {
    const result: T[] = []

    for (let i = 0; i < arr.length; i += 1) {
        result.push(arr[i])
    }

    return result
}
```

<br />

#### Auxiliary Space

[Auxiliary Space](https://en.wikipedia.org/wiki/Space_complexity#Auxiliary_space_complexity)는 알고리즘이 실행될 때 추가적으로 사용되는 자원의 양을 의미하는데, 보통 공간복잡도를 얘기할 때 입력 갯수 `N`을 기준으로 하는 것과 달리 Auxiliary Space는 입력 갯수와 무관하게 사용되는 자원을 측정하고 표시하는 방법입니다. 위의 예제에서는 배열 `result`가 사용하는 공간을 Auxiliary Space로 볼 수 있고, Auxiliary Space의 복잡도는 `O(N)`입니다. 공간복잡도는 정성들여 말하면, 알고리즘이 입력을 처리하기 위해 직접적으로 사용하는 공간 + Auxiliary Space 입니다.

> Auxiliary Space is the extra space or temporary space used by an algorithm. - [What does ‘Space Complexity’ mean? | GeeksForGeeks](https://www.geeksforgeeks.org/g-fact-86/)

<br />

---

### References

- [Time Complexity and Space Complexity | GeeksForGeeks](https://www.geeksforgeeks.org/time-complexity-and-space-complexity/)
- [What does ‘Space Complexity’ mean? | GeeksForGeeks](https://www.geeksforgeeks.org/g-fact-86/)
