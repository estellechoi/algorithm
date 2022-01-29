'use strict'

interface IGraph<T> {
    addVertex(v: T): T | null
    addEdge(v: T, w: T): void
    dfs(startV: T): T[]
    dfsRecur(v: T, visited: Set<T>, result: T[]): T[]
    bfs(startV: T): T[]
    getSize(): number
    getAdjList(): Map<T, T[]>
}

class Graph<T> implements IGraph<T> {
    private size: number
    private adjList: Map<T, T[]>

    constructor(size: number) {
        this.size = size
        this.adjList = new Map()
    }

    addVertex(v: T): T | null {
        if (this.adjList.has(v)) {
            return null
        }
        
        this.adjList.set(v, [])
        return v
    }

    addEdge(v: T, w: T) {
        this.adjList.get(v)?.push(w)
        this.adjList.get(w)?.push(v)    
    }

    dfs(startV: T): T[] {
        if (!this.adjList.has(startV)) return []

        const result: T[] = []
        const stack: T[] = []
        const visited: Set<T> = new Set()
    
        visited.add(startV)
        stack.push(startV)
    
        while (stack.length > 0) {
            // 가장 마지막에 쌓인 노드부터 추출하고
            const node = stack.pop()!
            result.push(node)
    
            // 방금 꺼낸 노드의 모든 인접 노드를 검사하자
            const adjs = this.adjList.get(node)!
            for (let adj of adjs) {
                if (!visited.has(adj)) {
                    stack.push(adj) // 인접 노드들을 Stack 위에 쌓자
                    visited.add(adj) // 중복 검사를 피하기 위한 방문 처리
                }
            }
        }

        return result
    }

    dfsRecur(v: T, visited: Set<T> = new Set(), result: T[] = []): T[] {
        if (!this.adjList.has(v)) return result

        visited.add(v) // 방문 처리
        result.push(v)

        // 모든 인접 노드를 검사하자
        const adjs = this.adjList.get(v)!
        for (let adj of adjs) {
            // 인접 노드를 핸들링하는 함수를 호출 스택에 쌓자
            if (!visited.has(adj)) {
                this.dfsRecur(adj, visited, result)
            }
        }  

        return result
    }

    bfs(startV: T): T[] {
        if (!this.adjList.has(startV)) return []

        const result: T[] = []
        const queue: T[] = []
        const visited: Set<T> = new Set()
    
        visited.add(startV)
        queue.push(startV)
    
        while (queue.length > 0) {
            // 가장 먼저 넣었던 노드부터 빼내고
            const node = queue.shift()!
            result.push(node)
    
            // 이 노드의 인접 노드들을 Queue의 뒤에 추가해준다
            const adjs = this.adjList.get(node)!
            for (let adj of adjs) {
                if (!visited.has(adj)) {
                    queue.push(adj)
                    visited.add(adj) // 중복 검사를 피하기 위한 방문 처리
                }
            }
        }

        return result
    }

    getSize(): number {
        return this.size
    }

    getAdjList(): Map<T, T[]> {
        return this.adjList
    }
}
