//Programmer un convertisseur Fharenheit -> Degré Celsius.
//Variable d'entrée et de sortie
var celsius;
var fahrenheit;

//Demander la température en celsius
fahrenheit = Number(prompt("Donnez la température en Fahrenheit"));

//Conversion de la température en celsius

celsius = (fahrenheit-32) *5/9;

//Afficher le résultat
console.log(fahrenheit + "F = " + celsius + "°C ");