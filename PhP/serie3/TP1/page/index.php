<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../../TP1/img/icon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../css/style.css">
    <script src="../js/script.js" defer></script>
    <title>RemiLePlusBeau</title>
</head>
<body>
    <form action="../php/reponse.php" method="post" id="formPost"> 
        <div>
            <select name="genre" id="genreSelect">
                <option value=""></option>
                <option value="homme">M.</option>
                <option value="femme">Mme</option>
            </select>
            <label for="nom">Nom <span>*</span></label>
            <input type="text" name="nom" id="nomInput" placeholder="Dupont" required>
        </div>
        <span id="NaName">Your name isn't a name?</span>
        <div>
            <label for="prenom">Prénom <span>*</span></label>
            <input type="text" name="prenom" id="prenomInput" placeholder="James" required>
        </div>
        <span id="NaSName">Your surname isn't a surname?</span>
        <div>
            <label for="birtdate">Votre Année de naissance <span>*</span></label>
            <input type="date" name="annee" id="anneeInput" placeholder="10/12/1999" required>
        </div>
        <span id="NaBD">Your birthdate isn't a birthdate?</span>
        <div>
            <label for="identifiant">Donnez un identifiant <span>*</span></label>
            <input type="text" name="identifiant" id="identifiantInput" placeholder="Nom.Prenom" required>
        </div>
        <span id="NaUN">Your username isn't a username?</span>
        <div>
            <label for="mdp">Donnez un mot de passe <span>*</span></label>
            <input type="password" name="mdp" id="mdpInput" required>
        </div>
        <span id="NaP">Your password isn't a password? You need 8 at least 8 char, a maj, a number and a lower</span>
        <div>
            <label for="sexe">Sexe:</label>
            <input type="radio" name="sexe" id="sexeInputH" value="Centimètre(s)">
            <label for="masculin">centimètre(s)</label>
            <input type="radio" name="sexe" id="sexeInputF" value="Mètre(s)">
            <label for="feminin">Mètre(s)</label>
        </div>
        <div>
            <input type="checkbox" name="ikr" id="ikr" required>
            <label for="ikr">J'ai lu et j'accepte les conditions d'utilisation <span>*</span></label>
        </div>
        <span id="NaA">You didn't read the conditions?</span>
        <input type="submit" value="Envoyer">     
    </form>
</body>
</html>