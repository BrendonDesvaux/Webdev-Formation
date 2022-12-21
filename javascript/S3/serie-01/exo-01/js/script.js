//Saisir un nombre n d’étoiles

var nbEtoiles = prompt("Saisir un nombre d'étoiles");
//Vérifier qu’il est bien supérieur ou égal à 1 et inférieur strictement à 11
if (nbEtoiles >= 1 && nbEtoiles < 11) {
    //Si oui, afficher une ligne de n étoiles

    console.log("*".repeat(nbEtoiles));

} else {
    //Si non, afficher un message d’erreur
    console.log("Le nombre d’étoile n’est pas correct ");
}