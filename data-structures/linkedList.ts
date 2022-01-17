// 배열은 처음이나 중간 지점에 데이터를 추가하거나 삭제하려면 모든 요소를 이동시켜야 하지만 
// 링크드 리스트는 참조(링크)만 변경하면 되므로 데이터의 추가나 삭제가 빈번한 경우에 사용된다.
'use strict'
export type Node<T> = {
    value: T
    next: Node<T> | null
}

interface ILinkedList<T> {
    getByIndex(index: number): T | null
    addToHead(value: T) : void
    addToTail(value: T): void
    addAtIndex(index: number, value: T): void
    deleteAtIndex(index: number): void
    size: number
}

class LinkedList<T> implements ILinkedList<T> {
    private head: Node<T> | null
    private _size: number

    constructor() {
        this.head = null
        this._size = 0
    }

    public get size() {
        return this._size
    }

    private getNodeByIndex(index: number): Node<T> | null {
        if (index < 0 || index >= this.size) return null

        let current = this.head
        let i = 0
        while (i < index) {
            current = current!.next
            i += 1
        }

        return current
    }

    public getByIndex(index: number): T | null {
        const current = this.getNodeByIndex(index)
        return current ? current.value : null
    }

    public addToHead(value: T) {
        this.head = {
            value,
            next: this.head
        }
        this._size += 1
    }

    public addToTail(value: T) {
        if (this.size === 0) 
            this.addToHead(value)
        else {
            const lastNode = this.getNodeByIndex(this.size - 1)!
            lastNode.next = { value, next: null }
        }

        this._size += 1
    }

    public addAtIndex(index: number, value: T) {
        if (index < 0 || index >= this.size) return

        if (index === 0) {
            this.addToHead(value)
        } else {
            const prevNode = this.getNodeByIndex(index - 1)!
            prevNode.next = { value, next: prevNode.next }    
        }

        this._size += 1
    }

    public deleteAtIndex(index: number) {
        if (index < 0 || index >= this.size) return

        if (index === 0) {
            this.head = this.head!.next
        } else {
            const prevNode = this.getNodeByIndex(index - 1)!
            prevNode.next = prevNode.next!.next    
        }

        this._size+= 1
    }
}