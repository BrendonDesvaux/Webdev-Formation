$('input').change(function() {
    let nom = $('#nom').val();
    let prenom = $('#prenom').val();
    let marque = $('#marque').val();
    let modele = $('#modele').val();
    let nbDePlaces = $('#nbPlace').val();
    nbDePlaces = parseInt(nbDePlaces);
    let rue = $('#rue').val();
    let typeVoie = $('#typeVoie').val();
    let codePostal = $('#codePostal').val();
    codePostal = parseInt(codePostal);
    let villa = $('#villa').val();
    let animals = $('#animal').val();
    let nomAnimal = $('#nomAnimal').val();
    let nm2voi = $('#nm2voi').val();

    //if inputs aren't enmpty
    if (nom != "" && prenom != "" && marque != "" && modele != "" && nbDePlaces != "" && rue != "" && typeVoie != "" && codePostal != "" && villa != "" && animals != "" && nomAnimal != "") {
        let personne = new Personne(nom, prenom);
        let animal = new Animal(animals, nomAnimal);
        let vehicule = new Vehicule(marque, modele, nbDePlaces);
        let maison = new Maison(rue, typeVoie, nm2voi, codePostal, villa);
        $("#result").html(`${personne.afficher()} \r\n ${animal.afficher()} \n ${vehicule.afficher()} \n ${maison.afficher()}`);
    }
});

let formateur = new Personne('BRU', 'Thierry');
let chatFormateur = new Animal('Arwen', 'chat');
let vehiculeFormateur = new Vehicule('ninebot', 'NavBOT G30MAX', '1');
let domicileFormateur = new Maison(1, 'rue', 'du paradis', '18999', 'Las Angelos');

formateur.afficher();
chatFormateur.afficher();
vehiculeFormateur.afficher();
domicileFormateur.afficher();