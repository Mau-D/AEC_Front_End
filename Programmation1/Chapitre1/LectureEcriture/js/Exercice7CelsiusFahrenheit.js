//Programmer un convertisseur Degré Celsius -> Fharenheit.
//Variable d'entrée et de sortie
var celsius;
var fahrenheit;

//Demander la température en celsius
celsius = Number(prompt("Donnez la température en celsius"));

//Conversion de la température en Fahrenheit

fahrenheit = celsius * 9/5 + 32;

//Afficher le résultat
console.log(celsius + "°C = " + fahrenheit + "F" );