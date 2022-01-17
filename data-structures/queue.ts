'use strict'

module.exports = class Queue<T> {
    private queue: Array<T>

    constructor(...items: Array<T>) {
        this.queue = [...items]
    }

    public enqueue(item: T) {
        return this.queue.unshift(item)
    }

    public dequeue() {
        return this.queue.shift()
    }
}