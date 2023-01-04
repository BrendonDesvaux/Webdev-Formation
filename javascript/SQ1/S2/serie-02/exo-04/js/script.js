let number = prompt("Entrez un nombre");

//create math table of number
let result = '';
for (let i = 1; i <= 10; i++) {
    result += number + " x " + i + " = " + number * i + "\n";
}

console.log(result);