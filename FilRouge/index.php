<?php
require_once 'php/book.class.php';
require_once 'controller/bookController.php';
$json = file_get_contents('json/books.json');
$bookJson = json_decode($json);
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Site d'entrainement bootstrap'">
    <title>Wire Rind</title>
</head>

<body>
            <?php 
            if(isset($_GET['id'])){
                afficherUnBook($_GET['id']);
            }else{
                afficherUnBook(0);
            }
            ?>
</body>

</html>