import BubbleSort from '../BubbleSort';

describe('冒泡排序', () => {
  it('冒泡数组排序', () => {
    const bubbleSort = new BubbleSort();

    expect(bubbleSort.sort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
