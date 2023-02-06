<?php
 require 'fonction.php';
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
    <?php 
        var_dump($tableau);
        var_dump($tab);
        var_dump($toto);
    ?>
    <ul>
    <?php
        foreach($tableau as $value)
        {?>
           <li><?=$value;?> </li>
        <?php
        }
    ?>
    </ul>
    <ul>
    <?php
    foreach($tab as $value)
    {
        foreach($value as $element)
        {
        ?>
        <li><?=$element;?></li>
    <?php
        }
    }?>
    </ul>
    <ul>
    <?php
    foreach($toto as $key=>$value)
    {?>
        <li><?=$key;?>=><?=$value;?></li>
    <?php
    }?>
    </ul>
</body>
</html>
