# Mathematics

1. 최대공약수(GCD/HCF)
2. 최소공배수(LCM)
3. 순열(Permutation)
4. 조합(Combination)
5. 멱집합(Power Set)

<br />

## 1. 최대공약수(GCD/HCF)

### 1-1. Brute Force

가장 단순한 방법으로, 최대공약수가 나올 수 있는 범위 내에서 반복문을 돌며 두 수가 동시에 나누어지는 가장 큰 값을 찾아 반환합니다.

```typescript
function gcd(a: number, b: number): number {
    if (a === 0) return b
    if (b === 0) return a
    if (a === b) return a

    const smaller = a > b ? b : a
    
    for (let i = smaller; i >= 1; i -= 1) {
        if (a % i === 0 && b % i === 00) return i
    }
}
```

<br />

### 1-2. Euclidean

최대공약수를 구하는 효율적인 방법으로 유명한 [유클리드 알고리즘(Euclidean Algorithm)](https://en.wikipedia.org/wiki/Euclidean_algorithm)은 다음의 수학적 사실에 기반해서 최대공약수를 찾습니다: _큰 수에서 작은 수를 빼도, 최대공약수는 바뀌지 않는다_

<br />

예를 들어 유클리드에 따르면, 다음과 같이 큰 수에서 작은 수를 빼도 두 수의 최대공약수는 같게 됩니다.

`120`과 `50`의 최대공약수는 `10`
`70`과 `50`의 최대공약수는 `10`
`20`과 `50`의 최대공약수는 `10`
`20`과 `30`의 최대공약수는 `10`
`20`과 `10`의 최대공약수는 `10`
`10`과 `10`의 최대공약수는 `10`

<br />

따라서 두 수 `a`, `b`의 최대공약수를 구하려면, 유클리드 알고리즘을 사용하여 다음과 같이 사고할 수 있겠죠. 반복횟수는 정해져있지 않지만 Exit 조건이 명확하므로 Recursion을 사용할 수 있습니다.

- 큰 수에서 작은 수 빼기를 반복한다
- 더 이상 뺄 수 없게 되면 Exit (작은 수가 `0`이 될 때)
- 남아있는 수가 최대공약수이다 (빼기의 결과가 0이므로 두 수는 같았을 것이다)

```typescript
function gcd(a: number, b: number): number {
    if (a === 0) return b
    if (b === 0) return a
    if (a === b) return a
    return a > b ? gcd(a - b, b) : gcd(a, b - a)
}
```

<br />

### 1-3. Euclidean & Modulo

최고의 방법은 유클리드 알고리즘에서 [Modulo(나머지 연산)](https://ko.wikipedia.org/wiki/%EB%82%98%EB%A8%B8%EC%A7%80)을 사용하는 것입니다. 뺄 수 있을 때까지 반복해서 빼는 작업을 Modulo로 대체해서 반복 횟수를 줄일 수 있기 때문입니다. [Euclidean algorithms (Basic and Extended) | GeeksForGeeks](https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/) 문서를 참고했습니다.

```typescript
function gcd(a: number, b: number): number {
    if (b === 0) return a
    return gcd(b, a % b)
}
```

위와 같이 리팩토링하고, `gcd(17, 5)`롤 호출하면 호출 스택에는 다음 순서대로 호출이 쌓이고, 가장 마지막에 반환되는 `1`을 얻게됩니다.

```typescript
gcd(17, 5)
gcd(5, 2)
gcd(2, 1)
gcd(1, 0) // 1
```

<br />

#### 시간복잡도

최악의 경우 시간복잡도는 `O(log(max(a,b)))`입니다. 나머지 연산을 역으로 생각해보면 최악의 경우 호출 스택은 이렇게 될건데, `a`, `b` 값을 추적해보면 [피보나치 수열](https://en.wikipedia.org/wiki/Fibonacci_number)이 되는 것을 확인할 수 있습니다. 그렇다면, 최악의 경우, `max(a, b)` 값이 증가할 수록 피보나치 수열에 따라 더 많은 단계를 건너뛸 수 있으니 호출 스택에 쌓이게 될 함수들이 증가하는 속도는 `max(a, b)`의 속도에 반비례하게 됩니다.

```typescript
...
gcd(13, 8)
gcd(8, 5)
gcd(5, 3)
gcd(3, 2)
gcd(2, 1)
gcd(1, 0)
```

> The time complexity for the above algorithm is O(log(max(a,b))) the derivation for this is obtained from the analysis of the worst-case scenario. What we do is we ask what are the 2 least numbers that take 1 step, those would be (1,1). If we want to increase the number of steps to 2 while keeping the numbers as low as possible as we can take the numbers to be (1,2). Similarly, for 3 steps, the numbers would be (2,3), 4 would be (3,5), 5 would be (5,8). So we can notice a pattern here, for the nth step the numbers would be (fib(n),fib(n+1)).  So the worst-case time complexity would be O(n) where a>= fib(n) and b>= fib(n+1).
> Now Fibonacci series is an exponentially growing series where the ratio of nth/(n-1)th term approaches (sqrt(5)-1)/2 which is also called the golden ratio. So we can see that the time complexity of the algorithm increases linearly as the terms grow exponentially hence the time complexity would be log(max(a,b)). - [Program to find GCD or HCF of two numbers | GeeksForGeeks](https://www.geeksforgeeks.org/c-program-find-gcd-hcf-two-numbers/)

<br />

---

### References

- [Program to find GCD or HCF of two numbers | GeeksForGeeks](https://www.geeksforgeeks.org/c-program-find-gcd-hcf-two-numbers/)