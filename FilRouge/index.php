<?php
require_once 'sql/config.php';
require_once 'sql/database.php';
require_once 'php/bookDB.php';
require_once 'php/book_class.php';
require_once 'controller/bookController.php';
require_once 'php/userDB.php';
require_once 'php/user_class.php';
require_once 'controller/userController.php';
require_once 'controller/viewController.php';



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
    <?php 
        // Charger le contrôleur approprié en fonction de la route demandée
        $current_url = $_SERVER['REQUEST_URI'];
            if(isset($current_url)){
            switch ($current_url) {
                case '/filrouge/':
                    homeController();
                    break;
                case '/filrouge/book':
                    afficherUnBook(5);
                    break;
                case '/filrouge/galery':
                    galeryController();
                    break;
                case '/filrouge/mes-creations':
                    creationController();
                    break;
                case '/filrouge/favoris':
                    favorisController();
                    break;
                case '/filrouge/creation':
                    writingController();
                    break;
                case '/filrouge/creation2':
                    writingControllerSecond();
                    break;
                case '/filrouge/profil':
                    profilController();
                    break;
                default:
                    http_response_code(404);
                    fofController();
                    break;
            }
        }
    ?>
</body>

</html>