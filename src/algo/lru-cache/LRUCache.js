import LinkedList from '../../data-structures/linked-list/LinkedList';
/**
 * 单链表实现简单的LRU(Least recently used)算法（以后用哈希及双链表加以改进保证时间复杂度在O(1)）
 * 1、如果原来的数据缓存到链表中了，先删除当前节点、然后再插入到链表头部
 * 2、不在缓存链表中
 *  1)缓存未满：直接插入到头部
 *  2)缓存已满：删除尾部节点、添加头部节点
 */
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
