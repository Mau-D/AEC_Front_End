<!--mise_a_jour_animal.php-->
<!--exercice vétérinaire-->
<!--Maud Harvey-->
<!--24 juin 2020-->
<?php
    include_once 'include/config.php'; 
    
    // SECTION POUR LA MISE À JOUR
    $messageMAJ = '';

    // Vérification que la page a été soumise et que tous les champs sont présents
    if(isset($_POST['id']) && isset($_POST['nom']) && isset($_POST['date_naissance']) && isset($_POST['fk_types']) && isset($_POST['fk_proprietaires'])) { 
      $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
      if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
          echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
      } 
      
      if ($requete = $mysqli->prepare("UPDATE animaux SET nom=?, date_naissance=?, fk_types=?, fk_proprietaires=? WHERE id=?")) {  // Création d'une requête préparée 
        /************************* ATTENTION **************************/
        /* On ne fait présentement peu de validation des données.     */
        /* On revient sur cette partie dans les prochaines semaines!! */
        /**************************************************************/
        $requete->bind_param("ssiii", $_POST['nom'], $_POST['date_naissance'], $_POST['fk_types'], $_POST['fk_proprietaires'], $_POST['id']); // Envoi des paramètres à la requête. 

        if($requete->execute()) { // Exécution de la requête
          $messageMAJ = "<div class='alert alert-success'>Animal mis à jour</div>";  // Message ajouté dans la page en cas d'ajout réussi
        } else {
          $messageMAJ =  "<div class='alert alert-danger'>Une erreur est survenue lors de la mise à jour.</div>";  // Message ajouté dans la page en cas d'ajout en échec
        }

        $requete->close(); // Fermeture du traitement
      } else  {
        echo $mysqli->error;
      }
  
      $mysqli->close(); // Fermeture de la connexion 
  
    } 


    // SECTION POUR L'AFFICHAGE
    if(!isset($_GET['id'])) { // Vérification que la page reçoit un identifiant en paramètre
      echo 'Identifiant manquant';
      exit();
    }

    $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
    if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
        echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
        exit();
    } 

    if ($requete = $mysqli->prepare("SELECT * FROM animaux WHERE id=?")) {  // Création d'une requête préparée 

      $requete->bind_param("i", $_GET['id']); // Envoi des paramètres à la requête
      $requete->execute(); // Exécution de la requête

      $result = $requete->get_result(); // Récupération de résultats de la requête
      $animal = $result->fetch_assoc(); // Récupération de l'enregistrement

      $requete->close(); // Fermeture du traitement 
    }

    $mysqli->close(); // Fermeture de la connexion 
?>


<!doctype html>
<html lang="fr-ca">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Mise à jour d'un animal</title>
  </head>
  <body>
	<div class="container mt-3">
		<h1>Mise à jour de l'animal: <?= $animal["nom"] ?></h1> <!-- Pour afficher l'animal -->


    <?php echo $messageMAJ ?><!-- Message pour confirmer la mise à jour ou l'erreur -->

		<form class="needs-validation" novalidate method="POST"><!-- Ajouter la méthode POST -->
		  <div class="form-row">
			<div class="col-md-4 mb-3">
            <label for="nom">Nom *</label>
            <!-- Ajouter un input de type hidden pour récupérer l'id -->
            <input type="hidden" id="id" name="id" value="<?= $animal["id"] ?>">
            <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
            <!-- Ajouter l'attribut value="", pour afficher l'information initiale -->
			    <input type="text" class="form-control" id="nom" name="nom" value="<?= $animal["nom"] ?>" required maxlength="25">
			  <div class="invalid-feedback">
				Le nom est requis et doit comporter moins de 25 caractères. 
			  </div>
			</div>
			<div class="col-md-8 mb-3">
              <label for="date_naissance">Date de naissance *</label>
              <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
			  <input type="date" class="form-control" id="date_naissance" name="date_naissance" value="<?= $animal["date_naissance"] ?>" required>
			  <div class="invalid-feedback">
                La date de naissance est requise avec le format AAAA-MM-JJ.
			  </div>
			</div>
		  </div>
		  <div class="form-row">
			<div class="col-md-4 mb-3">
              <label for="fk_types">Numéro du type *</label>
              <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
			  <input type="number" step="1" class="form-control" id="fk_types" name="fk_types" value="<?= $animal["fk_types"] ?>" required min=1 max=3>
			  <div class="invalid-feedback">
                Le numéro du type est un nombre entre 1 et 3 
			  </div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="fk_proprietaires">Numéro du propriétaire *</label>
              <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
			  <input type="number" step="1" class="form-control" id="fk_proprietaires" name="fk_proprietaires" value="<?= $animal["fk_proprietaires"] ?>" required min=1 max=3>
			  <div class="invalid-feedback">
                Le numéro du propriétaire est un nombre entre 1 et 3 
			  </div>
            </div>
		  </div>

          <button class="btn btn-primary" type="submit">Modifier l'animal</button>
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