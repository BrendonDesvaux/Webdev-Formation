class Personne {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    afficher() {
        return `Nom: ${this.nom} Prénom: ${this.prenom}`;
    }
}