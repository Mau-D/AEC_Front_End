//Fonction quadratique.
// L'usager entre A,B,C,X, vous trouvez Y.
// Rappel : Y = AX2 + BX + C

//Variables d'entrée et de sortie
var a;
var b;
var c;
var x;

var y;


//Lecture des variables a, b, c et x
a = Number(prompt("Donnez la valeur de A"));
b = Number(prompt("Donnez la valeur de B"));
c = Number(prompt("Donnez la valeur de C"));
x = Number(prompt("Donnez la valeur de X"));

//Calcul de la fonction quadratique
y = a * Math.pow( x,2) + b * x + c;

//Imprimer la valeur de y
console.log("La valeur de Y = " + y);
document.write("La valeur de Y = " + y);//À vérifier