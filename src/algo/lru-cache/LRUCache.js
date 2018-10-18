import LinkedList from '../../data-structures/linked-list/LinkedList';

export default class LRUCache {
  constructor(capacity = Number.MAX_VALUE) {
    this.capacity = capacity > 0 ? capacity : Number.MAX_VALUE;
    this.data = {};
    this.hash = {};
    this.linkedList = new LinkedList();
  }

  put(val) {
    const currentNode = this.linkedList.find({
      value: val
    });
    if (currentNode && currentNode.value === val) {
      this.linkedList.delete(val);
      this.linkedList.prepend(val);
    } else {
      if (this.linkedList.toArray().length >= this.capacity) {
        this.linkedList.prepend(val);
        this.linkedList.deleteTail();
      } else {
        this.linkedList.prepend(val);
      }
    }
  }

  displayInfo() {
    this.linkedList.toString();
  }
}
