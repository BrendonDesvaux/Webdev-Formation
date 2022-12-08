let firstCmd = prompt('Entrez un premier nombre');
let secondCmd = prompt('Entrez un second nombre');

//calculate firstCMD power secondCMD with a loop
let result = 1;
for (let i = 0; i <= secondCmd; i++) {
    result *= firstCmd;
}
console.log(firstCmd + " puissance " + secondCmd + " egal " + result);