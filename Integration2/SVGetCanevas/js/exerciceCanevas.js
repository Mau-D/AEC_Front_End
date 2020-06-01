//exerciceCanevas.js //
//Par Maud Harvey//
//Le 1er mai 2020//
//Variable du canevas en HTML
var canvas = document.getElementById("canevasExercice");
//Création d'un drawing object, variable qui nous permet de dessiner
var ctx = canvas.getContext("2d");
//Créer une variable pour le dégradé du bleu (gradient)
var grd = ctx.createLinearGradient(0,0, 0, 400);
grd.addColorStop(0, "#0097cc");
grd.addColorStop(1, "white");

//Rectangle bleu la grandeur du canevas
ctx.beginPath(); //Action de dessiner
ctx.rect(0, 0, 700, 400);//Départ et dimensions du carré
ctx.fillStyle = grd; //Couleur du remplissage
ctx.fill(); //Action de remplir





//Dessiner l'arc vert
ctx.beginPath();
ctx.arc(350,700,500,0, 2* Math.PI); //coordonnées du centre du cercle
ctx.fillStyle = "#006600";
ctx.fill();


//Dessiner le carré au centre
ctx.beginPath(); //Action de dessiner
ctx.strokeStyle = "#fb4d28"; //Couleur de la bordure
ctx.lineWidth = "5"; //Largeur de la bordure
ctx.rect(300, 125, 100, 100);//Départ et dimensions du carré
ctx.fillStyle = "#550500"; //Couleur du remplissage
ctx.fill(); //Action de remplir
ctx.stroke(); //Dessiner la bordure

//Écrire le texte
ctx.font = "70px  Impact";//Grandeur et style du texte
ctx.fillStyle = "#fb4d28"; //Couleur du remplissage
ctx.fillText("An", 315, 200); //Contenu et coordonnées de départ

