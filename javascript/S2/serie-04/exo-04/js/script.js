//create a function that take in entry an array and verify if all the numbers are sorted in ascending order
function sortArray(array) {
    var arraySorted = array.slice().sort(function(a, b) {
        return a - b;
    });
    return arraySorted.toString() === array.toString();
}
console.log(sortArray([1, 2, 3, 4, 5]));
console.log(sortArray([3, 1, 5, 2, 4]));