class Classe {
    listeStagiaires;
    dateDebut;
    dateFin;

    constructor(dateDebut, dateFin, listeStagiaires, nom) {
        this.listeStagiaires = new Array();
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.nom = nom;
    }
    addDateDebut(dateDebut) {
        this.dateDebut = dateDebut;
    }
    addDateFin(dateFin) {
        this.dateFin = dateFin;
    }
    addStagiaire(stagiaire) {
        this.listeStagiaires.push(stagiaire);
    }
    getNom() {
        return this.nom;
    }
}