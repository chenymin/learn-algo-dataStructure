import Queue from '../queue';

describe('Queue', () => {
  it('创建一个空队列', () => {
    const queue = new Queue();
    expect(queue).not.toBe(null);
    expect(queue.linkedList).not.toBe(null);
  });

  it('入队', () => {
    const queue = new Queue();
    queue.enqueue(11);
    queue.enqueue(12);
    expect(queue.toString()).toBe('11,12');
  });

  it('入队或出队', () => {
    const queue = new Queue();
    queue.enqueue({ value: 'test1', key: 'key1' });
    queue.enqueue({ value: 'test2', key: 'key2' });

    const stringifier = value => `${value.key}:${value.value}`;

    expect(queue.toString(stringifier)).toBe('key1:test1,key2:test2');
    expect(queue.dequeue().value).toBe('test1');
    expect(queue.dequeue().value).toBe('test2');
  });
});
