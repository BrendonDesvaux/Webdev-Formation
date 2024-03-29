<?php

namespace App\Entity;

use App\Repository\AvatarRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AvatarRepository::class)]
class Avatar
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom_ficher = null;

    #[ORM\OneToMany(mappedBy: 'avatar', targetEntity: Personnage::class)]
    private Collection $personnages;

    public function __construct()
    {
        $this->personnages = new ArrayCollection();
    }
    public function __toString()
    {
        return $this->nom_ficher;
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomFicher(): ?string
    {
        return $this->nom_ficher;
    }

    public function setNomFicher(string $nom_ficher): self
    {
        $this->nom_ficher = $nom_ficher;

        return $this;
    }

    /**
     * @return Collection<int, Personnage>
     */
    public function getPersonnages(): Collection
    {
        return $this->personnages;
    }

    public function addPersonnage(Personnage $personnage): self
    {
        if (!$this->personnages->contains($personnage)) {
            $this->personnages->add($personnage);
            $personnage->setAvatar($this);
        }

        return $this;
    }

    public function removePersonnage(Personnage $personnage): self
    {
        if ($this->personnages->removeElement($personnage)) {
            // set the owning side to null (unless already changed)
            if ($personnage->getAvatar() === $this) {
                $personnage->setAvatar(null);
            }
        }

        return $this;
    }
}
