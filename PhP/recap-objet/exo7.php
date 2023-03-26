<?php
/** EXERCICE n°7 - Héritage
 * Pour cet exercice, la classe Formateur est à refaire dans le fichier FormateurHeritage.php;
 */

include_once ('Personne.php');
include_once ('FormateurHeritage.php');
include_once ('Formation.php');
include_once ('Stagiaire.php');
//Rendre fonctionnel le code suivant: modifier les fichier Personne, Formateuret Stagiaire 
$personne = new FormateurHeritage("Thierry","BRU","Vierzon","informatique");
$formationDWWM= new Formation("DWWM-Vierzon",$personne);
echo $formationDWWM;
/**
 * Résultat attendu:{"titre":"DWWM-Vierzon","formateur":{"_prenom":"Thierry","_nom":"BRU","_ville":"Vierzon","specialite":"informatique"}}
 */
?>


