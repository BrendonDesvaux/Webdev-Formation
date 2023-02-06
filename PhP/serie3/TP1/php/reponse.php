
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php 
    //foreach element in $_POST as $key => $value return in ul li using strip_tags to avoid XSS
    foreach($_POST as $key => $value){
       //return in ul li using strip_tags to avoid XSS
         echo "<ul><li>".strip_tags($key)." : ".strip_tags($value)."</li></ul>";
    }
?>
</body>
</html>