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
    <link rel="stylesheet" href="  css\main.css">
    <link rel="stylesheet" href="  css\ecrire.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="css\404.css">
    <link rel="stylesheet" href="assets\node_modules\bootstrap\dist\css\bootstrap.min.css">

    <title>Document</title>
</head>
<body>
    
    <header>
        <nav>
            <?php include 'views/navbar.php'; ?>
        </nav>
    </header>
    <main>
        <div class="page-content p-5" id="content">
            <!-- Toggle button -->
            <button id="sidebarCollapse" type="button" class="btn btn-dark bg-dark rounded-pill shadow-sm mb-4"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold"></small><i class="fa fa-arrow-right" id="tog"></i></button>
            <?php echo $content; ?>
        </div>
    </main>
    <footer></footer>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="assets\node_modules\bootstrap\dist\js\bootstrap.min.js"></script>  
    <script src="js/script.js"></script>
</body>

</html>