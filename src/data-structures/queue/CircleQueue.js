// (tail+1)%n === head 满队列的条件
export default class CircleQueue {
  constructor(capacity) {
    this.n = capacity;
    this.item = new Array(capacity);
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    if ((this.tail + 1) % this.n === this.head) {
      return false;
    }
    this.item[this.tail] = value;
    this.tail = (this.tail + 1) % this.n;
    return true;
  }

  dequeue() {
    if (this.head === this.tail) {
      return null;
    }
    const value = this.item[this.head];
    this.head = (this.head + 1) % this.n;
    return value;
  }
}
