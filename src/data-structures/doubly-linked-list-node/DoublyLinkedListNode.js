export default class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
