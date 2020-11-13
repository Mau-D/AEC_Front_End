<?php 
  include_once('include/header.php'); 
  include_once('include/config.php'); 
?>
<?php
 $mysqli = new mysqli($host, $username, $password, $database);
    // Vérifier la connexion
    if ($mysqli -> connect_errno) {
        echo "Échec de connexion à la base de données MySQL: " . $mysqli -> connect_error;
        exit();
    } 
?> 
  <!-- Toutes les nouvelles-->
  <!-- Page Content -->
  <div class="container">
  
    <h1 class="my-4">Toutes les nouvelles</h1>
    <!-- Afficher la liste de toutes nouvelles ACTIVES en ordre chronologique (de la plus récente à la plus ancienne) -->
    <!-- L'affichage doit être le même que celui utilisé pour l'affichage des nouvelles par catégorie -->
    <?php
      //Requête pour avoir toutes les nouvelles actives en ordre chronologiques
      $res = $mysqli->query("SELECT id, titre, description_courte, date_nouvelle FROM nouvelles WHERE actif=1 ORDER BY date_nouvelle DESC");
      $mysqli->close(); // Fermeture de la connexion 

      while ($row = $res->fetch_assoc()) {
        echo "<div class='row  my-5'>";  
        echo "<div class='offset-3 col-9'>";
        echo "<h3 class='font-weight-bold'>" . $row["titre"] . "</h3>";
        setlocale(LC_ALL, "fr_CA.UTF-8", "FRENCH");
        $date1 = $row['date_nouvelle'];
        $date = utf8_encode(strftime("Le %A, %d %B %Y", strtotime($date1))); 
        echo "<h6 class='text-muted'>" . $date . "</h6>";
        echo "<p class='font-italic'>" . $row["description_courte"] . "</p>";
        echo "<a class='font-italic' href='nouvelle.php?id=" . $row['id'] . "'>Lire l'article</a>";
        echo "</div>";
        echo "</div>";
      }
  ?>
  </div>

<?php include_once('include/footer.php'); ?>

</html>

