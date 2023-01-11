class Stage {
    debut;
    fin;
    constructor(debut, fin) {
        this.debut = debut;
        this.fin = fin;
    }
    get duree() {
        return this.calcDuree();
    }
    calcDuree() {
        let date1 = new Date(this.debut);
        let date2 = new Date(this.fin);
        let diff = date2.getTime() - date1.getTime();
        let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        return diffDays;
    }
    showStage() {
        return "Le stage a lieu du " + this.debut + " au " + this.fin + " soit " + this.duree + " jours.";
    }
}