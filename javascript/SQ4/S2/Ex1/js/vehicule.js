class Vehicule { //nom de la classe
    marque; //attributs
    modele;
    nbDePlaces;
    constructor(marque, modele, nbDePlaces) { //constructeur/Signature
        this.marque = marque;
        this.modele = modele;
        this.nbDePlaces = nbDePlaces; //le tout est une instance
    }
    afficher() { //Méthode/Signature
        return `Marque: ${this.marque} Modèle: ${this.modele} Nombre de places: ${this.nbDePlaces}`;
    }
}