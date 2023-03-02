<?php
class BookDB{

   static function lister()
   {
        try
        {
            $stmt = Database::getInstance()->query("SELECT * FROM books;"); // Get all the books from the database
            $resultBook = $stmt->fetchAll(); 
            $listeBooks = new ArrayObject(); // Create a new ArrayObject
            foreach($resultBook as $value){ // For each book in the database
                $book = new Book($value['id'],$value['title'], $value['author'], $value['pages'], $value['chapterTitle'], $value['chapterContent'], $value['resume'], $value['cover']);
                // var_dump($book);
                $listeBooks -> append($book); // Add the book to the array
            }
            return $listeBooks; // Return the array
        }
        catch(PDOException $e)
        {
            $message = $e->getMessage();
            include 'views/errors.php';
            return false; 
        }
    }
   static function lire($id)
   {
   
        if(!is_numeric($id)||$id<=0)
            return false;
       try {
        // Prepare the SQL statement to get the book
        $stmt = Database::getInstance()->prepare("SELECT * FROM books WHERE id = :id;");
        $stmt->bindParam(':id', $id);
        $stmt->execute(); // Execute the SQL statement
        $resultBook = $stmt->fetch(); // Get the book
        
        // If value is not false then we create a new book
        if ($resultBook) {
            $book = new Book($resultBook['id'],$resultBook['title'], $resultBook['author'], $resultBook['pages'], $resultBook['chapterTitle'], $resultBook['chapterContent'], $resultBook['resume'], $resultBook['cover']);
            return $book;
        } else {
            return false;
        }
        } catch(PDOException $e) {
            $message = $e->getMessage();
            include 'views/errors.php';
            return false; 
        }
   }
}
?>