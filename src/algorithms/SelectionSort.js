const SelectionSortAnimations = (array) => {
    return SelectionSort(array);
}

const SelectionSort = (array) => {
    var startIdx = 0;
    var animations = [];

    while (startIdx < array.length - 1) {
        var lowestIdx = startIdx;
        for (let i= startIdx + 1; i < array.length; i++) {
            if (array[i] < array[lowestIdx]) {
                lowestIdx = i;
            }
        }
        animations.push([startIdx, lowestIdx]);
        swap(startIdx, lowestIdx, array);
        startIdx++;
    }

    animations.push([array.length-1, null]);

    return animations;
}

const swap = (i, j, array) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export default SelectionSortAnimations;