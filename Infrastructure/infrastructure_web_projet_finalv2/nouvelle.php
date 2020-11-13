<!--   Nouvelle détaillée -->
<?php 
  include_once('include/header.php'); 
  include_once('include/config.php'); 
?>
<!-- Code php pour afficher la nouvelle détaillée -->
<?php  
  if(!isset($_GET['id'])) { // Vérification que la page reçoit un identifiant en paramètre
    echo 'Identifiant manquant';
    exit();
  }

  $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
  if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
    echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
    exit();
  } 
  if ($requete = $mysqli->prepare("SELECT id, titre, date_nouvelle, description_longue FROM nouvelles  WHERE id=?")) {  // Création d'une requête préparée 
    
    $requete->bind_param("i", $_GET['id']); // Envoi des paramètres à la requête
    $requete->execute(); // Exécution de la requête

    $result = $requete->get_result(); // Récupération de résultats de la requête
    $detail = $result->fetch_assoc(); // Récupération de l'enregistrement

    $requete->close(); // Fermeture du traitement 
  }
  
  $mysqli->close(); // Fermeture de la connexion 
?>

<!-- Affichage -->
<div class="container">
    <div class='row  my-5'>
        <?php
            echo "<div class=' offset-4 col-4'>";
            echo "<div class='card text-center'>";
            echo "<div class='card-header'>"; 
            echo "<h5 class='card-title'>" . $detail["titre"] . "</h5>";                   
            echo"</div>";
            echo "<div class='card-body text-left'>";
            echo "<p class='card-text'>" . $detail["description_longue"] . "</p>";
            echo "</div>";
            setlocale(LC_ALL, "fr_CA.UTF-8", "FRENCH");
            $date1 = $detail["date_nouvelle"];
            $date = utf8_encode(strftime("Le %A, %d %B %Y", strtotime($date1))); 
            echo "<div class='card-footer text-muted'>" . $date . "</div>";
            echo "</div>";
            echo "</div>";            
        ?>
    </div>        
</div> 

<?php include_once('include/footer.php'); ?>
