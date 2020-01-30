//Lire 10 valeurs déjà triées (en ordre) et les mettre dans un tableau.
// Par la suite, lire une nouvelle valeur et
// afficher toutes les valeurs lues dans l’ordre en ajoutant la nouvelle valeur à la bonne place.

//Lire 10 valeurs
var tableauTrie = [];
var nouvelleValeur;//Nouvelle valeur entrée par l'utilisateur
var sauve;
for(var j=0; j<10; j++){
    tableauTrie[j] = Number(prompt("Écrire un nombre, augmenter à chaque fois"));
}
console.table(tableauTrie);
//Lire la nouvelle valeur
nouvelleValeur = Number(prompt("Entrer un nouveau nombre"));

if(nouvelleValeur>tableauTrie[tableauTrie.length-1]){
    tableauTrie.push(nouvelleValeur);
}
else {
    for (var i = 0; i < tableauTrie.length - 1; i++) {
        if (nouvelleValeur < tableauTrie[0] || nouvelleValeur < tableauTrie[i] && nouvelleValeur > tableauTrie[i - 1]) {
            sauve = tableauTrie[i];
            tableauTrie[i] = nouvelleValeur;
            for (var k = i+1; k < tableauTrie.length - 1; k++) {
                tableauTrie[k] = sauve;
                sauve = tableauTrie[k+1];
            }
        }
    }
}
console.table(tableauTrie);
