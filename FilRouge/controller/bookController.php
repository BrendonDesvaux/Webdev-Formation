<?php
    function afficherBook(){
        ob_start();
        $json = file_get_contents('json/books.json');
        $bookJson = json_decode($json);
        $i=0;
        foreach($bookJson -> books as $book)
        {
            $booke = new Book($book -> title, $book -> author, $book -> pages, $book -> chapterTitle, $book -> chapterContent, $book -> resume);
           include 'views/book-main.php';
           $i++;
        }
        $content = ob_get_clean();
        include 'views/layout.php';
    }
    function afficherUnBook($id){
        ob_start();
        $json = file_get_contents('json/books.json');
        $bookJson = json_decode($json);
        $book = $bookJson -> books[$id];
        $booke = new Book($book -> title, $book -> author, $book -> pages, $book -> chapterTitle, $book -> chapterContent, $book -> resume);
        include 'views/book-main.php';
        $content = ob_get_clean();
        include 'views/layout.php';
    }
?>