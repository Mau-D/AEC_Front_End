//Transférer les valeurs celsius de 10 à 20 en fahrenheit par tranche de 1.
var fahrenheit;
document.write("Degré C --> Degré F<br>");
for (var celsius = 10; celsius <= 20; celsius++){
    fahrenheit = (celsius * (9/5)) + 32; //Conversion des degrés C en F
    document.write(celsius + " --> " + fahrenheit.toFixed(2) + "<br>");
}