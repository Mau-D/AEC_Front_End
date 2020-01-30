//Lire 10 valeurs déjà triées (en ordre) et les mettre dans un tableau.
// Par la suite, lire une nouvelle valeur et
// afficher toutes les valeurs lues dans l’ordre en ajoutant la nouvelle valeur à la bonne place.


//Lire 10 valeurs
var tableauTrie = [];
var nouvelleValeur;//Nouvelle valeur entrée par l'utilisateur
for(var j=0; j<10; j++){
    tableauTrie[j] = Number(prompt("Écrire un nombre, augmenter à chaque fois"));
}
console.table(tableauTrie);
//Lire la nouvelle valeur
nouvelleValeur = Number(prompt("Entrer un nouveau nombre"));
if(nouvelleValeur<tableauTrie[0]){
    tableauTrie.unshift(nouvelleValeur);
}
else if (nouvelleValeur>tableauTrie[9]){
    tableauTrie.push(nouvelleValeur);
}
else{
    for(var i=1; i<9; i++) {

        if (nouvelleValeur < tableauTrie[i] && nouvelleValeur > tableauTrie[i - 1]) {
            tableauTrie.splice(i, 0, nouvelleValeur);
        }
    }
}
console.table(tableauTrie);
