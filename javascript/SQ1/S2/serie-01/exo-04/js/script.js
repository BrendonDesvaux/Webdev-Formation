let texte = '';

//•	Afficher les puissances de 2 jusqu'a 2 puissance 16
for (let i = 1; i <= 16; i++) {
    texte += Math.pow(2, i) + ' ';
}
console.log(texte);