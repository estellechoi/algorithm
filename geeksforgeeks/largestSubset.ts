// https://www.geeksforgeeks.org/find-the-size-of-largest-subset-with-positive-bitwise-and/

function largestSubsetSize(arr: number[]): number {
    let bitCounts = new Array(32).fill(0) // each bit position of each number from array

    for (let i = 0; i < arr.length; i++) {
        let x = 31 // from the rightmost bit position

        while (arr[i] > 0) {
            if ((arr[i] & 1) === 1) { // check if the rightmost bit is set bit or not
                bitCounts[x] += 1
            }

            arr[i] >>= 1 // shift 1 bit to the right
            x -= 1
        }
    }

    let max = 0

    for (let i = 0; i < 32; i++) {
        max = Math.max(max, bitCounts[i])
    }

    return max
}