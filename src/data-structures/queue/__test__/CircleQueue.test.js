import CircleQueue from '../CircleQueue';

describe('循环队列', () => {
  it('循环队列创建', () => {
    const circleQueue = new CircleQueue(5);
    expect(circleQueue.item.length).toBe(5);
  });

  it('循环队列入队', () => {
    const circleQueue = new CircleQueue(5);
    circleQueue.enqueue(1);
    circleQueue.enqueue(2);
    circleQueue.enqueue(3);
    circleQueue.enqueue(4);
    expect(circleQueue.tail).toBe(4);
    expect(circleQueue.item.toString()).toBe('1,2,3,4,');
  });

  it('循环队列出队', () => {
    const circleQueue = new CircleQueue(5);
    circleQueue.enqueue(1);
    circleQueue.enqueue(2);
    circleQueue.enqueue(3);
    circleQueue.enqueue(4);
    expect(circleQueue.dequeue()).toBe(1);
    expect(circleQueue.dequeue()).toBe(2);
    expect(circleQueue.dequeue()).toBe(3);
    expect(circleQueue.dequeue()).toBe(4);
  });

  it('循环队列出队、入队', () => {
    const circleQueue = new CircleQueue(5);
    circleQueue.enqueue(1);
    circleQueue.enqueue(2);
    circleQueue.enqueue(3);
    circleQueue.enqueue(4);
    expect(circleQueue.dequeue()).toBe(1);
    expect(circleQueue.dequeue()).toBe(2);
    expect(circleQueue.dequeue()).toBe(3);
    expect(circleQueue.dequeue()).toBe(4);
    circleQueue.enqueue(7);
    expect(circleQueue.dequeue()).toBe(7);
  });
});
