<?php
    require "fonction.php"
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Exercice 2</h1>
    <p>La somme des valeurs du tableau est: <?php echo sommeValeursDuTableau($tableauNombre); ?></p>
    <p>La moyenne des valeurs du tableau est: <?php echo moyenneValeursDuTableau($tableauNombre); ?></p>
    <p>L'écart type des valeurs du tableau est: <?php echo ecartTypeValeursDuTableau($tableauNombre); ?></p>
    
</body>
</html>