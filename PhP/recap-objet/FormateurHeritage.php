<?php

include_once ('Personne.php');

class FormateurHeritage extends Personne {
    protected $_specialite;

    public function __construct(string $prenom, string $nom, string $ville, string $specialite) {
        parent::__construct($prenom, $nom, $ville);
        $this->_specialite = $specialite;
    }
    public function getspecialite()
    {
        return $this->_specialite;
    }
    public function set_specialite(string $_specialite)
    {
        $this->_specialite = $_specialite;
    }
    public function saluer()
    {
        return "Le formateur s'appelle {$this->_prenom} {$this->_nom} et enseigne : {$this->_specialite}";
    }
    public function __toString()
    {
        return "{$this -> _nom}:{$this -> _prenom}";
    } 
}

?>
