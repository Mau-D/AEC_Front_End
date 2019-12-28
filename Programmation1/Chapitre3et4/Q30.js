//Écrire un programme qui affiche les nombres de 1 à 1000. Cependant, il écrit Fizz pour les multiples de 3 et
// Buzz pour les multiples de 5. Si un nombre est un multiple de 3 et 5, il écrit FizzBuzz.
//
// N’oubliez pas le modulo % (le reste de la division entière).
var modulo3;
var modulo5;

for(var i=1; i<=1000; i++){
    modulo3 = i % 3;
    modulo5 = i % 5;
    document.write(i);
    if (modulo3 === 0){
        document.write("Fizz");
    }
    if (modulo5 ===0){
        document.write("Buzz");
    }
    document.write("<br>");
}