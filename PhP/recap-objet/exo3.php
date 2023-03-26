<?php
/** EXERCICE n°3 - Définition d'une méthode publique */

include_once ('Personne.php');
include_once ('Formateur.php');
include_once ('Stagiaire.php');
//Rendre fonctionnel le code suivant: modifier les fichier Personne, Formateur et Stagiaire
$personne = new Formateur("Thierry","BRU","Vierzon","informatique");
echo $personne->saluer();
/**
 * Résultat attendu:le formateur s'appelle Thierry BRU et enseigne: informatique
 */
?>


