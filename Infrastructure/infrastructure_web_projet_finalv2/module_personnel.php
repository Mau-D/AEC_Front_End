<?php 
  include_once 'include/header.php'; 
	include_once 'include/config.php';
 
?>

  <!-- Page Content -->
<div class="container">
  
	<h1 class="my-4">Artisans québecois</h1>	
  	<p>Présentation des artisans selon leur région d'origine.</p>
  

<?php
	$mysqli = new mysqli($host, $username, $password, $database);

	// Vérifier la connexion
	if ($mysqli -> connect_errno) {
	echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
	exit();
	} 
	//Faire la requête
	$res = $mysqli->query("SELECT regions.id, regions.region, artisans.nom, artisans.prenom, artisans.fk_regions FROM regions INNER JOIN artisans ON fk_regions=regions.id WHERE regions.region = 'Saguenay-Lac-Saint-Jean' ORDER BY artisans.nom");
	$mysqli->close(); // Fermeture de la connexion 

	echo '<table class="table mb-4">';

	// Affichage de l'entête du tableau
	
	echo '<tr>';
	echo '<th>Saguenay-Lac-Saint-Jean</th>';
	echo '<th></th>';
	echo '</tr>';	
	while ($row = $res->fetch_assoc()) {
	echo '<tr>';
	echo '<td></td>';
    echo '<td  class= "mx-0 w-50">' . $row["prenom"]  . ' ' . $row["nom"] . '</td>';
    echo '</tr>';
  	}
  	echo '</table>';
?>
<?php
	$mysqli = new mysqli($host, $username, $password, $database);

	// Vérifier la connexion
	if ($mysqli -> connect_errno) {
	echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
	exit();
	} 
	//Faire la requête
	$res = $mysqli->query("SELECT regions.id, regions.region, artisans.nom, artisans.prenom, artisans.fk_regions FROM regions INNER JOIN artisans ON fk_regions=regions.id WHERE regions.region = 'Capitale-Nationale' ORDER BY artisans.nom");
	$mysqli->close(); // Fermeture de la connexion 

	echo '<table class="table mb-4">';

	// Affichage de l'entête du tableau
	
	echo '<tr>';
	echo '<th>Capitale-Nationale</th>';
	echo '<th></th>';
	echo '</tr>';	
	while ($row = $res->fetch_assoc()) {
	echo '<tr>';
	echo '<td></td>';
    echo '<td  class= "mx-0 w-50">' . $row["prenom"]  . ' ' . $row["nom"] . '</td>';
    echo '</tr>';
  	}
  	echo '</table>';
?>

<?php
	$mysqli = new mysqli($host, $username, $password, $database);

	// Vérifier la connexion
	if ($mysqli -> connect_errno) {
	echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
	exit();
	} 
	//Faire la requête
	$res = $mysqli->query("SELECT regions.id, regions.region, artisans.nom, artisans.prenom, artisans.fk_regions FROM regions INNER JOIN artisans ON fk_regions=regions.id WHERE regions.region = 'Mauricie' ORDER BY artisans.nom");
	$mysqli->close(); // Fermeture de la connexion 

	echo '<table class="table mb-4">';

	// Affichage de l'entête du tableau
	
	echo '<tr>';
	echo '<th>Mauricie</th>';
	echo '<th></th>';
	echo '</tr>';	
	while ($row = $res->fetch_assoc()) {
	echo '<tr>';
	echo '<td></td>';
    echo '<td  class= "mx-0 w-50">' . $row["prenom"]  . ' ' . $row["nom"] . '</td>';
    echo '</tr>';
  	}
  	echo '</table>';
?>
	
<?php
	$mysqli = new mysqli($host, $username, $password, $database);

	// Vérifier la connexion
	if ($mysqli -> connect_errno) {
	echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
	exit();
	} 
	//Faire la requête
	$res = $mysqli->query("SELECT regions.id, regions.region, artisans.nom, artisans.prenom, artisans.fk_regions FROM regions INNER JOIN artisans ON fk_regions=regions.id WHERE regions.region = 'Montréal' ORDER BY artisans.nom");
	$mysqli->close(); // Fermeture de la connexion 

	echo '<table class="table mb-4">';

	// Affichage de l'entête du tableau
	
	echo '<tr>';
	echo '<th>Montréal</th>';
	echo '<th></th>';
	echo '</tr>';	
	while ($row = $res->fetch_assoc()) {
	echo '<tr>';
	echo '<td></td>';
    echo '<td  class= "mx-0 w-50">' . $row["prenom"]  . ' ' . $row["nom"] . '</td>';
    echo '</tr>';
  	}
  	echo '</table>';
?>
<?php
	$mysqli = new mysqli($host, $username, $password, $database);

	// Vérifier la connexion
	if ($mysqli -> connect_errno) {
	echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
	exit();
	} 
	//Faire la requête
	$res = $mysqli->query("SELECT regions.id, regions.region, artisans.nom, artisans.prenom, artisans.fk_regions FROM regions INNER JOIN artisans ON fk_regions=regions.id WHERE regions.region = 'Bas-Saint-Laurent' ORDER BY artisans.nom");
	$mysqli->close(); // Fermeture de la connexion 

	echo '<table class="table mb-4">';

	// Affichage de l'entête du tableau
	
	echo '<tr>';
	echo '<th>Bas-Saint-Laurent</th>';
	echo '<th></th>';
	echo '</tr>';	
	while ($row = $res->fetch_assoc()) {
	echo '<tr>';
	echo '<td></td>';
    echo '<td  class= "mx-0 w-50">' . $row["prenom"]  . ' ' . $row["nom"] . '</td>';
    echo '</tr>';
  	}
  	echo '</table>';
?>

</div>



<?php include_once 'include/footer.php'; ?>
