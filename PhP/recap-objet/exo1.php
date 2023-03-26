<?php
/** EXERCICE n°1 - Définition d'une classe */

include_once ('Personne.php');
include_once ('Formateur.php');
include_once ('Stagiaire.php');
//Rendre fonctionnel le code suivant: modifier les fichier Personne, Formateur et Stagiaire
$personne = new Formateur();
$personne->nom="BRU";
$personne->prenom="Thierry";
echo json_encode($personne);
/**
 * Résultat attendu:{"nom":"BRU","prenom":"Thierry","ville":null}
 */
?>


