<?php
    require "fonction.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        span {
            margin: 2.5%;
            font-size: 1.03em;
        }
    </style>
</head>
<body>
    <ul>
        <?php foreach($listeFilms as $titre => $film): ?>
            <li>
                <?= $titre ?> : 
                <br><span><?= $film[""] ?>,</span> 
                <br>Year: <?= $film["Annee"] ?>, 
                <br>Rating: <?= $film["Note"] ?>
            </li>
        <?php endforeach; ?>
    </ul>
    
</body>
</html>