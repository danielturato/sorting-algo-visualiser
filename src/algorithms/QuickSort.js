const QuickSortAnimations = (array) => {
    const animations = []
    QuickSort(array, 0, array.length -1, false, animations);
    
    return animations;
}

 const QuickSort = (originalArray, leftIdx, rightIdx, recursiveCall, animations) => {
    const array = recursiveCall ? originalArray : originalArray.slice();

    if (leftIdx < rightIdx) {
      const partitionIdx = partition(array, leftIdx, rightIdx, animations);
      const RECURSIVE_CALL = true;
      QuickSort(array, leftIdx, partitionIdx - 1, RECURSIVE_CALL, animations);
      QuickSort(array, partitionIdx + 1, rightIdx, RECURSIVE_CALL, animations);
    }

}

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

const swap = (i, j, array) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export default QuickSortAnimations;