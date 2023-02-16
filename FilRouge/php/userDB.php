<?php
class UserDB{
    static function lister()
    {
        try
        {
            $stmt = Database::getInstance()->query("SELECT * FROM utilisateurs;"); // Get all the books from the database
            $result_user = $stmt->fetchAll(); 
            $listeUser = new ArrayObject(); // Create a new ArrayObject
            foreach($result_user as $value){ // For each book in the database
                $user = new User($value['id'],$value['nom'], $value['prenom']);
                // var_dump($book);
                $listeUser -> append($user); // Add the book to the array
            }
            return $listeUser; // Return the array
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
        $stmt = Database::getInstance()->prepare("SELECT * FROM utilisateurs WHERE id = :id;");
        $stmt->bindParam(':id', $id);
        $stmt->execute(); // Execute the SQL statement
        $result_user = $stmt->fetch(); // Get the book
        
        // If value is not false then we create a new book
        if ($result_user) {
            $user = new User($result_user['id'],$result_user['nom'], $result_user['prenom']);
            return $user;
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