let texte = prompt("Entrez un texte");
//create a function that verify if palindrome
function palindrome(string) {
    let stringReverse = string.split("").reverse().join("");
    return stringReverse === string;
}
//while the string is not a palindrome, ask again
while (!palindrome(texte)) {
    texte = prompt("Ce n'est pas un palindrome, veuillez réessayer");
}
console.log(palindrome(texte));