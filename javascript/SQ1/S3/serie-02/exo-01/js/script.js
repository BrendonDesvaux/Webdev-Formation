//Saisir un nombre n d’étoiles

let nbEtoiles = prompt("Saisir un nombre d'étoiles");

//create a function to check if the number is superior or equal to 1 and inferior to 11 and call the function
function checkNbEtoiles(nbEtoile) {
    if (nbEtoiles >= 1 && nbEtoiles <= 10) {
        console.log("*".repeat(nbEtoiles));
    } else {
        let nbEtoiles = prompt("Saisir un nombre d'étoiles");
    }
}
//call function
checkNbEtoiles(nbEtoiles);