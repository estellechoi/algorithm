const getHash = async (msg: string): Promise<string> => {
    const data = new TextEncoder().encode(msg) // // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-256', data) // returns Promise<ArrayBuffer> of 256 bits (= 32 bytes)
    const hashArray = Array.from(new Uint8Array(hashBuffer)) // get an array of 8-bit int
    const hash = hashArray.map(h => h.toString(10)).join('')
    return hash
}

const getIndex = async (msg: string, size: number): Promise<number> => {
    return parseInt(await getHash(msg)) % size
}