let texte = '';

for (let i = 1; i < 21; i++) {
    //select only even numbers
    if (i % 2 === 0) {
        texte += i + '-';
        //remove the last dash
        if (i === 20) {
            texte = texte.substring(0, texte.length - 1);
        }
    }
}
console.log(texte);