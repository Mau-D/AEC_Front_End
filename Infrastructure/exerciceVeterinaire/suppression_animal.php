<!--
  **************Ce fichier n'est plus valide, il a été remplacé par un modal dans le fichier animaux.php************
  -->



<!--suppression_animal.php-->
<!--exercice vétérinaire-->
<!--Maud Harvey-->
<!--24 juin 2020-->
<?php
    include_once 'include/config.php';
    if(!isset($_GET['id'])) { // Vérification que la page reçoit un identifiant en paramètre
      echo 'Identifiant manquant';
      exit();
    }

    if (isset($_POST['submit']) && isset($_GET['id'])) {
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
        $requete->bind_param("i", $_GET['id']); // Envoi des paramètres à la requête. 

        if($requete->execute()) { // Exécution de la requête
          $messageDelete = "<div class='alert alert-success'>Produit supprimé</div>";  // Message ajouté dans la page en cas d'ajout réussi
        } else {
          $messageDelete =  "<div class='alert alert-danger'>Une erreur est survenue lors de la suppression.</div>";  // Message ajouté dans la page en cas d'ajout en échec
        }

        $requete->close(); // Fermeture du traitement
      } else  {
        echo $mysqli->error;
      }
  
      $mysqli->close(); // Fermeture de la connexion 
  
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

    <title>Suppression d'un animal</title>
    <?php echo $messageDelete ?><!-- Message pour confirmer la mise à jour ou l'erreur -->

  </head>
  <body>
	<div class="containter text-center">
    <?php
      echo '<div class="card">';
      echo '<div class="card-body">';
      echo '<h5 class="card-title">' . $animal["nom"] . '</h5>';
      echo '<h6 class="card-subtitle mb-2 text-muted">' . $animal["date_naissance"] . '</h6>';
      echo '</div>';
      echo '</div>';
    ?>
    <br>

    <p>Voulez-vous vraiment supprimer cet animal?</p>
    <form method="POST"><!-- Le bouton doit être dans un form pour appliquer la méthode POST -->
        <button class="btn btn-danger" name="submit" type="submit">Oui</button>
        <a href="animaux.php" class="btn btn-light">Non</a>
    </form>
    <br>
	<a href="animaux.php" >Retour à la liste des animaux</a>
	</div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>