<?php
    function afficherBook(){
        // Create a buffer to store the html code
        ob_start();
        // Get all books from the DB
        $books = BookDB::lister();
        // Include one view for each book
        foreach($books as $book){
            include 'views/book-main.php';
        }
        // Store the buffer in the variable $content
        $content = ob_get_clean();
        // Include the layout view
        include 'views/layout.php';
    }

    function afficherUnBook($id){
        // Create a buffer to store the html code
        ob_start();
        // Get the book from the DB
        $book = BookDB::lire($id);
        // If the book doesn't exist
        if($book == null){
            // Include the 404 view
            include 'views/404.php';
        }else{
            // Include the book-main view
            include 'views/book-main.php';
        }
        // Store the buffer in the variable $content
        $content = ob_get_clean();
        // Include the layout view
        include 'views/layout.php';
    }
?>