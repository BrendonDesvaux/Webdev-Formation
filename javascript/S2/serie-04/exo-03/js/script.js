//create a function that verify if palindrome
function palindrome(string) {
    var stringReverse = string.split("").reverse().join("");
    return stringReverse === string;
}
console.log(palindrome("kayak"));
console.log(palindrome("kayaks"));