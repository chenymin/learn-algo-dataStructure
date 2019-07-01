import Sort from '../Sort';

/**
 * 选择排序
 * 1、先在未排序的序列中找到最小（大）元素，存放到排序序列的起始位置
 * 2、再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾，直到所有元素均排序完毕
 */
export default class SelectSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        // 在未排序元素中继续寻找最小元素，并保存其下标
        if (this.comparator.lessThan(array[j], array[minIndex])) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
    return array;
  }
}
