<?php
class User {
    public int $id; // The id of the user
    public String $nom; // The username of the user
    public String $prenom; // The password of the user

    public function _getName() {
        return $this->nom;
    }

    public function _getPrenom() {
        return $this->prenom;
    }

    public function __construct($id, $nom, $prenom) {
        $this -> id = $id;
        $this->nom = htmlentities($nom); // htmlentities() is used to prevent XSS attacks and add accents
        $this->prenom = $prenom;
    }
}
?>