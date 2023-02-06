<?php
    require "fonction.php";
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
    <h1>Individu</h1>
    <ul>
        <?php foreach($individu as $key => $value): ?>
            <li>
                <?= $key ?> : <?= $value ?>
            </li>
        <?php endforeach; ?>
    </ul>
    <h1>Individus</h1>
    <ul>
        <?php foreach($individus as $individu): ?>
            <li>
                <ul>
                    <?php foreach($individu as $key => $value): ?>
                        <li>
                            <?= $key ?> : <?= $value ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>