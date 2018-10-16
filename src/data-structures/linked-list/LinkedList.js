import LinkedListNode from './LinkedListNode'
import Comparator from '../../util/Comparator'

export default class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor (comparatorFunction) {
    /** @var LinkedListNode */
    this.hdad = null;

    /** @var LinkedListNode */
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend (value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // 如果没有尾节点，那么让新节点成为尾节点
    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   * 
   */
  append (value) {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this
    }

    // 将newNode附加到链接列表的末尾
    this.tail.next = newNode;
    this.tail = newNode;

    return this
  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete (value) {
    if (!this.head) {
      return null
    }

    let deleteNode = null

    //如果必须删除头部，则创建不同的下一个节点
    //从头开始成为一个新的head。
    while (this.head && this.compare.equal(this.head.value, value)) {
      deleteNode = this.head;
      this.head = this.head.next
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        // 如果必须删除下一个节点，则将下一个节点作为下一个节点。
        if (this.compare.equal(currentNode.next.value,value)) {
          deleteNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    // 检查是否必须删除尾部。
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deleteNode
  }

  /**
   * @param {Object} findParams
   * @param {*} finparams.value
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */
  find({value = undefined, callback = undefined}) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value))  {
        return currentNode
      }

      currentNode = currentNode.next
    }
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail () {
    const deleteTail = this.tail;

    if (this.head === this.tail) {
      // 有且仅有一个节点
      this.head = null;
      this.tail = null;

      return deleteTail
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }

    this.tail = currentNode;

    return deleteTail;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead () {
    if (!this.head) {
      return null
    }

    const deleteHead = this.head

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return this.deleteTail
  }

  /**
   * @return {LinkedListNode[]}
   */ 
  toArray () {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString (callback) {
    return this.toArray.map(node => node.toString(callback).toString())
  }
}