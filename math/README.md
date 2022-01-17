# Mathematics

1. 최대공약수(GCD/HCF)
2. 최소공배수(LCM)
3. 순열(Permutation)
4. 조합(Combination)
5. 멱집합(Power Set)

## 1. 최대공약수(GCD/HCF)

### 1-1. Brute Force

가장 단순하게, 두 수가 동시에 나누어지는 모든 수를 구하고, 그 중 가장 큰 수를 반환합니다.

```typescript
// 소수(prime): 1과 자신의 수 외에는 나눌 수 없는 숫자
function primeFactors(num: number): number[] {
    const factors = []
    let left = num

    while (left % 2 === 0) {
        left /= 2
        if (!factors.includes(2)) factors.push(2)
    }

    // 이 지점에서 num은 무조건 홀수, 따라서 skip 1, 2, 4, 6, ...
    for (let i = 3; i <= Math.floor(Math.sqrt(left)); i += 2) {
        while (left % i === 0) {
            left /= i
            if (!factors.includes(i)) factors.push(i)
        }
    }

    // 남은 수가 2보다 큰 소수인가
    if (left > 2) {
        factors.push(left)
    }

    return left
}

// 배열 Intersection
function intersectedArray(arr1: Array<T>, arr2: Array<T>): Array<T> {
    return arr1.filter(item => arr2.includes(item))
}

// 최대공약수
function gcd(a: number, b: number): number {
    const intersection = intersectedArray(primeFactors(a), primeFactors(b))
    return intersection.length ? intersection[intersection.length - 1] : 1
}
```

### 1-2. Euclidean

최대공약수를 구하는 효율적인 방법으로 유명한 [유클리드 알고리즘(Euclidean Algorithm)](https://en.wikipedia.org/wiki/Euclidean_algorithm)이 있습니다. 이 알고리즘은 다음의 수학적 사실에 기반해서 최대공약수를 찾습니다.

- _큰 수에서 작은 수를 빼도, 최대공약수는 바뀌지 않는다_

#### 예시

1. 120과 50의 최대공약수는 10
2. (120 - 50)과 50의 최대공약수는 10
3. (120 - 50 - 50)과 50의 최대공약수는 10
4. (120 - 50 - 50)과 (50 - 20)의 최대공약수는 10
5. (120 - 50 - 50)과 (50 - 20 - 20)의 최대공약수는 10
6. (120 - 50 - 50 - 10)과 (50 - 20 - 20)의 최대공약수는 10
7. 0과 10이 남는다

이제 이 알고리즘은 다음 전략을 취합니다. 특정 조건을 만족할 때까지 반복하므로 Recursion을 사용할 수 있겠죠.

- 큰 수에서 작은 수 빼기를 반복한다
- 더 이상 뺄 수 없게 되면 Exit (작은 수가 `0`이 될 때)
- 남아있는 수가 최대공약수이다 (빼기의 결과가 0이므로 두 수는 같았을 것이다)

```typescript
function gcd(a: number, b: number): number {
    if (a === 0) return b
    if (b === 0) return a
    return a > b ? gcd(a - b, b) : gcd(a, b - a) // a === b 여도 상관없다
}
```

### 1-3. Euclidean & Modulo

최고의 방법은 유클리드 알고리즘에서 [Modulo(나머지 연산)](https://ko.wikipedia.org/wiki/%EB%82%98%EB%A8%B8%EC%A7%80)을 사용하는 것입니다. 뺄 수 있을 때까지 반복해서 빼는 작업을 Modulo로 대체해서 반복 횟수를 줄일 수 있기 때문입니다. [Euclidean algorithms (Basic and Extended) | GeeksForGeeks](https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/) 문서를 참고했습니다.

```typescript
function gcd(a: number, b: number): number {
    if (b === 0) return a
    return gcd(b, a % b)
}
```

위와 같이 리팩토링하고, `gcd(17, 5)`롤 호출하면 호출 스택에 다음과 같이 쌓입니다!

```typescript
gcd(17, 5)
gcd(5, 2)
gcd(2, 1)
gcd(1, 0)
```

---

### References

- [Program to find GCD or HCF of two numbers | GeeksForGeeks](https://www.geeksforgeeks.org/c-program-find-gcd-hcf-two-numbers/)