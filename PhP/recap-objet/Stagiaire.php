<?php
class Stagiaire extends Personne
{
    private $anneeSession;

    public function __construct(string $prenom,string $nom,string $ville,string $anneeSession)
    {
        parent::__construct($prenom, $nom, $ville);
        $this->setAnneeSession($anneeSession);
    }

    public function getAnneeSession()
    {
        return $this->anneeSession;
    }

    public function setAnneeSession(string $anneeSession)
    {
        $this->anneeSession = $anneeSession;
    }

    public function __toString()
    {
        return json_encode($this);
    }
}
?>
