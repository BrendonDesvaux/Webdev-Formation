let number = prompt("Entrez un nombre");
let result = '';

//create math table of number using while loop
let i = 1;
while (i <= 10) {
    result += number + " x " + i + " = " + number * i + "\n";
    i++;
}

console.log(result);