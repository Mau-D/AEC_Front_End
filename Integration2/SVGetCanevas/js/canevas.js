//canevas.js //
//Par Maud Harvey//
//Le 30 avril 2020//
//Variable du canevas en HTML
var canvas = document.getElementById("myCanvas");
//Création d'un drawing object, variable qui nous permet de dessiner
var ctx = canvas.getContext("2d");
var img = document.getElementById("poisson"); //Créer une nouvel image
ctx.drawImage(img, 0, 250, 100, 100);


//On peut appeler des fonctions de cet objet pour dessiner dans le canevas

//Dessiner un rectangle rouge
ctx.fillStyle = "#FF0000"; //Mettre le style avant, car le rectangle sera noir
ctx.fillRect(0,0,150,75);//(x, y, w, h)

//Dessiner une ligne
ctx.moveTo(0, 100);//placé à gauche à 110px plus bas, départ
ctx.lineTo(200, 200); //déplacer jusqu'à 200px vers la droite et 100px vers le bas
ctx.stroke();//Dessine la ligne

//Écrire du texte
ctx.font = "30px Arial";
ctx.fillText("Exercice sur le canevas", 160, 50);

//Faire un dégradé dans le cercle
//Créer le gradient
var grd = ctx.createLinearGradient(260,210, 340, 210);//x, y départ du défradé et x,y fin du dégradé
//La méthode CanvasGradient.addColorStop () ajoute un nouvel arrêt,
// défini par un décalage et une couleur, au dégradé.
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

//Dessiner un cercle
ctx.beginPath();
//La méthode CanvasRenderingContext2D.beginPath()
// de l'API Canvas 2D permet de commencer un nouveau chemin
// en vidant la liste des sous-chemins. Appelez cette méthode quand vous voulez créer un nouveau chemin.
ctx.arc(300, 250, 40, 0, 2*Math.PI);//x, y centre du cercle
ctx.stroke();
ctx.fillStyle = grd;//Définit le style
ctx.fill();//Applique le style




