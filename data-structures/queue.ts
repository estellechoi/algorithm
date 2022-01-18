// Circular Queue
'use strict'

class Queue<T> {
    private queue: Array<T>
    private size: number

    constructor(size: number) {
        this.queue = []
        this.size = size
    }

    enqueue(item: T): T | null {
        if (this.isFull()) return null
            
        this.queue.unshift(item)
        return item
    }

    dequeue(): T | null {
        return this.queue.pop() ?? null
    }

    isFull(): boolean {
        return this.queue.length === this.size
    }
}