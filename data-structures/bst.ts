'use strict'

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
    root: TNode<T> | null
    insert(data: T): TNode<T>
    insertAt(node: TNode<T>, newNode: TNode<T>): void
    remove(node: TNode<T>): TNode<T> | null
}

class BinarySearchTree<T> implements IBinarySearchTree<T> {
    root: TNode<T> | null

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

    insertAt(node: TNode<T>, newNode: TNode<T>) {
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

    remove(node: TNode<T>): TNode<T> | null {
        return null
    }

    // wip ...

}