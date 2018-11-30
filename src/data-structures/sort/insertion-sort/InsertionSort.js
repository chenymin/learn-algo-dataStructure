import Sort from '../Sort';

export default class InsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    for (let i = 0; i < array.length; i++) {
      let currentIndex = i;
      while (array[currentIndex - 1] !== undefined
                && this.comparator.lessThan(array[currentIndex], array[currentIndex - 1])) {
        const temp = array[currentIndex - 1];
        array[currentIndex - 1] = array[currentIndex];
        array[currentIndex] = temp;

        // Shift current index left.
        currentIndex -= 1;
      }
    }
    return array;
  }
}
