function permute<T>(arr: T[]): T[][] {
    const ps: T[][] = [] // permutations

    function backtrack(arr: T[], p: T[]) {
        if (p.length === arr.length) {
            ps.push([...p]) // 복사
            return
        }

        arr.forEach(item => {
            if (!p.includes(item)) {
                p.push(item) // item을 고정시키고
                backtrack(arr, p) // 모든 가능한 순열을 시도해보자 (Backtrack)
                p.pop() // 그 다음 item에 대해 Backtrack 하기위해 Backtrack이 끝난 item은 뺀다 
            }
        })
    }

    backtrack(arr, [])
    return ps
}

function permuteR<T>(arr: T[], r: number): T[][] {
    const ps: T[][] = [] // permutations

    function backtrack(arr: T[], p: T[]) {
        if (p.length === r) {
            ps.push([...p]) // 복사
            return
        }

        arr.forEach(item => {
            if (!p.includes(item)) {
                p.push(item) // item을 고정시키고
                backtrack(arr, p) // 모든 가능한 순열을 시도해보자 (Backtrack)
                p.pop() // 그 다음 item에 대해 Backtrack 하기위해 Backtrack이 끝난 item은 뺀다 
            }
        })
    }

    backtrack(arr, [])
    return ps
}