<?php 
  include_once('include/header.php'); 
  include_once('include/config.php'); 
?>
<!-- Code php pour afficher la catégorie choisie -->
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

  if ($requete = $mysqli->prepare("SELECT id, categorie FROM categories  WHERE id=?")) {  // Création d'une requête préparée 
    
    $requete->bind_param("i", $_GET['id']); // Envoi des paramètres à la requête
    $requete->execute(); // Exécution de la requête

    $result = $requete->get_result(); // Récupération de résultats de la requête
    $categorie = $result->fetch_assoc(); // Récupération de l'enregistrement

    $requete->close(); // Fermeture du traitement 
  }
  
  $mysqli->close(); // Fermeture de la connexion 
?>

  <!-- Nouvelles par catégories -->
  <!-- Page Content -->
  <div class="container">
    <?php
      echo "<h1 class='my-4'>" . $categorie["categorie"] . "</h1>";
    ?>

    
    <!-- Afficher la liste de toutes nouvelles ACTIVES appartenant à la catégorie sélectionnée en ordre chronologique (de la plus récente à la plus ancienne) -->
    <!-- L'affichage est à votre discrétion -->
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

      if ($requete = $mysqli->prepare("SELECT id, titre, date_nouvelle, description_courte FROM nouvelles  WHERE actif=1 AND fk_categorie=? ORDER BY date_nouvelle DESC")) {  // Création d'une requête préparée 
        
        $requete->bind_param("i", $_GET['id']); // Envoi des paramètres à la requête
        $requete->execute(); // Exécution de la requête

        $result = $requete->get_result(); // Récupération de résultats de la requête
        
        while ($nouvelle = $result->fetch_assoc()) {
          echo "<div class='row  my-5'>";  
          echo "<div class='offset-3 col-9'>";
          echo "<h3 class='font-weight-bold'>" . $nouvelle["titre"] . "</h3>";
          setlocale(LC_ALL, "fr_CA.UTF-8", "FRENCH");
          $date1 = $nouvelle["date_nouvelle"];
          $date = utf8_encode(strftime("Le %A, %d %B %Y", strtotime($date1))); 
          echo "<h6 class='text-muted'>" . $date . "</h6>";
          echo "<p class='font-italic'>" . $nouvelle["description_courte"] . "</p>";
          echo "<a class='font-italic' href='nouvelle.php?id=" . $nouvelle['id'] . "'>Lire l'article</a>";
          echo "</div>";
          echo "</div>";
        }
       
        $requete->close(); // Fermeture du traitement 
      }
        $mysqli->close(); // Fermeture de la connexion 
    ?>
  


	<!-- Container -->
  </div>

<?php include_once('include/footer.php'); ?>


