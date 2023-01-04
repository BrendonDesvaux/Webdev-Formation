//Saisir un nombre n d’étoiles
var nbEtoiles = prompt("Saisir un nombre d'étoiles");

function checkNbEtoiles(nbEtoile) {
    //Tant qu’il n’est pas bien supérieur ou égal à 1 et inférieur strictement à 11 :
    while (nbEtoiles < 1 || nbEtoiles >= 11) {
        console.log("Le nombre d’étoile n’est pas correct ");
        //Saisir un nombre n d’étoiles
        nbEtoiles = prompt("Saisir un nombre d'étoiles");
    }

    //Affichez n lignes d’étoile, la première ligne comptant 1 etoile, la dernière comptant n étoiles
    for (var i = 1; i <= nbEtoiles; i++) {
        console.log("*".repeat(i));
    }
}
checkNbEtoiles(nbEtoiles);