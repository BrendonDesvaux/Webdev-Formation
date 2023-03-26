<?php
class Formateur extends Personne
{
    public string $_nom;
    public string $_prenom;
    public ?string $_ville;
    public string $_specialite;

    public function __construct(string $_nom,string $_prenom,string $_ville,string $_specialite)
    {
        parent::__construct($_nom, $_prenom, $_ville, $_specialite);
        $this->set_nom($_nom);
        $this->setPrenom($_prenom);
        $this->set_ville($_ville);
        $this->set_specialite($_specialite);
    }
    public function get_nom()
    {
        return $this->_nom;
    }

    public function set_nom(string $_nom)
    {
        $this->_nom = $_nom;
    }

    public function getPrenom()
    {
        return $this->_prenom;
    }

    public function setPrenom(string $_prenom)
    {
        $this->_prenom = $_prenom;
    }

    public function get_ville()
    {
        return $this->_ville;
    }

    public function set_ville(string $_ville)
    {
        $this->_ville = $_ville;
    }
    public function get_specialite()
    {
        return $this->_specialite;
    }
    public function set_specialite(string $_specialite)
    {
        $this->_specialite = $_specialite;
    }
    public function saluer():String
    {
        return "Le formateur s'appelle {$this->_prenom} {$this->_nom} et enseigne : {$this->_specialite}";
    }
    public function __toString()
    {
        return "{$this -> _nom}:{$this -> _prenom}";
    } 
}
?>
