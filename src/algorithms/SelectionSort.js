/**
 * Computes the Selection Sort Algorithm, returning a generated array of animations
 * @param {int[]} array - The array of unsorted values
 */
const SelectionSortAnimations = (array) => {
    return SelectionSort(array);
}

/**
 * Computes the Selection Sort Algorithm
 * @param {int[]} array - The array of unsorted values
 */
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

/**
 * Swap two values in an array based on two given indexes
 * @param {int} i - The first index
 * @param {int} j - The second index
 * @param {int[]} array - The array where the values will be swapped in
 */
const swap = (i, j, array) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export default SelectionSortAnimations;