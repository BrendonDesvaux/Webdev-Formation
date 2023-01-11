class Maison {
    numeroRue;
    typeVoie;
    nomVoie;
    codePostal;
    ville;
    constructor(numeroRue, typeVoie, nomVoie, codePostal, ville) {
        this.numeroRue = numeroRue;
        this.typeVoie = typeVoie;
        this.nomVoie = nomVoie;
        this.codePostal = codePostal;
        this.ville = ville;
    }
    afficher() {
        return `Numéro de rue: ${this.numeroRue} Type de voie: ${this.typeVoie} Nom de la voie: ${this.nomVoie} Code postal: ${this.codePostal} Ville: ${this.ville}`;
    }
}