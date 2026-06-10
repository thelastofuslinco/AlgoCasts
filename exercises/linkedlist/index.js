// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;

    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return null;
    this.head = this.head.next;
  }

  removeLast() {
    const isLast = this.size() === 0 || this.size() === 1;

    if (isLast) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = prev.next;

    while (node) {
      const last = node.next === null;

      if (last) {
        prev.next = null;
      }

      prev = node;
      node = node.next;
    }
  }

  insertLast(record) {
    const last = this.getLast();
    const node = new Node(record);

    if (last) {
      last.next = node;
    } else {
      this.head = node;
    }
  }

  getAt(index) {
    if (!this.head) return null;
    let count = 0;
    let node = this.head;

    while (node) {
      if (count === index) return node;

      count++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
    }

    const prev = this.getAt(index - 1);

    if (!prev || !prev.next) {
      return;
    }

    prev.next = prev.next.next;
  }

  insertAt(record, index) {
    if (index === 0) {
      const node = new Node(record, this.head);
      this.head = node;
      return;
    }

    const prev = this.getAt(index - 1) || this.getLast();

    if (!prev) {
      return;
    }

    prev.next = new Node(record, prev.next);
  }

  forEach(fn) {
    let node = this.head;
    let count = 0;

    while (node) {
      fn(node, count);
      node = node.next;
      count++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
