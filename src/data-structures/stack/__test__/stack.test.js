import Stack from '../Stack';

describe('Stack', () => {
  it('create empty stack', () => {
    const stack = new Stack();
    expect(stack).not.toBe(null);
    expect(stack.linkedList).not.toBe(null);
  });

  it('stack push', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.toString()).toBe('1,2');
  });

  it('should pop data from stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
    expect(stack.isEmpty()).toBe(true);
  });
});
