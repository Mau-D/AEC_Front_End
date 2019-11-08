//Créez un convertisseur d'unités de mesures.
// L'usager entre les dimensions de son terrain en pi2.
// Vous affichez les dimensions en m2, arpents2, hectares.

//Variables d'entrée et de sortie
var pi2;

var m2;
var arpents;
var hectares;

//Lecture de la dimension du terrain en pieds carré
pi2 = Number(prompt("Quelle est la dimension du terrain en pieds carré?"));

//Conversion des pi2 en m2
m2 = pi2 * 0.09290304;
//Conversion des m2 en arpents
arpents = pi2 / 36799;
//Conversion des m2 en hectare
hectares = pi2 / 107639;

//Afficher les résultats dans la console

console.log("Le terrain de " + pi2 + " pi2 équivaut à " + m2 + " m2,  ou à " + arpents + " arpents, ou à " + hectares + " hectares.");
