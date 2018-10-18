import LRUCache from '../LRUCache';

describe('LRUCache', () => {
  it('should create empty linked LRUCache', () => {
    const lRUCache = new LRUCache(5);
    expect(lRUCache.capacity).toBe(5);
    expect(lRUCache.linkedList.toString()).toBe('');
  });

  it('add five node', () => {
    const lRUCache = new LRUCache(5);
    lRUCache.put(1);
    lRUCache.put(2);
    lRUCache.put(3);
    lRUCache.put(4);
    lRUCache.put(5);
    expect(lRUCache.linkedList.toString()).toBe('5,4,3,2,1');
    lRUCache.put(6);
    expect(lRUCache.linkedList.toString()).toBe('6,5,4,3,2');
    lRUCache.put(5);
    expect(lRUCache.linkedList.toString()).toBe('5,6,4,3,2');
    lRUCache.put(2);
    expect(lRUCache.linkedList.toString()).toBe('2,5,6,4,3');
  });
});
