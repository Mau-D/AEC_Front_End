<?php
  if (isset($_POST['supprSubmit']) && isset($_POST['id'])) {
    $message = '';
    $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
    if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
      echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
    } 
    
    if ($requete = $mysqli->prepare("DELETE FROM nouvelles WHERE id=?")) {  // Création d'une requête préparée 
   
    $requete->bind_param("i", $_POST['id']); // Envoi des paramètres à la requête. 
    if($requete->execute()) { // Exécution de la requête
      $messageSuppr = "<div class='alert alert-success text-center'>Nouvelle supprimée!</div>";  // Message ajouté dans la page en cas d'ajout réussi
    } else {
      $messageSuppr =  "<div class='alert alert-danger text-center'>Une erreur est survenue lors de la suppression.</div>";  // Message ajouté dans la page en cas d'ajout en échec
    }
    $requete->close(); // Fermeture du traitement
    } else  {
    echo $mysqli->error;
    }

    $mysqli->close(); // Fermeture de la connexion 
  } 
?>