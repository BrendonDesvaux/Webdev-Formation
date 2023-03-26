<?php

namespace App\Controller;
use App\Entity\Personnage;
use App\Entity\Partie;
use App\Form\PersonnageType;
use App\Repository\AventureRepository;
use App\Repository\PersonnageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class JouerController extends AbstractController
{
    #[Route('/jouer', name: 'app_jouer')]
    public function index(PersonnageRepository $personnageRepository): Response
    {
        $personnages =$personnageRepository -> findAll();
        return $this->render('jouer/index.html.twig', [
            'personnages' => $personnages,
        ]);
    }
    #[Route('/new', name: 'app_jouer_new',  methods: ['GET', 'POST'])]
    public function newPersonnage(PersonnageRepository $personnageRepository, $request): Response
    {
        $personnage = new Personnage();
        $form = $this->createForm(PersonnageType::class, $personnage);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        $personnageRepository->save($personnage, true);

        return $this->redirectToRoute('app_jouer', [], Response::HTTP_SEE_OTHER);
    }
    #[Route('/jouer/aventures/{idPersonnage}', name: 'app_choix_aventure',  methods: ['GET'])]
    public function afficherAventure(PersonnageRepository $PersonnageRepository, AventureRepository $AventureRepository, $idPersonnage) : Response
    {
        $personnage = $PersonnageRepository->find($idPersonnage);
        $aventures = $AventureRepository->findAll();
        return $this->render('jouer/aventures.html.twig', [
            'personnage' => $personnage,
            'aventures' => $aventures,
        ]);
    }
    #[Route('/jouer/aventure/{idPersonnage}/{idAventure}', name:'app_start_aventure', methods:['GET'])]
    public function startAventure(PersonnageRepository $personnageRepository, AventureRepository $aventureRepository, PartieRepository $partieRepository, $idPersonnage, $idAventure): Response
    {
        $personnage = $personnageRepository->find($idPersonnage);
        $aventure = $aventureRepository->find($idAventure);
        $partie = new Partie();
        $partie->setPersonnage($personnage);
        $partie->setAventure($aventure);
        $partie->setEtat(1);
        $partieRepository->save($partie, true);
        return $this->redirectToRoute('app_partie_show', ['id' => $partie->getId()], Response::HTTP_SEE_OTHER);
    }
}
