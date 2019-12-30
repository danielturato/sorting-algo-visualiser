/**
 * Compute the Quick Sort algorithm , returning an array of generated animations
 * @param {int[]} array - The array of unsorted values
 */
const QuickSortAnimations = (array) => {
    const animations = []
    QuickSort(array, 0, array.length -1, false, animations);
    
    return animations;
}

/**
 * Compute the Quick Sort Algorithm
 * @param {int[]} originalArray - The original unsorted array of values
 * @param {int} leftIdx - The current left index
 * @param {int} rightIdx - The current right index
 * @param {boolean} recursiveCall - Suggets if it is currently in a recurisve call
 * @param {Object[]} animations - Array of animations
 */
 const QuickSort = (originalArray, leftIdx, rightIdx, recursiveCall, animations) => {
    const array = recursiveCall ? originalArray : originalArray.slice();

    if (leftIdx < rightIdx) {
      const partitionIdx = partition(array, leftIdx, rightIdx, animations);
      const RECURSIVE_CALL = true;
      QuickSort(array, leftIdx, partitionIdx - 1, RECURSIVE_CALL, animations);
      QuickSort(array, partitionIdx + 1, rightIdx, RECURSIVE_CALL, animations);
    }

}

/**
 * Computes a partition index based on a left & right index
 * @param {int[]} array - The array of values
 * @param {int} leftIdx - The left index
 * @param {int} rightIdx - The right index
 * @param {Object[]} animations - The array of generated animations
 */
const partition = (array, leftIdx, rightIdx, animations) => {
  const pivot = array[rightIdx];
  let partitionIdx = leftIdx;

  for (let currentIdx = leftIdx; currentIdx < rightIdx; currentIdx++) {  
    if (array[currentIdx] < pivot) {
      animations.push([[partitionIdx, currentIdx], true]);
      swap(partitionIdx, currentIdx, array);

      partitionIdx += 1;
    } else {
      animations.push([[currentIdx, rightIdx], false]);
    }
  }

  animations.push([[partitionIdx, rightIdx], true]);
  swap(partitionIdx, rightIdx, array);

  return partitionIdx;
}

/**
 * Swap two values in an array at two given indexes
 * @param {int} i - The first index
 * @param {int} j - The second index
 * @param {int[]} array - The array the values will be swapped in
 */
const swap = (i, j, array) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export default QuickSortAnimations;