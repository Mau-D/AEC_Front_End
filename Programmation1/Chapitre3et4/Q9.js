//Transférer les valeurs Fahrenheit de 10 à 20 en Celsius par tranche de 1.
var celsius;
document.write(" F --> C<br>");
for (var fahrenheit = 10; fahrenheit <= 20; fahrenheit++){
    celsius = (5/9) * (fahrenheit - 32); //Conversion des degrés F en C
    document.write(fahrenheit + " --> " + celsius.toFixed(2) + "<br>");
}