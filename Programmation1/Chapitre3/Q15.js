//Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
// Afficher combien de nombres positifs ont été entrés ainsi que combien de nombres négatifs ont été entrés.

var nb = 1;
var negatif = 0;
var positif = 0;

while ( nb !== 0){
    nb = Number(prompt("Écrire un nombre et 0 pour terminer"));
    if (nb > 0){
        positif++;
    }
    else if( nb < 0){
        negatif++;
    }
    console.log(nb);
}
document.write("Total des nombres positifs = " + positif);
document.write("<br>Total des nombres négatifs = " + negatif);