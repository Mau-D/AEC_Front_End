<?php 
  include_once 'config.php'; 
  include_once 'code_php/utilisateurs/login.php'; 
  include_once 'code_php/utilisateurs/ajout.php'; 
?>


<!DOCTYPE html>
<html lang="fr-CA">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Nouvelles WEB</title>

  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

  <!-- Custom styles for this template -->
  <link href="css/modern-business.css" rel="stylesheet">
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="img/logo.png">

</head>

<body>

  <!-- Navigation -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="index.php">Nouvelles WEB</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="enonce.php">Énoncé</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Nouvelles
            </a>
            <?php
              $mysqli = new mysqli($host, $username, $password, $database);
              // Vérifier la connexion
              if ($mysqli -> connect_errno) {
                echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
                exit();
              }
              //Requête pour catégories de nouvelles
              $res = $mysqli->query("SELECT id, categorie FROM categories");
              echo '<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog" name="categorieID" id="categorieID">' ;
              while ($row = $res->fetch_assoc ()) {
                echo '<a class="dropdown-item" href="nouvelles_categorie.php?id=' . $row["id"] . '">' . $row["categorie"] .'</a>' ;
              }
              echo'<a class="dropdown-item" href="nouvelles.php">Toutes les nouvelles</a>';
              echo '</div>';
            ?>  
		      <li class="nav-item">
            <a class="nav-link" href="module_personnel.php">Artisans québecois</a>
          </li>
		  
      <!-- Le menu Administration doit s'afficher seulement lorsque l'utilisateur est connecté !-->
          <?php
            if(isset($_SESSION["utilisateur"])) {
          ?>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="administration_nouvelles.php" id="navbarDropdownPages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Administration
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPages">
                <a class="dropdown-item" href="administration_nouvelles.php">Nouvelles</a>
              </div>
            </li>
          <?php
          } 
        ?> 
        </ul>
        <ul class="navbar-nav ml-auto">
          <?php
            if(!isset($_SESSION["utilisateur"])) {
              
          ?> 
            <li class="nav-item ml-auto">
              <a class="nav-link text-light" href="#" data-toggle="modal" data-target="#modalInscription">Inscription</a>
            </li>     
            <li class="nav-item ml-auto">  
              <button class="btn btn-outline-info my-2 my-sm-0" data-toggle="modal" data-target="#modalConnexion">
                Connexion
              </button>
            </li>
          <?php
            } else {
          ?>
            <li class="nav-item mr-2"> 
              <span class="navbar-text">Bonjour <?php echo $_SESSION["utilisateur"]; ?>!</span>   
            </li>
            <li class="nav-item">  
              <form method="POST">
                <button type="submit" name="deconnexionSubmit" class="btn btn-sm btn-outline-primary">
                  Déconnexion
                </button>
              </form>
            </li>
          <?php
            }
          ?>
        </ul>
      </div>
    </div>
  </nav>

<!-- Formulaire de connexion -->
  <div class="modal" id="modalConnexion" tabindex="-1" role="dialog">
    <form class="needs-validation" novalidate method="POST">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Connexion</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-row">
              <div class="offset-md-2 col-md-8 mb-3">
                <label for="code_utilisateur">Nom utilisateur *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="text" class="form-control" id="utilisateur_login" name="utilisateur_login" required minlength="2" maxlength="100">
                <div class="invalid-feedback">
                  Le nom d'utilisateur doit comporter entre 2 à 100 caractères. 
                </div>
              </div> 
            </div>
            <div class="form-row">
              <div class="offset-md-2 col-md-8 mb-3">
                <label for="mot_de_passe">Mot de passe *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="password" class="form-control" id="mot_de_passe_login" name="mot_de_passe_login" required minlength="2" maxlength="60">
                <div class="invalid-feedback">
                  Le mot de passe doit comporter entre 2 à 60 caractères. 
                </div>
              </div> 
            </div>
          </div>     
          <div class="modal-footer">         
            <button type="submit" class="btn btn-primary" name="connexionSubmit">Connexion</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </form>
  </div>
<?php
  include_once 'modals/utilisateurs/ajout.php'; 
?>
