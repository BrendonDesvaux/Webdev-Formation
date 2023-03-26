<?php
/** EXERCICE n°4 - surcharge d'une méthode existante:__toString() */

include_once ('Personne.php');
include_once ('Formateur.php');
include_once ('Stagiaire.php');
//Rendre fonctionnel le code suivant: modifier les fichier Personne, Formateur et Stagiaire
$personne = new Formateur("Thierry","BRU","Vierzon","informatique");
echo $personne;
/**
 * Résultat attendu:Thierry:BRU
 */
?>


