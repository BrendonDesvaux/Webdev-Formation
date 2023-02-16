<?php
require_once 'sql/config.php';
require_once 'sql/database.php';
require_once 'php/bookDB.php';
require_once 'php/book_class.php';
require_once 'controller/bookController.php';
require_once 'php/userDB.php';
require_once 'php/user_class.php';
require_once 'controller/userController.php';
// $json = file_get_contents('json/books.json');
// $bookJson = json_decode($json);
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Wire Rind'">
    <link rel="icon" type="image/png" href="img/logo.png" />
    <title>Wire Rind</title>
</head>

<body>
    <!-- afficher via ?id=x dans l'url -->
                <?php 
        // Check if an id is set in the url
        if(isset($_GET['id'])){
            // If an id is set, display the book with this id
            afficherUnBook($_GET['id']);
        }else{
            // If no id is set, display all books
            afficherUsers();
        }
    ?>
</body>

</html>