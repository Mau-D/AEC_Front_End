//Créez un tableau de 10 valeurs :
// Bouclez pour i de 0 à length-1.
// Générez un nombre aléatoire r.
// Échangez les valeurs du tableau aux indices i et r.
// À la fin de la boucle, votre tableau est mélangé!

var tableau = [1,2,3,4,5,6,7,8,9,10];
var r;//nombre aleatoire
var sauve; //sauvegarde de la donnée échangé

for(var i=0; i<tableau.length; i++){
    r = Math.floor(Math.random()*10);
    console.log(r);
    sauve = tableau[i];
    tableau[i] = tableau[r];
    tableau[r] = sauve;
}

console.table(tableau);
