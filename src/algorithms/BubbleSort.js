/**
 * Get the animations generated from the Bubble Sort Algorithms 
 * @param {int[]} array - The array to be sorted
 */
const BubbleSortAnimations = (array) => {
    return BubbleSort(array);
}

/**
 * Sort the given array in-place using the Bubble Sort Algorithm.
 * Returns the animations generated from the algorithm. 
 * @param {int[]} array 
 */
const BubbleSort = (array) => {
    const animations = [];
    var counter = 0;
    var isSorted = false;

    while(!isSorted) {
        isSorted = true;
        
        for (let i=0; i<array.length - 1 - counter; i++) {
            var animation = [];
            if (array[i] > array[i+1]) {
                animation.push([i, i+1], true);
                swap(i, i+1, array);
                isSorted = false;
            } else {
                animation.push([i, i+1], false);
            }

            animation.push((i+1) >= (array.length-1-counter) ? true : false);
            animations.push(animation);
        }

        if (isSorted) {
            for (let i=0; i<array.length - 1 - counter; i++) {
                animations.push([[null, i], false, true]);
            }
        }

        counter++;
    }

    return animations;
}

/**
 * Swap two values at two given indexes in an array
 * @param {int} i - Index one
 * @param {int} j - Index two
 * @param {int[]} array - The array in which the values will be swapped in
 */
const swap = (i, j, array) => {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

export default BubbleSortAnimations;