let texte = '';

for (let i = 0; i < 10; i++) {
    //write in console if it's even or odd
    if (i % 2 === 0) {
        texte = 'pair';
    } else {
        texte = 'impair';
    }
    console.log(i + ' est ' + texte);
}