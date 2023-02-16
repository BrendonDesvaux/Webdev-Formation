<?php
    function afficherUsers(){
        // Create a buffer to store the html code
        ob_start();
        // Get all users from the DBx
        $users = UserDB::lister();
        // Include one view for each user
        foreach($users as $user){
            include 'views/crud.php';
        }
        // Store the buffer in the variable $content
        $content = ob_get_clean();
        // Include the layout view
        include 'views/layout.php';
    }
    function afficherUnUser($id){
        // Create a buffer to store the html code
        ob_start();
        // Get the book from the DB
        $user = UserDB::lire($id);
        // If the book doesn't exist
        if($user == null){
            // Include the 404 view
            include 'views/404.php';
        }else{
            // Include the crud view
            include 'views/crud.php';
        }
        // Store the buffer in the variable $content
        $content = ob_get_clean();
        // Include the layout view
        include 'views/layout.php';
    }
?>