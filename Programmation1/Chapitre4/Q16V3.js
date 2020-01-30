//Lire 10 valeurs déjà triées (en ordre) et les mettre dans un tableau.
// Par la suite, lire une nouvelle valeur et
// afficher toutes les valeurs lues dans l’ordre en ajoutant la nouvelle valeur à la bonne place.

//Lire 10 valeurs
var tableauTrie = [];
var nouvelleValeur;//Nouvelle valeur entrée par l'utilisateur
var position = 0;
for(var j=0; j<10; j++){
    tableauTrie[j] = Number(prompt("Écrire un nombre, augmenter à chaque fois"));
}
console.table(tableauTrie);
//Lire la nouvelle valeur
nouvelleValeur = Number(prompt("Entrer un nouveau nombre"));

//Trouver la position
for(var i=0; i<tableauTrie.length;i++){
    if(nouvelleValeur>tableauTrie[i]){
        position++;
    }
}
//Placer les nombres plus grand
for(var k=tableauTrie.length; k>position; k-- ){
    tableauTrie[k] = tableauTrie[k-1];
}
//Ajoute la nouvelle valeur
tableauTrie[position] = nouvelleValeur;

console.table(tableauTrie);
