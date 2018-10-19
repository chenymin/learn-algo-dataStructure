import DoublyLinkedListNode from './DoublyLinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class DoublyLinkedList {
  constructor(comparatorFunction) {
    // 头指针
    this.head = null;
    // 尾指针
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {*} value
   * @return { DoublyLinkedList }
   */
  prepend(value) {
    // 生成新的newNode.next-->上一个newNode
    const newNode = new DoublyLinkedListNode(value, this.head);

    // 如果头结点存在，将head.previous指向新的newNode
    if (this.head) {
      this.head.previous = newNode;
    }
    // 移动头指针永远指向newNode
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  /**
   * @param {*} value
   * @return { DoublyLinkedList }
   */
  append(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    // 将新节点附加到链接列表的末尾
    this.tail.next = newNode;
    // 将当前尾部附加到新节点的先前引用
    newNode.previous = this.tail;

    this.tail = newNode;

    return this;
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }
    let deleteNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deleteNode = currentNode;
        if (deleteNode === this.head) {
          this.head = deleteNode.next;
          if (this.head) {
            this.head.previous = null;
          }

          if (deleteNode === this.tail) {
            this.tail = null;
          }
        } else if (deleteNode === this.tail) {
          const previousNode = deleteNode.previous;
          this.tail = previousNode;
          this.tail.next = null;
        } else {
          const previousNode = deleteNode.previous;
          const nextNode = deleteNode.next;
          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }
      currentNode = currentNode.next;
    }

    return deleteNode;
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {DoublyLinkedListNode}
   */
  find({
    value = undefined,
    callback = undefined
  }) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      // If callback is specified then try to find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  /**
   * 删除头节点
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deleteNode = this.head;
    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deleteNode;
  }

  /**
   * 删除尾节点
   */
  deleteTail() {
    if (!this.tail) {
      return null;
    }

    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
      return this.tail;
    }
    const deleteNode = this.tail;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return deleteNode;
  }

  /**
   * @return {DoublyLinkedListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }
}
