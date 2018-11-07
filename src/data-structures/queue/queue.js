import LinkedList from '../linked-list/LinkedList';
// 链表实现队列
export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmptey() {
    return !this.linkedList.tail;
  }

  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    const removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
