// https://www.geeksforgeeks.org/number-of-steps-required-to-convert-a-binary-number-to-one/

// bad
function stepsToConvertToZero(S: string): number {
    let deci = parseInt(S, 2)
    let count = 0

    while(deci > 0) {
        count += 1
        if (deci % 2 === 1) deci -= 1
        else deci /= 2
    }

    return count
}