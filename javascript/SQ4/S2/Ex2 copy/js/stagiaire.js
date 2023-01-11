class Stagiaire {
    nom;
    prenom;

    constructor(pPrenom, pNom, bd) {
        this.nom = pNom.toUpperCase();
        this.prenom = pPrenom;
        this.bd = bd;
    }

    salutation() {
        return "Bonjour, je m'appelle " + this.prenom + " " + this.nom + "" + this.bd;
    }
}