const getHash = async (msg: string): Promise<ArrayBuffer> => {
    const data = new TextEncoder().encode(msg)
    const hash = await crypto.subtle.digest('SHA-256', data)
    return hash
}