<!--Ce fichier n'est plus valide, il a été remplacé par un modal dans le fichier animaux.php-->


<!--ajout_animal.php-->
<!--exercice vétérinaire-->
<!--Maud Harvey-->
<!--24 juin 2020-->
<?php

    include_once 'include/config.php';

    $messageAjout = '';


    // Vérification que la page a été soumise et que tous les champs sont présents

    if(isset($_POST['nom']) && isset($_POST['date_naissance']) && isset($_POST['fk_types']) && isset($_POST['fk_proprietaires'])) {

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

        $requete->bind_param("ssii", $_POST['nom'], $_POST['date_naissance'], $_POST['fk_types'], $_POST['fk_proprietaires']);

      
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

?>



<!doctype html>
<html lang="fr-ca">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Ajout d'un animal</title>
  </head>
  <body>
	<div class="container mt-3">
		<h1>Ajouter un animal</h1>

    <?php echo $messageAjout ?><!-- Message pour confirmer la mise à jour ou l'erreur -->

		<form class="needs-validation" method="post" novalidate><!-- Ajouter la méthode POST -->
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
                <label for="fk_types">Numéro du type *</label>
              <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
			    <input type="number" step="1" class="form-control" id="fk_types" name="fk_types" min=1 max=3 required>
			    <div class="invalid-feedback">
				  Le numéro du type est un nombre entre 1 et 3
                </div>
			  </div>
			
			  <div class="col-md-8 mb-3">
                  <label for="fk_proprietaires">Numéro du propriétaire *</label>
              <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
			        <input type="number"  step="1" class="form-control" id="fk_proprietaires" name="fk_proprietaires" min=1 max=3 required >
                    <div class="invalid-feedback">
                      Le fk_types est un nombre entre 1 et 3
                    </div>
                </div>
			</div>
     
            <button class="btn btn-primary" type="submit">Ajouter l'animal</button>
            <a href="animaux.php" class="float-right">Retour à la liste des animaux</a>
		</form>
	</div>
<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>