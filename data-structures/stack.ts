'use strict'

class Stack<T> {
  private stack: Array<T>
  private size: number

  constructor(size: number) {
    this.stack = []
    this.size = size
  }

  push(item: T): T | null {
    if (this.isFull()) return null

    this.stack.push(item)
    return item
  }

  pop(): T | null {
    return this.stack.pop() ?? null
  }

  isFull(): boolean {
    return this.stack.length === this.size
  }
}
