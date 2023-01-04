//Saisir un nombre n d’étoiles
let nbEtoiles = prompt("Saisir un nombre d'étoiles");

//Tant qu’il n’est pas bien supérieur ou égal à 1 et inférieur strictement à 11 :
function checkNbEtoiles(nbEtoile) {
    while (nbEtoiles < 1 || nbEtoiles >= 11) {
        console.log("Le nombre d’étoile n’est pas correct ");
        //Saisir un nombre n d’étoiles
        nbEtoiles = prompt("Saisir un nombre d'étoiles");
    }
    console.log("*".repeat(nbEtoiles));
}
checkNbEtoiles(nbEtoiles);