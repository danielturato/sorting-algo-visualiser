const HeapSortAnimations = (array) => {
    const animations = [];
    HeapSort(array, animations);

    return animations;
}

const HeapSort = (array, animations) => {
    heapify(array, animations);

    for(let curIdx = array.length - 1; curIdx > 0; curIdx--) {
        animations.push([0, curIdx, true]);
        swap(0, curIdx, array);
        siftDown(0, curIdx - 1, array, animations);
    }
}

const heapify = (array, animations) => {
    var parent = Math.floor((array.length - 2) / 2);

    for(let curIdx = parent; curIdx >= 0; curIdx--) {
        siftDown(curIdx, array.length-1, array, animations);
    }
}

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

const swap = (i, j, array)  => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}



export default HeapSortAnimations;