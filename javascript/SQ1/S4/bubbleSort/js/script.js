function bubbleSort(array) {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}

var numbers = [1, 7, 3, 12, 8, 5, 16];
console.log(bubbleSort(numbers));