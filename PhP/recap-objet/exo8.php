<?php
/** EXERCICE n°8 - Héritage et composition avancée
 *
 */

include_once ('Personne.php');
include_once ('FormateurHeritage.php');
include_once ('Formation.php');
include_once ('Stagiaire.php');
//Rendre fonctionnel le code suivant: modifier les fichier Personne, Formateuret Stagiaire 
$personne = new FormateurHeritage("Thierry","BRU","Vierzon","informatique");
$formationDWWM= new Formation("DWWM-Vierzon",$personne);
$formationDWWM->addStagiaire(new Stagiaire('Martin','PAUL','Bourges',2023));
$formationDWWM->addStagiaire(new Stagiaire('Lucette','JOBARD','Vierzon',2023));
echo $formationDWWM;
/**
 * Résultat attendu:{"titre":"DWWM-Vierzon","formateur":{"_prenom":"Thierry","_nom":"BRU","_ville":"Vierzon","specialite":"informatique"},"stagiaires":{"0":{"_prenom":"Martin","_nom":"PAUL","_ville":"Bourges","anneeSession":2023},"1":{"_prenom":"Lucette",
 * "_nom":"JOBARD","_ville":"Vierzon","anneeSession":2023}}}
 */
?>


