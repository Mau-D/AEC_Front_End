//Convertir un nombre de gallons en litres. 1 gal = 4.55 litres
//Variables d'entrée et de sortie
var gallon;
var litre;

//Lecture du nombre de gallon entré par l'usager

gallon = Number(prompt("Entrer le nombre de gallon svp"));

//Conversion des gallons en litre
litre = gallon * 4.55;

//Afficher le résultat de la conversion dans la console
console.log(gallon + " gallons = " + litre + " litres");

