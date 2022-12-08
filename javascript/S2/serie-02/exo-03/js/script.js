let nombre = prompt("Entrez un nombre");

//calculate the factorial of nombre
let result = 1;
for (let i = 1; i <= nombre; i++) {
    result *= i;
}
console.log(nombre + "! = " + result);