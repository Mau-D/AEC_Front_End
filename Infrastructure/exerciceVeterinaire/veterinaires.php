<!--veterinaires.php-->
<!--exercice vétérinaire-->
<!--Maud Harvey-->
<!--10 juin 2020-->
<?php
//Test de connexion
    include_once "include/config.php";
    $mysqli = new mysqli($host, $username, $password, $database);
    // Vérifier la connexion
    if ($mysqli -> connect_errno) {
        echo "Échec de connexion à la base de données MySQL: " . $mysqli -> connect_error;
        exit();
    } 
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="style/style.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Vétérinaires</title>
  </head>
  <body>
  <header>
  <!-- menu contenant les 4 liens  -->
    <nav class="nav justify-content-center"> <!-- alignement centre -->
      <a class="nav-link active" href="index.php">Accueil</a>
      <a class="nav-link" href="veterinaires.php">Vétérinaires</a>
      <a class="nav-link" href="animaux.php">Animaux</a>
      <a class="nav-link" href="rendezVous.php">Rendez-vous</a>
    </nav>
  </header>
  <main>
  <!-- Créez une page qui affiche la liste des vétérinaires entre ordre alphabétique de nom,
prénom, à l’aide d’une liste à puces -->
    <h1 class="text-center">Vétérinaires</h1>
    <?php
    //Affichage en liste
    $res = $mysqli->query("SELECT nom_complet FROM veterinaires ORDER BY nom_complet");
   
    echo "<ul>";
    
    while ($row = $res->fetch_assoc()) {
        echo "<li>" . $row["nom_complet"]. "</li>";
    }
    echo "</ul>";
    ?>
  </main>




    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>
