export default class ArrayQueue {
  constructor(capacity) {
    this.n = capacity;
    this.item = new Array(capacity);
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    // 队列已满
    if (this.tail === this.n) {
      if (this.head === 0) {
        return false;
      }
      // 数据搬移
      for (let i = this.head; i < this.tail; i++) {
        this.item[i - this.head] = this.item[i];
      }
      // 更新tail head
      this.tail -= this.head;
      this.head = 0;
    }
    this.item[this.tail] = value;
    this.tail = this.tail + 1;
    return true;
  }

  dequeue() {
    let value = '';
    if (this.tail === this.head) return null;
    value = this.item[this.head];
    this.head = this.head + 1;
    return value;
  }
}
