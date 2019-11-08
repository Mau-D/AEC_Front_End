//Lire un nombre et afficher le carré et le cube de ce nombre.
//Étape1: varaible d'entrée et de sortie
var nombre;
var carre;
var cube;

//Étape 2 : Lecture du nombre entré par l'usager.
nombre= Number(prompt("Entrez un nombre svp: "));

//Étape 3: Faire les calculs du carré et du cube.
carre= nombre * nombre;
cube= nombre * nombre * nombre;

//Afficher les résultats dans la console
console.log("Le nombre est " + nombre);
console.log("Le carré de "  + nombre + "est " + carre);
console.log("Le cube de " + nombre + "est " + cube);
