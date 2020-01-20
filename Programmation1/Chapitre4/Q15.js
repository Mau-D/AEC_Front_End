//Lire 2 valeurs dans un tableau. Inverser ces deux valeurs.

var tableau = ["valeur1", "valeur2"];
console.table(tableau);

//Mettre la valeur 1 à la fin du tableau
tableau.splice(2, 0, tableau[0]);

//Effacer la première valeur
tableau.splice(0,1);
console.table(tableau);