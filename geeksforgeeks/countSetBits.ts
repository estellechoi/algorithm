// https://www.geeksforgeeks.org/count-set-bits-in-an-integer/

// 1. Simple method
function countSetBits1(n: number): number {
    let count = 0

    while (n > 0) { // stop if n doesn't have 1 anymore
        count += n & 1 // check if the rightmost bit is 1 or not! add 1 if it is
        n = n >> 1 // shift 1 bit to the right
    }

    return count
}

// 2. Recursion
// Time Complexity: O(log n)
function countSetBits2(n: number): number {
    if (n <= 0) 
        return 0

    return (n & 1) + countSetBits2(n >> 1)
}

// 3. Brian Kernighan’s Algorithm
// Time Complexity: O(logn)

// Subtracting 1 from a decimal number flips all the bits after the rightmost set bit(which is 1) including the rightmost set bit. 
// for example : 
// 10 in binary is 00001010
// 9 in binary is 00001001 
// 8 in binary is 00001000 
// 7 in binary is 00000111 
// The beauty of this solution is the number of times it loops is equal to the number of set bits in a given integer.

function countSetBits3(n: number): number {
    let count = 0

    while (n > 0) {
        n &= (n - 1) // assign the value back to n
        count += 1
    }

    return count
}

// 4. Recursion + Brian Kernighan’s Algorithm
function countSetBits4(n: number): number {
    if (n <= 0)
        return 0

    return 1 + countSetBits4(n & (n - 1))
}



