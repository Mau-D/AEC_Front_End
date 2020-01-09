//Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5. (Celsius = 5/9(fahrenheit-32))
var celsius;
document.write("Degré F --> Degré C<br>");
for (var fahrenheit = -40; fahrenheit <= 40; fahrenheit+=5){
    celsius = (5/9) * (fahrenheit - 32); //Conversion des degrés F en C
    document.write(fahrenheit + " --> " + celsius.toFixed(2) + "<br>");
}