<?php
class Formation {
    private $_titre;
    private $_formateur;
    private $_stagiaires;

    public function __construct(string $titre, FormateurHeritage $formateur) {
        $this->_titre = $titre;
        $this->_formateur = $formateur;
        $this->_stagiaires = array();
    }

    public function addStagiaire(Stagiaire $stagiaire) {
        $this->_stagiaires[] = $stagiaire;
    }

    public function __toString() {
        $result = array(
            'titre' => $this->_titre,
            'formateur' => array(
                '_prenom' => $this->_formateur->getPrenom(),
                '_nom' => $this->_formateur->getNom(),
                '_ville' => $this->_formateur->getVille(),
                'specialite' => $this->_formateur->getSpecialite()
            ),
            'stagiaires' => array()
        );
        foreach ($this->_stagiaires as $key => $value) {
            $result['stagiaires'][$key] = array(
                '_prenom' => $value->getPrenom(),
                '_nom' => $value->getNom(),
                '_ville' => $value->getVille(),
                'anneeSession' => $value->getAnneeSession()
            );
        }
        return json_encode($result);
    }
}
?>
