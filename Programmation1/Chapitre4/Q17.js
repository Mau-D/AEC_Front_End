//Lire 5 valeurs dans un tableau. Trier ce tableau en ordre décroissant.
var tableauValeur = [];

//Lire 5 valeurs
for(var i=0; i<5; i++){
    tableauValeur[i] = Number(prompt("entrer un nombre"));
}
console.table(tableauValeur);
//Faire le tri en ordre croissant
tableauValeur.sort();
console.table(tableauValeur);

//Renverser le tableau
tableauValeur.reverse();
console.table(tableauValeur);