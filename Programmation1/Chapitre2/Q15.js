//Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.

var longueur; //longueur du rectangle
var largeur; //largeur du rectangle

var surface; //aire du rectangle



//Lire la longueur et la largeur du rectangle
longueur = Number(prompt("Donnez la largeur"));
largeur = Number(prompt("Donnez la largeur"));


if ((2 * longueur + 2 * largeur) >= 100){
    surface = longueur * largeur;
    document.write("La surface du rectangle est de " + surface);
}
else{
    document.write("Le périmètre est inférieur à 100.");
}
