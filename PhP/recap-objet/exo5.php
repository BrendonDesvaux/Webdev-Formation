<?php
/** EXERCICE n°5 - Getter et Setters */

include_once ('Personne.php');
include_once ('Formateur.php');
include_once ('Stagiaire.php');
//Rendre fonctionnel le code suivant: modifier les fichier Personne, Formateur et Stagiaire
$personne = new Formateur("Thierry","BRU","Vierzon","informatique");
echo $personne->getPrenom();
echo $personne->prenom;//resultat attendu: prénom doit être souligné de rouge par Visual Code
/**
 * Résultat attendu:ThierryPHP Fatal error:  Uncaught Error: Cannot access private property Formateur::$prenom  (et un long message d'erreur)
 */
?>


