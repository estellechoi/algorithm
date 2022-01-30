'use strict'
export type BinaryHeapData = number | string // type alias

interface IMinHeap<T> {
    insert(node: T): void
    getParent(index: number): T | null
    getLeftChild(index: number): T | null
    getRightChild(index: number): T | null
    getMin(): T | null
    getSize(): number
}

class MinHeap<T> implements IMinHeap<T> {
    private heap: T[]

    constructor() {
        this.heap = []
    }

    insert(node: T) {
        this.heap.push(node)
        this.heapifyUp(this.heap.length - 1) 
    }

    private heapifyUp(index: number) {
        const parentIndex = this.getParentIndex(index)

        if (parentIndex < 0) return

        if (this.heap[parentIndex] > this.heap[index]) {
            // swap
            const parent = this.heap[parentIndex]
            this.heap[parentIndex] = this.heap[index]
            this.heap[index] = parent
            // recursion
            this.heapifyUp(parentIndex)
        }
    }

    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2)
    }

    getParent(index: number): T | null {
        const parentIndex = this.getParentIndex(index)
        return parentIndex >= 0 ? this.heap[parentIndex] : null
    }

    getLeftChild(index: number): T | null {
        const childIndex = (2 * index) + 1
        return this.heap[childIndex] ?? null
    }

    getRightChild(index: number): T | null {
        const childIndex = (2 * index) + 2
        return this.heap[childIndex] ?? null
    }

    getMin(): T | null {
        return this.heap[0] ?? null
    }

    getSize(): number {
        return this.heap.length
    }
}