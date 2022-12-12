//create a function that take in entry an array and return the sum of all the numbers
function sumArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));