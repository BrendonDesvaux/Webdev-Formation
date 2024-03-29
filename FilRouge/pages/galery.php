<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Site d'entrainement bootstrap'">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="../3rdParties/turnjs4/samples/basic/css/basic.css">
    <link rel="stylesheet" href="../css/galery.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" defer integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <title>Red Rind</title>
</head>

<body>
    <header>
        <!-- Vertical navbar -->
        <div class="vertical-nav bg-dark" id="sidebar">
            <a href="../index.php">
                <div class="py-4 px-3 mb-4 bg-dark">
                    <div class="media-body ">
                        <img class="mb-0" src="../img/logo.png" width="80%">
                        <p class="font-weight-grey text-muted mb-0">Feel the red.</p>
                    </div>
                </div>
            </a>

            <p class="text-white font-weight-bold text-uppercase px-3 small pb-4 mb-0">Gallery</p>

            <ul class="nav flex-column bg-dark mb-0">
                <li class="nav-item">
                    <a href="#" class="nav-link text-light font-italic bg-dark">
                        <i class="fa fa-th-large mr-3 text-danger fa-fw"></i> Mes creations
                    </a>
                </li>
                <li class="nav-item">
                    <a href="galery.php" class="nav-link text-light font-italic">
                        <i class="fa fa-address-card mr-3 text-danger fa-fw"></i> Creation du peuple
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-light font-italic">
                        <i class="fa fa-cubes mr-3 text-danger fa-fw"></i> Must read
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-dark font-italic">
                        <i class="fa fa-picture-o mr-3 text-danger fa-fw"></i> Surprise
                    </a>
                </li>
            </ul>

            <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Options</p>

            <ul class="nav flex-column bg-dark mb-0">
                <li class="nav-item">
                    <a href="#" class="nav-link text-light font-italic">
                        <i class="fa fa-area-chart mr-3 text-danger fa-fw"></i> Moi
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-light font-italic">
                        <i class="fa fa-bar-chart mr-3 text-danger fa-fw"></i> Mes livres
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-light font-italic">
                        <i class="fa fa-pie-chart mr-3 text-danger fa-fw"></i> Une idée
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-light font-italic">
                        <i class="fa fa-line-chart mr-3 text-danger fa-fw"></i> Une autre
                    </a>
                </li>
            </ul>
        </div>
        <!-- End vertical navbar -->
    </header>
    <main>


        <!-- Page content holder -->
        <div class="page-content p-5" id="content">
            <!-- Toggle button -->
            <button id="sidebarCollapse" type="button" class="btn btn-dark bg-dark rounded-pill shadow-sm mb-4"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold"></small><i class="fa fa-arrow-right" id="tog"></i></button>
            <div class='list-inline'>
                <div class='book'>
                    <div class="bookTitle">
                        <span><b>T</b>itre du livre</span>
                    </div>
                    <img src='../img/bookc.png' />
                </div>

                <div class='book'>
                    <div class="bookTitle">
                        <span>Titre du livre</span>
                    </div>
                    <img src='../img/book3.png' />
                </div>
                <div class='book'>
                    <div class="bookTitle">
                        <span>Titre du livre</span>
                    </div>
                    <img src='../img/book2.png' />
                </div>
                <div class='book'>
                    <div class="bookTitle">
                        <span>Titre du livre</span>
                    </div>
                    <img src='../img/bookc.png' />
                </div>

                <div class='book'>
                    <div class="bookTitle">
                        <span>Titre du livre</span>
                    </div>
                    <img src='https://d.gr-assets.com/books/1348927776l/8032112.jpg' />
                </div>

                <div class='book'>
                    <div class="bookTitle">
                        <span>Titre du livre</span>
                    </div>
                    <img src='http://ecx.images-amazon.com/images/I/51oXKWrcYYL.jpg' />
                </div>
                <div class='book'>
                    <div class="bookTitle">
                        <span>Titre du livre</span>
                    </div>
                    <img src='../img/bookc.png' />
                </div>

                <div class='book'>
                    <div class="bookTitle">
                        <span>Titre du livre</span>
                    </div>
                    <img src='../img/book3.png' />
                </div>
                <div class='book'>
                    <div class="bookTitle">
                        <span>Titre du livre</span>
                    </div>
                    <img src='https://d.gr-assets.com/books/1348927776l/8032112.jpg' />
                </div>

                <div class='book'>
                    <div class="bookTitle">
                        <span>Titre du livre</span>
                    </div>
                    <img src='http://ecx.images-amazon.com/images/I/51oXKWrcYYL.jpg' />
                </div>
            </div>
        </div>
    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="../3rdParties/turnjs4/lib/turn.min.js"></script>
    <script src="../js/script.js"></script>

</body>

</html>