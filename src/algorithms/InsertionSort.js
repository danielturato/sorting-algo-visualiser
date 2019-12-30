/**
 * Compute the Insertion Sort Algorithm, returning an array of generated animations
 * @param {int[]} array - The unsorted array of values
 */
const InsertionSortAnimations = (array) => {
    return InsertionSort(array);
}

/**
 * Compute the Insertion Sort Algorithm
 * @param {int[]} array - The unsorted array of values
 */
const InsertionSort = (array) => {
    const animations = [];

    for (let i=1; i<array.length; i++) {
        var j = i;
        while (j >= 0 && array[j] < array[j-1]) {
            animations.push([j, j-1]);
            swap(j, j-1, array);
            j -= 1;
        }
    }

    return animations;
}

/**
 * Swap two values in an array at two given indexes 
 * @param {int} i - The first index
 * @param {int} j - The second index
 * @param {int[]} array - The arrays the values will be swapped in
 */
const swap = (i, j, array) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export default InsertionSortAnimations;