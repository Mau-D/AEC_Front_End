//Lire 10 valeurs déjà triées (en ordre) et les mettre dans un tableau.
// Par la suite, lire une nouvelle valeur et
// afficher toutes les valeurs lues dans l’ordre en ajoutant la nouvelle valeur à la bonne place.

//function compare(a, b) {
//   if (a est inférieur à b selon les critères de tri)
//      return -1;
//   if (a est supérieur à b selon les critères de tri)
//      return 1;
//   // a doit être égal à b
//   return 0;
// }
//Lire 10 valeurs
var tableauTrie = [10,20,30,40,50,60,70,80,90,100];
var nouvelleValeur;//Nouvelle valeur entrée par l'utilisateur


nouvelleValeur = Number(prompt("Entrer un nombre"));
if(nouvelleValeur<tableauTrie[0]){
    tableauTrie.splice(0, 0, nouvelleValeur);
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
