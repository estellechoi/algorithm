function gcdLoop(a: number, b: number): number {
    if (a === 0) return b
    if (b === 0) return a
    if (a === b) return a
    if (a === 1 || b === 1) return 1

    let big: number = a > b ? a : b
    let small: number = a > b ? b : a

    while (big !== small) {
        const rest = big - small
        if (rest < small) {
            big = small
            small = rest
        }  else {
            big = rest
        }
    }
    return small
}

function gcd(a: number, b: number): number {
    if (b === 0) return a
    return gcd(b, a % b)
}

type GCDFunction = (a: number, b: number) => number

function findGCD(arr: number[], gcd: GCDFunction): number {
    let result: number = arr[0]

    arr.some((item, index) => {
        if (index === 0) return false
        result = gcd(item, result)
        return result === 1        
    })

    return result
}

function reduceGCD(arr: number[], gcd: GCDFunction): number {
    return arr.reduce(gcd)
}

console.log(findGCD([3, 7], gcdLoop))
console.log(findGCD([3, 7], gcd))
console.log(reduceGCD([3, 7], gcd))

