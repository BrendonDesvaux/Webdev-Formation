<?php
  
$tableauNombre = [ 0, 1, 2, 3, 4, 5, 6 ];


function sommeValeursDuTableau($pTableau)
{
    //return array_sum($pTableau);
    $somme = 0;
    foreach($pTableau as $valeur)
    {
        $somme+=$valeur;
    }
    return $somme;
}

function moyenneValeursDuTableau($pTableau)
{
    return sommeValeursDuTableau($pTableau)/count($pTableau);
}

function ecartTypeValeursDuTableau($pTableau)
{
    $moyenne = moyenneValeursDuTableau($pTableau);
    $somme = 0;
    foreach($pTableau as $valeur)
    {
        $somme+=pow($valeur-$moyenne,2);
    }
    return sqrt($somme/count($pTableau));
}
?>
