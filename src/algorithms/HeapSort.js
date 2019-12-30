/**
 * Returns the animations generated from the Heap Sort Algorithm
 * @param {int[]} array - The unsorted array of values
 */
const HeapSortAnimations = (array) => {
    const animations = [];
    HeapSort(array, animations);

    return animations;
}

/**
 * Compute the Heap Sort algorithm
 * @param {int[]} array - The unsorted array of values
 * @param {Object[]} animations - Array of generated animations from the Heap Sort
 */
const HeapSort = (array, animations) => {
    heapify(array, animations);

    for(let curIdx = array.length - 1; curIdx > 0; curIdx--) {
        animations.push([0, curIdx, true]);
        swap(0, curIdx, array);
        siftDown(0, curIdx - 1, array, animations);
    }
}

/**
 * Used to transfer an array into a Max Binary Heap
 * @param {int[]} array - The unsorted array of values
 * @param {Object[]} animations - Array of generated animations from the Heap Sort
 */
const heapify = (array, animations) => {
    var parent = Math.floor((array.length - 2) / 2);

    for(let curIdx = parent; curIdx >= 0; curIdx--) {
        siftDown(curIdx, array.length-1, array, animations);
    }
}

/**
 * Used to sift a value from a particular starting point in the Heap, to a 
 * particular end-point.
 * @param {int} curIdx - The starting index
 * @param {int} endIdx - The ending index
 * @param {int[]} heap - The Max Binary Heap
 * @param {Object[]} animations - Array of animations during the sift-down
 */
const siftDown = (curIdx, endIdx, heap, animations) => {
    var leftChild = (2 * curIdx) + 1;

    while (leftChild <= endIdx) {
        const rightChild = (2 * curIdx) + 2 <= endIdx ? (2 * curIdx) + 2 : -1;

        var greatestChild = -1
        if (rightChild !== -1 && heap[rightChild] > heap[leftChild])  {
            greatestChild = rightChild;
        } else {
            greatestChild = leftChild;
        }

        if (heap[greatestChild] > heap[curIdx]) {
            animations.push([greatestChild, curIdx]);
            swap(greatestChild, curIdx, heap);
            curIdx = greatestChild;
            leftChild = (2 * curIdx) + 1;
        } else {
            return;
        }
    }
}

/**
 * Swap two values in an array at two given indexes
 * @param {int} i - The first index 
 * @param {int} j - The second index
 * @param {int[]} array - The array that the values will be swapped in
 */
const swap = (i, j, array)  => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}



export default HeapSortAnimations;