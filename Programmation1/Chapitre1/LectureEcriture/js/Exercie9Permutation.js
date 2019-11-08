//Lire 2 nombres A et B au clavier. Donner à A la valeur de B, et à B la valeur de A en utilisant uniquement
// 3 variables A B C. Afficher A et B.
//Variables d'entrée et de sortie
var a;
var b;
var c;


//Demander les valeurs de a et b à l'utilisateur
a = Number(prompt("Entrez la valeur de A"));
b = Number(prompt("Entrez la valeur de B"));

//Permuter les valeurs de a et b avec la variable c
c = a + b;
a = b;
b = c - b;

//Afficher le résultat de a et b

alert("A vaut maintenant " + a);
alert("B vaut maintenant " + b);