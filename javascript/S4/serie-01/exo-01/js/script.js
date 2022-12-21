//create a function that take in entry an array and return the sum of all the numbers
function sumArray(p_array) {
    let sum = 0;
    for (let i = 0; i < p_array.length; i++) {
        sum += p_array[i];
    }
    return sum;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumArray(arr));