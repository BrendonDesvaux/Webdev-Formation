<?php

class Personne {
    protected $_nom;
    protected $_prenom;
    protected $_ville;

    public function __construct(string $prenom, string $nom, string $ville) {
        $this->_prenom = $prenom;
        $this->_nom = $nom;
        $this->_ville = $ville;
    }

    public function getNom() {
        return $this->_nom;
    }

    public function getPrenom() {
        return $this->_prenom;
    }

    public function getVille() {
        return $this->_ville;
    }

    public function setNom(string $nom) {
        $this->_nom = $nom;
    }

    public function setPrenom(string $prenom) {
        $this->_prenom = $prenom;
    }

    public function setVille(string $ville) {
        $this->_ville = $ville;
    }
}

?>
