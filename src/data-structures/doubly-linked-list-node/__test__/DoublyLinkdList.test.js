import DoublyLinkedList from '../DoublyLinkedList';

describe('DoublyLinkedList', () => {
  it('DoublyLinkedList prepend', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.prepend(5);
    doublyLinkedList.prepend(4);
    doublyLinkedList.prepend(3);
    doublyLinkedList.prepend(2);
    doublyLinkedList.prepend(1);
    expect(doublyLinkedList.toString()).toBe('1,2,3,4,5');
    expect(doublyLinkedList.head.value).toBe(1);
    expect(doublyLinkedList.head.previous).toBeNull();
    expect(doublyLinkedList.tail.value).toBe(5);
    expect(doublyLinkedList.tail.next).toBeNull();
  });

  it('DoublyLinkedList append', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.append(4);
    doublyLinkedList.append(5);
    expect(doublyLinkedList.toString()).toBe('1,2,3,4,5');
    expect(doublyLinkedList.head.value).toBe(1);
    expect(doublyLinkedList.head.previous).toBeNull();
    expect(doublyLinkedList.tail.value).toBe(5);
    expect(doublyLinkedList.tail.next).toBeNull();

    doublyLinkedList.delete(3);
    expect(doublyLinkedList.toString()).toBe('1,2,4,5');

    expect(doublyLinkedList.delete(5).value).toBe(5);
    expect(doublyLinkedList.toString()).toBe('1,2,4');
    doublyLinkedList.prepend(6);
    expect(doublyLinkedList.toString()).toBe('6,1,2,4');
    doublyLinkedList.deleteHead();
    expect(doublyLinkedList.toString()).toBe('1,2,4');
    doublyLinkedList.deleteTail();
    expect(doublyLinkedList.toString()).toBe('1,2');
    expect(doublyLinkedList.tail.value).toBe(2);
  });
});
