//Créer un tableau contenant le nom des douze mois de l’année en Français.

let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

//Créer un tableau contenant le nom des douze mois de l’année en Anglais.

let moisAnglais = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Créer un tableau contenant le nom des douze mois de l’année en Espagnol.

let moisEspagnol = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//afficher dans le html les 12 mois en Français et leur traduction en Anglais et en Espagnol.

let affichage = document.getElementById("affichage");

for (let i = 0; i < mois.length; i++) {
    affichage.innerHTML += mois[i] + " = " + moisAnglais[i] + " = " + moisEspagnol[i] + "<br>";
}