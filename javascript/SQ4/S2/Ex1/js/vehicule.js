class Vehicule {
    constructor(marque, modele, nbDePlaces) {
        this.marque = marque;
        this.modele = modele;
        this.nbDePlaces = nbDePlaces;
    }
    afficher() {
        return `Marque: ${this.marque} Modèle: ${this.modele} Nombre de places: ${this.nbDePlaces}`;
    }
}