'use strict'

export type BSTData = number | string

class TNode<T> {
    data: T
    left: TNode<T> | null
    right: TNode<T> | null

    constructor(data: T) {
        this.data = data
        this.left = null
        this.right = null
    }
}

interface IBinarySearchTree<T> {
    // root: TNode<T> | null
    insert(data: T): TNode<T>
    remove(data: T): TNode<T> | null
    traverseInorder(node: TNode<T> | null, result: T[]): T[]
    traversePreorder(node: TNode<T> | null, result: T[]): T[]
    traversePostorder(node: TNode<T> | null, result: T[]): T[]
    searchNode(node: TNode<T> | null, data: T): TNode<T> | null
    getRootNode(): TNode<T> | null
}

class BinarySearchTree<T> implements IBinarySearchTree<T> {
    private root: TNode<T> | null

    constructor() {
        this.root = null
    }

    insert(data: T): TNode<T> {
        const newNode = new TNode(data)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertAt(this.root, newNode)
        }
        return newNode
    }

    private insertAt(node: TNode<T>, newNode: TNode<T>) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertAt(node.left, newNode)
            }

            return
        }

        if (node.right === null) {
            node.right = newNode
        } else {
            this.insertAt(node.right, newNode)
        }
    }

    remove(date: T): TNode<T> | null {
        // re-initialize root as the tree's been updated
        // start search from root node
        this.root = this.removeNode(this.root, date)
        return this.root
    }

    private removeNode(node: TNode<T> | null, data: T): TNode<T> | null {
        if (node === null) {
            return null
        }

        if (data < node.data) {
            node.left = this.removeNode(node.left, data)
            return node
        }

        if (data > node.data) {
            node.right = this.removeNode(node.right, data)
            return node
        }

        // leaf node
        if (node.left === null && node.right === null) {
            node = null
            return node
        }

        // node with one child
        if (node.left === null) {
            node = node.right
            return node
        }

        // node with one child
        if (node.right === null) {
            node = node.left
            return node
        }

        // node with two children
        // 1. find the node with minimum value in its right subtree
        // 2. replace this node with the minimum valued node
        // 3. remove the minimum valued node from the tree
        const aux = this.findMinNode(node.right)!
        node.data = aux.data
        node.right = this.removeNode(node.right, aux.data)
        return node
    }

    private findMinNode(node: TNode<T>): TNode<T> | null {
        if (node.left === null) return node
        return this.findMinNode(node.left)
    }

    traverseInorder(node: TNode<T> | null = this.root, result: T[] = []): T[] {
        if (node !== null) {
            result = this.traverseInorder(node.left, result)
            result.push(node.data)
            result = this.traverseInorder(node.right, result)
        }
        return result
    }

    traversePreorder(node: TNode<T> | null = this.root, result: T[] = []): T[] {
        if (node !== null) {
            result.push(node.data)
            result = this.traversePreorder(node.left, result)
            result = this.traversePreorder(node.right, result)
        }
        return result
    }

    traversePostorder(node: TNode<T> | null = this.root, result: T[] = []): T[] {
        if (node !== null) {
            result = this.traversePostorder(node.left, result)
            result = this.traversePostorder(node.right, result)
            result.push(node.data)
        }
        return result
    }

    searchNode(node: TNode<T> | null = this.root, data: T): TNode<T> | null {
        if (node === null) return null

        if (data < node.data) {
            return this.searchNode(node.left, data)
        }

        if (data > node.data) {
            return this.searchNode(node.right, data)
        }

        return node
    }

    getRootNode(): TNode<T> | null {
        return this.root
    }
}