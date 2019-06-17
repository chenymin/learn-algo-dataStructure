import Sort from '../Sort';

export default class FindKMaxValue extends Sort {
  constructor() {
    super();
    this.kValue = 0;
  }

  sort(originalArray = [], inputLowIndex = 0, inputHighIndex = originalArray.length - 1,
    recursiveCall = false, k = 0) {
    const array = recursiveCall ? originalArray : [...originalArray];

    const partitionArray = (lowIndex, highIndex) => {
      const swap = (leftIndex, rightIndex) => {
        const temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
      };

      const pivot = array[highIndex];
      this.callbacks.visitingCallback(array[pivot]);

      let partitionIndex = lowIndex;
      for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex += 1) {
        if (this.comparator.greaterThan(array[currentIndex], pivot)) {
          swap(partitionIndex, currentIndex);
          partitionIndex += 1;
        }
      }
      swap(partitionIndex, highIndex);
      return partitionIndex;
    };

    if (inputLowIndex < inputHighIndex) {
      const partitionIndex = partitionArray(inputLowIndex, inputHighIndex);
      if (partitionIndex + 1 === k) {
        this.kValue = array[partitionIndex];
      } else if (k > partitionIndex + 1) {
        this.sort(array, partitionIndex + 1, inputHighIndex, true, k);
      } else if (k < partitionIndex + 1) {
        this.sort(array, inputLowIndex, partitionIndex - 1, true, k);
      }
    }
    return this.kValue;
  }
}
