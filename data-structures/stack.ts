'use strict'

class Stack<T> {
  private items: Array<T>

  constructor() {
    this.items = []
  }

  public getTop() {
    return this.items.length ? this.items[this.items.length - 1] : null
  }

  public isEmpty() {
    return this.items.length === 0
  }

  public size() {
    return this.items.length
  }

  public push(item: T) {
    this.items.push(item)
  }

  public pop(): T | null {
    return this.items.pop() ?? null
  }
}
