//Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si le deuxième nombre est
// différent de zéro. Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par zéro interdite.’,
// si ce nombre n’est pas zéro vous devez imprimer le résultat.


//!!!!!!Vérifié le != ou !==

var nb1; //nombre 1
var nb2; //nombre 2

var division; //Résultat de nombre 1 / nombre 2

//Lecture des deux nombres
nb1 = Number(prompt("Quel est le nombre 1?"));
nb2 = Number(prompt("Quel est le nombre 2?"));

//Si le nombre 2 n'est pas égale à 0, faire la division et afficher le résultat
if(nb2 !== 0){
    division = nb1 / nb2;
    document.write(nb1 + " /  " + nb2 + " = " + division);
}
//Si nb2=0 afficher un message d'erreur
else {
    document.write("Division par zéro interdite.");
}