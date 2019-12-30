/**
 * Compute the Merge Sort Algorithm, returning an array of generated animations
 * @param {int[]} array - The array of unsorted values
 */
const MergeSortAnimations = (array) => {
    const animations = [];
    const auxArr = array.slice();
    MergeSort(array, 0, array.length - 1, auxArr, animations);
    return animations;
}

/**
 * Compute the Merge Sort algorithm
 * @param {int[]} arr - The array of unsorted values
 * @param {int} startIdx - The start index to be sorted
 * @param {int} endIdx - The end index to be sorted
 * @param {int[]} auxArr - The auxillary array
 * @param {Object[]} animations - The array of generated animations
 */
const MergeSort = (arr, startIdx, endIdx, auxArr, animations) => {
    if (startIdx === endIdx) {
        return;
    }
    const middleIdx = Math.floor((startIdx + endIdx) / 2);

    MergeSort(auxArr, startIdx, middleIdx, arr, animations);
    MergeSort(auxArr, middleIdx+1, endIdx, arr, animations);
    merge(arr, startIdx, middleIdx, endIdx, auxArr, animations);
}

/**
 * Used to merge two sorted arrays
 * @param {int[]} arr - The first array
 * @param {int} startIdx - The starting index
 * @param {int} middleIdx - The middle index
 * @param {int} endIdx - The end index
 * @param {int[]} auxArr - The second/auxillary array
 * @param {Object[]} animations - The array of generated animations
 */
const merge = (arr, startIdx, middleIdx, endIdx, auxArr, animations) => {
   let k = startIdx;
   let i = startIdx;
   let j = middleIdx + 1;

   while (i <= middleIdx && j <= endIdx) {
       animations.push([[i, j], false]);
       if (auxArr[i] <= auxArr[j]) {
           animations.push([[k, auxArr[i]], true]);
           arr[k++] = auxArr[i++];
       } else {
           animations.push([[k, auxArr[j]], true]);
           arr[k++] = auxArr[j++];
       }
   }

   while (i <= middleIdx) {
       animations.push([[i, i], false]);
       animations.push([[k, auxArr[i]], true]);
       arr[k++] = auxArr[i++];
   }

   while (j <= endIdx) {
       animations.push([[j, j], false]);
       animations.push([[k, auxArr[j]], true]);
       arr[k++] = auxArr[j++];
   }
}

export default MergeSortAnimations;