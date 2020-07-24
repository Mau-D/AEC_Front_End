<!--animaux.php-->
<!--exercice vétérinaire-->
<!--Maud Harvey-->
<!--10 juin 2020-->
<?php
//Test de connexion
    include_once "include/config.php";

  //Pour l'ajout
  // Vérification que la page a été soumise et que tous les champs sont présents
    if(isset($_POST['ajoutSubmit']) && isset($_POST['nom']) && isset($_POST['date_naissance']) && isset($_POST['typesId']) && isset($_POST['proprietairesId'])) {
      $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
      if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
          echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
      }
         // Création d'une requête préparée
        //******Les données des clés étrangères sont constantes en attente des notes pour le fonctionnement******
      if ($requete = $mysqli->prepare("INSERT INTO animaux(nom, date_naissance, fk_types, fk_proprietaires) VALUES(?, ?, ?, ?)")) {      
        /************************* ATTENTION **************************/
        /* On ne fait présentement peu de validation des données.     */
        /* On revient sur cette partie dans les prochaines semaines!! */
        /**************************************************************/
        $requete->bind_param("ssii", $_POST['nom'], $_POST['date_naissance'], $_POST['typesId'], $_POST['proprietairesId']);
            if($requete->execute()) { // Exécution de la requête
            $messageAjout = "<div class='alert alert-success'>Animal ajouté</div>";  // Message ajouté dans la page en cas d'ajout réussi
            } else {
          $messageAjout =  "<div class='alert alert-danger'>Une erreur est survenue lors de l'ajout.</div>";  // Message ajouté dans la page en cas d’échec
        }
        $requete->close(); // Fermeture du traitement
      } else  {
        echo $mysqli->error;
      }
      $mysqli->close(); // Fermeture de la connexion
    }
//Pour la suppression
    if (isset($_POST['supprSubmit']) && isset($_POST['id'])) {
      $message = '';
      $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
      if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
          echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
      } 
      
      if ($requete = $mysqli->prepare("DELETE FROM animaux WHERE id=?")) {  // Création d'une requête préparée 
        /************************* ATTENTION **************************/
        /* On ne fait présentement peu de validation des données.     */
        /* On revient sur cette partie dans les prochaines semaines!! */
        /**************************************************************/
        $requete->bind_param("i", $_POST['id']); // Envoi des paramètres à la requête. 

        if($requete->execute()) { // Exécution de la requête
          $messageDelete = "<div class='alert alert-success'>Animal supprimé</div>";  // Message ajouté dans la page en cas d'ajout réussi
        } else {
          $messageDelete =  "<div class='alert alert-danger'>Une erreur est survenue lors de la suppression.</div>";  // Message ajouté dans la page en cas d'ajout en échec
        }

        $requete->close(); // Fermeture du traitement
      } else  {
        echo $mysqli->error;
      }
  
      $mysqli->close(); // Fermeture de la connexion 
  
    } 

    //Pour l'Affichage des animaux
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

    <title>Animaux</title>
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
  <!-- Créez une page qui affiche la liste des animaux avec leur nom, leur type, le nom et le
téléphone de leur propriétaire sous forme de tableau -->
 <!-- Bouton d'ajout -->
    <div>
      <button href="ajout_animal.php" class="btn btn-primary float-right" type="button" data-toggle="modal" data-target="#modalAjout">
        <svg class="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
          <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
        </svg>
          Ajouter un animal
      </button>
    </div>
      <!-- Message affiché lors de l'ajout ou de la suppression -->
    <?php echo $messageAjout ?>
    <?php echo $messageDelete ?>
    <h1 class="text-center">Animaux</h1>
    <?php  //AS est utilisé pour renommer le champ nom de la table animaux par animaux_nom
      $res = $mysqli->query("SELECT animaux.id, animaux.nom AS animaux_nom, types.type, proprietaires.nom, proprietaires.prenom, proprietaires.telephone FROM animaux INNER JOIN types ON animaux.fk_types=types.id INNER JOIN proprietaires ON animaux.fk_proprietaires=proprietaires.id");
        echo "<table class='table'>";

          // Affichage de l'entête du tableau
          echo "<tr>";
          echo "<th>Nom de l'animal</th>";
          echo "<th>Type</th>";
          echo "<th>Nom du propriétaire</th>";
          echo "<th>Prénom du propriétaire</th>";
          echo "<th>Téléphone du propriétaire</th>";
          echo "</tr>";
          
          while ($row = $res->fetch_assoc()) {
              echo "<tr>";
              echo "<td>" . $row["animaux_nom"] . "</td>";
              echo "<td>" . $row["type"] . "</td>";
              echo "<td>" . $row["nom"] . "</td>";
              echo "<td>" . $row["prenom"] . "</td>";
              echo "<td>" . $row["telephone"] . "</td>";
                    // Nouveau ! Boutons d'action dans la dernière colonne
              echo '<td class="text-center">';

                  // bouton afficher
                echo '<button type="button" class="btn btn-default boutonAfficher" data-toggle="modal" data-id="' . $row["id"] . '" data-target="#modalAffichage">';                
                echo '<svg class="bi bi-eye" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
                echo '<path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>';
                echo '<path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>';
                echo '</svg>';
                echo '</button>';

                // bouton modifier
                echo '<button type="button" class="btn btn-default boutonMAJ" data-toggle="modal" data-id="' . $row["id"] . '" data-target="#modalMAJ">';
                echo '<svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
                echo '<path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>';
                echo '<path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>';
                echo '</svg>';
                echo '</button>';

                // bouton supprimer
                echo '<button type="button" class="btn btn-default boutonSupprimer" data-toggle="modal" data-id="' . $row["id"] . '" data-target="#modalSuppr">';
                echo '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
                echo '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>';
                echo '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>';
                echo '</svg>';
                echo '</button>';
               

               
              echo '</td>';
              echo "</tr>";
          }
        echo "</table>";
  ?>

<!-- Modal pour l'affichage -->
    <div id="modalAffichage" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Fiche de l'animal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row m-2">
            <div class="col-lg-5 border">
              Image(s) ici
            </div>
            <div class="col-lg-7">
              <h3><span id="nom_affichage"></span></h3>
              <h5><span id="date_affichage"></span></h5>
              <p>Dossier médical...</p>
            </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>    
    </div>
<!-- Modal pour l'ajout d'un animal -->
    <div id="modalAjout" class="modal" tabindex="-1" role="dialog"> 
    	<form class="needs-validation" method="post" novalidate>
        <div class="modal-dialog mw-100 w-50" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Ajout d’un animal</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="nom">Nom de l'animal *</label>
                      <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                  <input type="text" class="form-control" id="nom" name="nom" minlength="2" required maxlength="25">
                  <div class="invalid-feedback">
                  Le nom est requis et doit comporter entre 2 et 25 caractères. 
                  </div>
                </div>
                <div class="col-md-8 mb-3">
                  <label for="date_naissance">Date de naissance *</label>
                      <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                  <input type="date" class="form-control" id="date_naissance" name="date_naissance" required >
                  <div class="invalid-feedback">
                La date de naissance est requise avec le format AAAA-MM-JJ. <!--changer le type pour date ???? voir pour ajouter validation html -->
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="fk_types">Type de l'animal *</label>
                  <?php
                    $mysqli = new mysqli($host, $username, $password, $database);
                    // Vérifier la connexion
                    if ($mysqli -> connect_errno) {
                      echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
                        exit();
                    }
                    $res = $mysqli->query("SELECT id, type FROM types ORDER BY type");
                    echo '<select class="form-control" name="typesId">' ;
                    echo '<option value="-1">Sélectionnez le type d\'animal</option>' ;
                    while ($row = $res->fetch_assoc ()) {
                      echo '<option value="' . $row["id"] . '">' . $row["type"] .'</option>' ;
                    }
                      echo '</select>' ;
                  ?>
                </div>              
                <div class="col-md-8 mb-3">
                  <label>Nom du propriétaire *</label>
                    <?php
                      $mysqli = new mysqli($host, $username, $password, $database);
                      // Vérifier la connexion
                      if ($mysqli -> connect_errno) {
                      echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
                      exit();
                      }
                      $res = $mysqli->query("SELECT id, nom, prenom FROM proprietaires ORDER BY nom");
                      echo '<select class="form-control" name="proprietairesId">' ;
                      echo '<option value="-1">Sélectionnez un propriétaire</option>' ;
                      while ($row = $res->fetch_assoc ()) {
                      echo '<option value="' . $row["id"] . '">' . $row["nom"] . " " . $row["prenom"] .'</option>' ;
                      }
                      echo '</select>' ;
                    ?>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary" name="ajoutSubmit">Ajouter l'animal</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- Modal pour la suppression -->
    <div id="modalSuppr" class="modal" tabindex="-1" role="dialog"> 
      <div class="modal-dialog mw-100 w-50" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Suppression d'un animal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
           <p>Voulez-vous vraiment supprimer cet animal?</p>
          </div>
          <div class="modal-footer">
            <form method="POST">
                <input type="hidden" id="idAnimalASupprimer" name="id">
                <button class="btn btn-danger" name="supprSubmit" type="submit">Oui</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
 

      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>    
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script> 
    <script>
      console.log('script');

      $(document).on("click", ".boutonSupprimer", function () {
        console.log('suppression' + $(this).data('id'));
        $("#idAnimalASupprimer").val($(this).data('id'));
        });
      
      $(document).on("click", ".boutonAfficher", function () {
        console.log($(this).data('id'));
        var url = "ajax/get_animal.php?id=" + $(this).data('id');
        $.get(url, function( data ) {
          console.log(data);
          console.log(data.nom);
          console.log(data.date_naissance);
          $("#nom_affichage").html(data.nom);
          $("#date_affichage").html(data.date_naissance);
        });
      });
    </script>
  </body>
</html>
