<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="  css\galery.css">
    <link rel="stylesheet" href="  css\error.css">
    <link rel="stylesheet" href="  css\crud.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="css\404.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Document</title>
</head>
<body>
    <nav>
        <?php include 'views/navbar.php'; ?>
    </nav>
    <header> header</header>
    <main>
        <div class="page-content p-5" id="content">
            <!-- Toggle button -->
            <button id="sidebarCollapse" type="button" class="btn btn-dark bg-dark rounded-pill shadow-sm mb-4"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold"></small><i class="fa fa-arrow-right" id="tog"></i></button>
            <?=$content?>
        </div>
    </main>
    <footer>footer</footer>

    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>