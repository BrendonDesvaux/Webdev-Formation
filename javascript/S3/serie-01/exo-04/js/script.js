//create a random nomber between 1 and 5
var nbEtoiles = Math.round(Math.random() * 5) + 1;

//user need to guess the number
var nbEtoilesUser = prompt("Saisir un nombre d'étoiles");
var timeTried = 0;

//while the user has tried less than 3 times
while (timeTried < 2) {
    //if the user is lower than nbEtoiles
    if (nbEtoilesUser < nbEtoiles) {
        console.log("C'est plus");
        //user need to guess the number
        nbEtoilesUser = prompt("Saisir un nombre d'étoiles");
        //if the user is higher than nbEtoiles
    } else if (nbEtoilesUser > nbEtoiles) {
        console.log("C'est moins");
        //user need to guess the number
        nbEtoilesUser = prompt("Saisir un nombre d'étoiles");
        //if the user is equal to nbEtoiles
    } else if (nbEtoilesUser == nbEtoiles) {
        console.log("C'est gagné");
        break;
    }
    //add 1 to timeTried
    timeTried++;
}
if (timeTried === 2) {
    alert("C'est perdu");
}