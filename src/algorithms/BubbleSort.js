const BubbleSortAnimations = (array) => {
    return BubbleSort(array);
}

const BubbleSort = (array) => {
    const animations = [];
    var counter = 0;
    var isSorted = false;

    while(!isSorted) {
        isSorted = true;
        
        for (let i=0; i<array.length - 1 - counter; i++) {
            if (array[i] > array[i+1]) {
                animations.push([[i, i+1], true]);
                swap(i, i+1, array);
                isSorted = false;
            } else {
                animations.push([[i, i+1], false]);
            }
        }
        counter++;
    }

    return animations;
}

const swap = (i, j, array) => {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

export default BubbleSortAnimations;