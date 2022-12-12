//create a function that take in entry an array and return the mean value of all the numbers
function meanArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(meanArray([1, 2, 3, 4, 5]));