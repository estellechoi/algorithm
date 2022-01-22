
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

console.log(findGCD([2, 4, 6], gcd))
console.log(reduceGCD([2, 4, 6], gcd))

