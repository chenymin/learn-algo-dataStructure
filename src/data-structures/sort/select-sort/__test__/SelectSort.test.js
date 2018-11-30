import SelectSort from '../SelectSort';

describe('选择排序', () => {
  it('选择排序测试', () => {
    const selectSort = new SelectSort();
    expect(selectSort.sort([4, 2, 1, 5, 6, 3])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
