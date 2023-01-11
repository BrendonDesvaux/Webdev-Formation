class Animal {
    name;
    spacies;
    constructor(name, spacies) {
        this.name = name;
        this.spacies = spacies;
    }
    afficher() {
        return `Nom: ${this.name} Espèce: ${this.spacies}`;
    }
}