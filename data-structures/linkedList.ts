'use strict'

class LNode<T> {
    node: LNode<T>
    next: LNode<T> | null

    constructor(node: LNode<T>) {
        this.node = node
        this.next = null
    }
}

interface ILinkedList<T> {
    head: LNode<T> | null
    size: number
    addNew(node: LNode<T>): void
    insertAt(node: LNode<T>, index: number): boolean
    removeFrom(index: number): LNode<T> | null
    removeElement(node: LNode<T>): LNode<T> | null
    indexOf(node: LNode<T>): number
    isEmpty(): boolean
}

class LinkedList<T> implements ILinkedList<T> {
    head: LNode<T> | null
    size: number

    constructor() {
        this.head = null
        this.size = 0
    }

    addNew(node: LNode<T>) {
        const newNode = new LNode<T>(node)
        let currNode: LNode<T>

        if (this.head === null) {
            this.head = newNode
        } else {
            // 가장 마지막 노드를 찾을 때까지 처음부터 순회
            currNode = this.head
            while(currNode.next) {
                currNode = currNode.next
            }

            // 노드 추가
            currNode.next = newNode
        }

        this.size += 1
    }

    insertAt(node: LNode<T>, index: number): boolean {
        if (index < 0 || index > this.size) {
            return false
        }

        const newNode = new LNode<T>(node)

        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
            this.size += 1
            return true
        }

        // 해당 Index에 도달할 때까지 첫 번째 노드부터 순차 탐색
        let currNode: LNode<T> | null, prevNode: LNode<T> | null
        currNode = this.head!

        let i:number = 0
        while(i < index) {
            i += 1
            prevNode = currNode
            currNode = currNode!.next
        }

        newNode.next = currNode
        prevNode!.next = newNode

        return true
    }

    removeFrom(index: number): LNode<T> | null {
        if (index < 0 || index > this.size || this.head === null) {
            return null
        }

        let currNode: LNode<T> | null, prevNode: LNode<T> | null
        
        currNode = this.head

        if (index === 0) {
            this.head = currNode.next
            this.size -= 1
            return currNode
        }

        // 해당 Index에 도달할 때까지 첫 번째 노드부터 순차 탐색
        let i: number = 0
        while(i < index) {
            i += 1
            prevNode = currNode
            currNode = currNode!.next
        }

        prevNode!.next = currNode!.next
        this.size -= 1
        return currNode
    }

    removeElement(node: LNode<T>): LNode<T> | null {
        if (this.size === 0) return null

        let currNode: LNode<T> | null, prevNode: LNode<T> | null
        
        currNode = this.head!
        prevNode = null

        while(currNode !== null) {
            if (currNode === node) {
                if (prevNode === null) {
                    this.head = currNode.next
                } else {
                    prevNode.next = currNode.next
                }
                this.size -= 1
                return currNode
            }

            prevNode = currNode
            currNode = currNode.next
        }

        return null
    }

    indexOf(node: LNode<T>): number {
        const NO_INDEX = -1

        if (this.size === 0) return NO_INDEX

        let currNode = this.head
        let index: number = 0
        while (currNode !== null) {
            if (currNode === node){
                return index
            }

            index += 1
            currNode = currNode.next
        }

        return NO_INDEX
    }

    isEmpty(): boolean {
        return this.size === 0
    }
}