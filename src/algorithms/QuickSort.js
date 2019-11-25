const QuickSortAnimations = (array) => {
    const animations = []
    QuickSort(array, 0, array.length -1);
    return array;
}

const QuickSort = (array, left, right) => {
    const stack = Array(((right - left) + 1)).fill(0);
    var top = -1;

    stack[++top] = left;
    stack[++top] = right;

    while (top >= 0) {
        right = stack[top--];
        left = stack[top--];

        var partitionPoint = partition(array, left, right);

        if (partitionPoint - 1 > 1) {
            stack[++top] = left;
            stack[++top] = partitionPoint - 1;
        }

        if (partitionPoint + 1 < right) {
            stack[++top] = partitionPoint + 1;
            stack[++top] = right;
        }
    }
}

const partition = (array, left, right) => {
    const pivot = array[right];
    var i = left - 1;

    for (let j = left; j <= right - 1; j++) {
        if (array[j] <= pivot) {
            i++;
            //animations.push([[i, j], true])
            swap(i, j, array);
        }
    }

    //animations.push([[i+1, right], true]);
    swap(i+1, right, array);
    return i + 1;

}

const swap = (i, j, array) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


export default QuickSortAnimations;