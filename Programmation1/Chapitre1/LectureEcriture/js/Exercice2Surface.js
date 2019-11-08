//Calculer la surface d’un rectangle dont la longueur et la largeur sont lues à l’écran.

//Étape1: Variables d'entrée et de sorties

var longueur;
var largeur;

var surface;

//Étape 2: Lire les valeurs de largeur et de longueur entrées par l'usager

longueur = Number(prompt("Entrez la longueur du rectangle:"));
largeur = Number(prompt("Entrez la largeur du rectangle"));

//Étape 3: Faire le calcul de la surface
surface = longueur * largeur;


//Étape 4: Afficher le calcul de la surface dans la console

console.log("La surface du rectangle est: " + surface);
