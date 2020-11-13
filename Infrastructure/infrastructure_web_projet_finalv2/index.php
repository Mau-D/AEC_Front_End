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

  <header>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <!-- Slide One - Set the background image for this slide in the line below -->
        <div class="carousel-item active" style="background-image: url('img/background-1824828_1920.jpg')">
          <div class="carousel-caption d-none d-md-block">
            <h3>Image #1</h3>
            <p>Description de l'image #1.</p>
          </div>
        </div>
        <!-- Slide Two - Set the background image for this slide in the line below -->
        <div class="carousel-item" style="background-image: url('img/news-1172463_1920.jpg')">
          <div class="carousel-caption d-none d-md-block">
            <h3>Image #2</h3>
            <p>Description de l'image #2.</p>
          </div>
        </div>
        <!-- Slide Three - Set the background image for this slide in the line below -->
        <div class="carousel-item" style="background-image: url('img/old-newspaper-350376_1920.jpg')">
          <div class="carousel-caption d-none d-md-block">
            <h3>Image #3</h3>
            <p>Description de l'image #3.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Précédent</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Suivant</span>
      </a>
    </div>
  </header>

  <!-- Page Content -->
  <div class="container">

    <h1 class="my-4">Projet final</h1>
    <!-- Code php pour l'affichage des 3 nouvelles les plus récentes et actives -->
    <?php
      //Requête pour avoir les 3 nouvelles actives les plus récentes
      $res = $mysqli->query("SELECT id, titre, description_courte, date_nouvelle FROM nouvelles WHERE actif=1 ORDER BY date_nouvelle DESC LIMIT 3");
      $mysqli->close(); // Fermeture de la connexion 

      echo "<div class='row'>";
      
      while ($row = $res->fetch_assoc()) {
        echo "<div class='col-lg-4 mb-4'>";
        echo "<div class='card h-100'>";
        echo "<h4 class='card-header'>" . $row["titre"] . "</h4>";
        echo "<div class='card-body'>";
        //Pour l'affichage de la date
        setlocale(LC_ALL, "fr_CA.UTF-8", "FRENCH");
        $date1 = $row['date_nouvelle'];
        $date = utf8_encode(strftime("Le %A, %d %B %Y", strtotime($date1))); 
        echo "<h6 class='card-title'>" . $date . "</h6>";
        echo "<p class='card-text'>" . $row["description_courte"] . "</p>";
        echo "</div>";
        echo "<div class='card-footer'>";
        echo "<a href='nouvelle.php?id=" . $row['id'] . "' class='btn btn-secondary'>Plus d'information</a>";
        echo "</div>";
        echo "</div>";
        echo "</div>";
      }
      echo "</div>";
    ?>
	
  </div>
  <!-- /.container -->

<?php include_once('include/footer.php'); ?>
