//Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
// Afficher la somme des nombres positifs ainsi que la somme des nombres négatifs.

var nb = 1;
var negatif = 0;
var positif = 0;

while ( nb !== 0){
    nb = Number(prompt("Écrire un nombre"));
    if (nb > 0){
        positif = positif + nb;
    }
    else if( nb < 0){
        negatif = negatif + nb;
    }
}
document.write("La somme des nombres positifs = " + positif);
document.write("<br>La somme des nombres négatifs = " + negatif);

