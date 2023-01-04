let number = prompt("Entrez un nombre");
let result = '';

//create math table of number using while loop
let i = 1;
while (i <= 10) {
    result += number + " x " + i + " = " + number * i + "\n";
    i++;
}

console.log(result);

//create factorial of number using while loop
let factorial = 1;
let j = 1;
while (j <= number) {
    factorial *= j;
    j++;
}
console.log(number + "! = " + factorial);

//Create power of number using while loop
let power = 1;
let k = 1;
while (k <= number) {
    power *= number;
    k++;
}
console.log(number + " puissance " + number + " = " + power);

//write in console if it's even or odd using while loop
let l = 0;
while (l < 10) {
    if (l % 2 === 0) {
        console.log(l + " est pair");
    } else {
        console.log(l + " est impair");
    }
    l++;
}