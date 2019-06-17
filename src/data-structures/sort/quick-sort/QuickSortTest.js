// import QuickSort from './QuickSort';
// const quickSort = new QuickSort();
// const arr = [2, 3, 6, 9, 0, 99, 88, 1, 5, 19, 20, 25, 46, 89, 33];
// console.log(quickSort.sort(arr));

// import QuickSortInPlace from './QuickSortInPlace';
// const arr = [2, 3, 6, 9, 0, 99, 88, 1, 5, 19, 20, 25, 46, 89, 33];
// const quickSortInPlace = new QuickSortInPlace();
// console.log(quickSortInPlace.sort(arr));

import FindKMaxValue from './FindKMaxValue';

const arr = [6, 1, 3, 5, 7, 2, 4, 9, 11, 8];
const findKMaxValue = new FindKMaxValue();
// console.log(findKMaxValue.sort(arr, 0, arr.length - 1, true, 3));
// console.log(findKMaxValue.sort(arr, 0, arr.length - 1, true, 1));
// console.log(findKMaxValue.sort(arr, 0, arr.length - 1, true, 2));
console.log(findKMaxValue.sort(arr, 0, arr.length - 1, true, 5));
