import Sort from '../Sort';

export default class BubbleSort extends Sort {

  /**
   *  @param {Array} originalArray
   *  @return {Array}
   */
  sort(originalArray) {
    let swapped = false;
    const array = [...originalArray];
    for (let i = 0, len = array.length; i < len; i++) {
      swapped = false;
      for (let j = 0; j < array.length - i; j++) {
        if (array[j + 1] < array[j]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
      if (!swapped) {
        return array;
      }
    }
    return array;
  }
}
