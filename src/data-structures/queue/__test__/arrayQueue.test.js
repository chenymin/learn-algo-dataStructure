import ArrayQueue from '../ArrayQueue';

describe('数组实现队列', () => {
  it('创建数组队列', () => {
    const arrayQueue = new ArrayQueue(8);
    expect(arrayQueue.item.length).toBe(8);
  });
  it('数组队列入队', () => {
    const arrayQueue = new ArrayQueue(8);
    arrayQueue.enqueue(1);
    arrayQueue.enqueue(2);
    arrayQueue.enqueue(3);
    expect(arrayQueue.item.toString()).toBe('1,2,3,,,,,');
    expect(arrayQueue.tail).toBe(3);
  });
  it('数组队列出队', () => {
    const arrayQueue = new ArrayQueue(8);
    arrayQueue.enqueue(1);
    arrayQueue.enqueue(2);
    arrayQueue.enqueue(3);
    expect(arrayQueue.dequeue()).toBe(1);
    expect(arrayQueue.dequeue()).toBe(2);
    expect(arrayQueue.dequeue()).toBe(3);
    expect(arrayQueue.head).toBe(arrayQueue.tail);
  });

  it('队列满时数据迁移', () => {
    const arrayQueue = new ArrayQueue(5);
    arrayQueue.enqueue(1);
    arrayQueue.enqueue(2);
    arrayQueue.enqueue(3);
    arrayQueue.enqueue(4);
    arrayQueue.enqueue(5);

    arrayQueue.dequeue();
    arrayQueue.dequeue();
    arrayQueue.dequeue();

    arrayQueue.enqueue(6);

    // expect(arrayQueue.item.toString()).toBe('4,5,6,,');
    expect(arrayQueue.tail).toBe(3);
  });
});
