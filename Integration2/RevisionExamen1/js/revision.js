//Le 16 mai 2020
//Variable du canevas en HTML
//Fait par Maud Harvey

var canvas = document.getElementById("myCanvas");
//Création d'un drawing object, variable qui nous permet de dessiner
var ctx = canvas.getContext("2d");
//Faire un carré à la dimension du canevas
var grd = ctx.createLinearGradient(60,35, 60, 185);
//x, y départ du dégradé et x,y fin du dégradé


ctx.rect(0, 0, canvas.width, canvas.height);
//Remplir le canevas
ctx.fillStyle = "black";
ctx.fill();
//Gradient
grd.addColorStop(0, "#0479F9");
grd.addColorStop(1, "#A610E3");

//Dessiner le premier rond coloré avec grd
ctx.beginPath();
ctx.arc(175, 150, 115, 0, 2*Math.PI);
ctx.fillStyle = grd;//Définit le style
ctx.fill();//Applique le style


//Dessiner le deuxième cercle noir
ctx.beginPath();
ctx.arc(260, 125, 100, 0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();
