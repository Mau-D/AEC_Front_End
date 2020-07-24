<!--rendezVous.php-->
<!--exercice vétérinaire-->
<!--Maud Harvey-->
<!--10 juin 2020-->
<?php
//Test de connexion
include_once "include/config.php";
//Pour l'ajout
// Vérification que la page a été soumise et que tous les champs sont présents
    if(isset($_POST['ajoutSubmit2']) && isset($_POST['date_heure']) && isset($_POST['duree']) && isset($_POST['raison']) && isset($_POST['veterinairesId']) && isset($_POST['animauxId'])) {
        $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
        if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
            echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
        }
        // Création d'une requête préparée
    if ($requete = $mysqli->prepare("INSERT INTO rendez_vous(date_heure, duree, raison, fk_veterinaires, fk_animaux) VALUES(?, ?, ?, ?, ?)")) {

        $requete->bind_param("sisii", $_POST['date_heure'], $_POST['duree'], $_POST['raison'], $_POST['veterinairesId'], $_POST['animauxId']);
        if($requete->execute()) { // Exécution de la requête
            $messageAjout = "<div class='alert alert-success'>Rendez-vous ajouté</div>";  // Message ajouté dans la page en cas d'ajout réussi
        } else {
            $messageAjout =  "<div class='alert alert-danger'>Une erreur est survenue lors de l'ajout.</div>";  // Message ajouté dans la page en cas d’échec
        }
        $requete->close(); // Fermeture du traitement
    } else  {
        echo $mysqli->error;
    }
    $mysqli->close(); // Fermeture de la connexion
}


//Pour l'Affichage des rendez-vous
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

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Rendez-vous</title>

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
      <div class="container mt-3">
          <div class="row text-center">
              <div class="col-12">
                  <h1>Liste des rendez-vous</h1>
              </div>
              <div class="col">
                  <!-- Nouveau ! Bouton d'ajout pour le modal -->
                  <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#modalAjout">
                      <svg class="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                          <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                      </svg>
                      Ajouter un rendez-vous
                  </button>
              </div>
          </div>
      </div>
      <?php echo $messageAjout ?>
    <!-- Créez une page qui affiche la liste des rendez-vous  en ordre
croissant de date/heure de rendez-vous en forme de tuiles (cards). -->
 <?php

    $res = $mysqli->query("SELECT rendez_vous.id, rendez_vous.date_heure, rendez_vous.duree, rendez_vous.raison, veterinaires.nom_complet, animaux.nom, types.type FROM rendez_vous INNER JOIN veterinaires ON veterinaires.id=rendez_vous.fk_veterinaires INNER JOIN animaux ON animaux.id=rendez_vous.fk_animaux INNER JOIN types ON types.id=animaux.fk_types ORDER BY date_heure");
    echo "<div class='container-fluid'>";
    echo "<div class='row'>";
    while ($row = $res->fetch_assoc()) {
        echo "<div class='col-3'>";
        echo "<div class='card w-100 mt-2'>";
        echo "<ul class='list-group list-group-flush'>";
        echo "<li class='list-group-item'>" . $row["date_heure"] . "</li>";
        echo "<li class='list-group-item'>" . $row["raison"] . "</li>";
        echo "<li class='list-group-item'>" . $row["duree"] . "</li>";
        echo "<li class='list-group-item'>" . $row["nom_complet"] . "</li>";
        echo "<li class='list-group-item'>" . $row["nom"] . "</li>";
        echo "<li class='list-group-item'>" . $row["type"] . "</li>";
        echo "</ul>";
        echo "</div>";
        echo "</div>";
     }
    echo "</div>";
    echo "</div>";
 ?>
  </main>
 <!-- Modal d'ajout pour un rendez-vous -->
     <div id="modalAjout" class="modal" tabindex="-1" role="dialog">
         <form class="needs-validation" method="post" novalidate>
             <div class="modal-dialog mw-100 w-50" role="document">
                 <div class="modal-content">
                     <div class="modal-header">
                         <h5 class="modal-title">Ajout d’un rendez-vous</h5>
                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                         </button>
                     </div>
                     <div class="modal-body">
                         <div class="form-row">
                             <div class="col-md-4 mb-3">
                                 <label for="date_heure">Date et heure du rendez-vous *</label>
                                 <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                                 <input type="datetime-local" class="form-control" id="date_heure" name="date_heure" required>
                                 <div class="invalid-feedback">
                                     La date et l'heure du rendez-vous sont requis
                                 </div>
                             </div>
                             <div class="col-md-8 mb-3">
                                 <label for="raison">Raison du rendez-vous *</label>
                                 <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                                 <input type="text" class="form-control" id="raison" name="raison" required minlength="2" maxlength="500">
                                 <div class="invalid-feedback">
                                     La raison du rendez-vous est requis et doit comporter entre 2 et 500 caractères.
                                 </div>
                             </div>
                         </div>
                         <div class="form-row">
                             <div class="col-md-4 mb-3">
                                 <label for="duree">Durée estimée en minute*</label>
                                 <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                                 <input type="number" step="30" class="form-control" id="duree" name="duree" min="30" max="360" required>
                                 <div class="invalid-feedback">
                                     La durée est requise.
                                 </div>
                             </div>
                             <div class="col-md-4 mb-3">
                                 <label>Nom du vétérinaire *</label>
                                 <?php
                                     $mysqli = new mysqli($host, $username, $password, $database);
                                     // Vérifier la connexion
                                     if ($mysqli -> connect_errno) {
                                         echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
                                         exit();
                                     }
                                     $res = $mysqli->query("SELECT id, nom_complet FROM veterinaires ORDER BY nom_complet");
                                     echo '<select class="form-control" name="veterinairesId">' ;
                                     echo '<option value="-1">Sélectionnez le nom de l\'animal</option>' ;
                                     while ($row = $res->fetch_assoc ()) {
                                         echo '<option value="' . $row["id"] . '">' . $row["nom_complet"] . '</option>' ;
                                     }
                                     echo '</select>' ;
                                 ?>
                             </div>
                             <div class="col-md-4 mb-3">
                                 <label>Nom de l'animal *</label>
                                    <?php
                                         $mysqli = new mysqli($host, $username, $password, $database);
                                         // Vérifier la connexion
                                         if ($mysqli -> connect_errno) {
                                             echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
                                             exit();
                                         }
                                         $res = $mysqli->query("SELECT id, nom FROM animaux ORDER BY nom");
                                         echo '<select class="form-control" name="animauxId">' ;
                                         echo '<option value="-1">Sélectionnez le nom de l\'animal</option>' ;
                                         while ($row = $res->fetch_assoc ()) {
                                             echo '<option value="' . $row["id"] . '">' . $row["nom"] . '</option>' ;
                                         }
                                         echo '</select>' ;
                                     ?>
                             </div>
                         </div>
                     </div>
                     <div class="modal-footer">
                         <button type="submit" class="btn btn-primary" name="ajoutSubmit2">Ajouter le rendez-vous</button>
                         <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    </div>
                 </div>
             </div>
         </form>
     </div>



    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>
