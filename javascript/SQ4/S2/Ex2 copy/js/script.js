var stage;

function creerStagiaire(prenom, nom, bd) {
    let name = $('#nomStagiaire').val();
    let firstName = $('#prenomStagiaire').val();
    let birthDate = $('#dateNaissance').val();
    let stagiaire = new Stagiaire(name, firstName, birthDate);
    let classe = new Classe();
    classe.addStagiaire(stagiaire);

    console.log(classe);

}

function creerStage(debut, fin) {
    let start = $('#debut').val();
    let end = $('#fin').val();
    stage = new Stage(start, end);

}

function afficherStage() {
    let classe = new Classe();
    classe.showAddedStagiaires();
}

//listen for click on button and do creerstage
$('#creerClasse').click(function() {
    creerClasse();
});
$('#creerStage').click(function() {
    creerStage(debut, fin);

});
$('#consoleCreation').click(function() {
    afficherStage();
});
$('#creerStagiaire').click(function() {
    creerStagiaire();
});
$('#addStag').click(function() {
    $('#formStag').css('display', 'block');
});

function creerClasse() {
    let className = $('#nom').val();
    let start = $('#debut').val();
    let end = $('#fin').val();
    let classe = new Classe();
    classe.nom = className;
    classe.addDateDebut(start);
    classe.addDateFin(end);
    console.log(classe);
}