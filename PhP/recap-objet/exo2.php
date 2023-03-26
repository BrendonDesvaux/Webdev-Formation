<?php
/** EXERCICE n°2 - Définition d'un constructeur */

include_once ('Personne.php');
include_once ('Formateur.php');
include_once ('Stagiaire.php');
//Rendre fonctionnel le code suivant: modifier les fichier Personne, Formateur et Stagiaire
$personne = new Formateur("Thierry","BRU","Vierzon","informatique");
echo json_encode($personne);
/**
 * Résultat attendu:{"nom":"BRU","prenom":"Thierry","ville":"Vierzon","specialite":"informatique"}
 */
?>


