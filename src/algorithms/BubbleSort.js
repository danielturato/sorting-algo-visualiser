const BubbleSort = (array) => {
    var counter = 0;
    var isSorted = false;

    while(!isSorted) {
        isSorted = true;
        
        for (let i=0; i<array.length - 1 - counter; i++) {
            if (array[i] > array[i+1]) {
                swap(i, i+1, array);
                isSorted = false;
            }
        }
        counter++;
    }

    return array;
}

const swap = (i, j, array) => {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

export default BubbleSort;