<?php
/** EXERCICE n°6 - Composition */

include_once ('Personne.php');
include_once ('Formateur.php');
include_once ('Formation.php');
include_once ('Stagiaire.php');
//Rendre fonctionnel le code suivant: modifier les fichier Personne, Formateur et Stagiaire
$personne = new Formateur("Thierry","BRU","Vierzon","informatique");
$formationDWWM= new Formation("DWWM-Vierzon",$personne);
echo $formationDWWM;
/**
 * Résultat attendu:{"titre":"DWWM-Vierzon","formateur":{"nom":"BRU","prenom":"Thierry","ville":"Vierzon","specialite":"informatique"}}
 */
?>


