// https://www.geeksforgeeks.org/count-set-bits-in-an-integer/

// 1. Simple method
function countSetBits1(n: number) {
    let count = 0

    while (n > 0) { // stop if n doesn't have 1 anymore
        count += n & 1 // check if the rightmost bit is 1 or not! add 1 if it is
        n = n >> 1 // shift 1 bit to the right
    }

    return count
}

// 2. Resursion
function countSetBits2(n: number): number {
    if (n === 0) 
        return 0

    return (n & 1) + countSetBits2(n >> 1)
}

// 3. Brian Kernighan’s Algorithm

