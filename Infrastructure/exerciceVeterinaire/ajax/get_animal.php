<?php
    header('Content-Type: application/json');//******Indique que le fichier contient du json
    
    include_once '../include/config.php'; 
    
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

        $animalJSON = json_encode($animal); //*****convertir en json
        echo $animalJSON;//*****affiche le produit en json
        
        $requete->close(); // Fermeture du traitement 
    }

    $mysqli->close(); // Fermeture de la connexion 
?>