import QuickSort from '../QuickSort';

describe('MergeSort', () => {
  it('归并排序', () => {
    const quickSort = new QuickSort();
    const arr = [2, 3, 6, 9, 0, 99, 88, 1, 5, 19, 20, 25, 46, 89, 33];
    expect(quickSort.sort(arr)).toEqual([0, 1, 2, 3, 5, 6, 9, 19, 20, 25, 33, 46, 88, 89, 99]);
  });
});
