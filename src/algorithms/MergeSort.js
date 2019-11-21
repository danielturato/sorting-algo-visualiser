const MergeSortAnimations = (array) => {
    const animations = [];
    const auxArr = array.slice();
    MergeSort(array, 0, array.length - 1, auxArr, animations);
    return animations;
}

const MergeSort = (arr, startIdx, endIdx, auxArr, animations) => {
    if (startIdx === endIdx) {
        return;
    }
    const middleIdx = Math.floor((startIdx + endIdx) / 2);

    MergeSort(auxArr, startIdx, middleIdx, arr, animations);
    MergeSort(auxArr, middleIdx+1, endIdx, arr, animations);
    merge(arr, startIdx, middleIdx, endIdx, auxArr, animations);
}

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