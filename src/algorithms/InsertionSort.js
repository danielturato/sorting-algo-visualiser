const InsertionSortAnimations = (array) => {
    return InsertionSort(array);
}

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

const swap = (i, j, array) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export default InsertionSortAnimations;