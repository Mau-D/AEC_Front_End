//Lire 10 valeurs déjà triées (en ordre) et les mettre dans un tableau.
// Par la suite, lire une nouvelle valeur et
// afficher toutes les valeurs lues dans l’ordre en ajoutant la nouvelle valeur à la bonne place.

var tabValeurs = [10,20,30,40,50,60,70,80,90,100];
var sauve, sauve2, nouvelleValeur;
var nbPlace = false;

console.table(tabValeurs);

//Demander la nouvelle valeur
nouvelleValeur = Number(prompt("Entrer un nombre"));
console.log(nouvelleValeur);
//Boucler le tableau
for(var i=0; i<tabValeurs.length;i++){
    //décaler les nombres vers la droite lorsque le nombre est placer
    //Placer avant pour ne pas faire le remplacement sur la même itération
    if(nbPlace){
        sauve2=tabValeurs[i];
        tabValeurs[i]=sauve;
        sauve=sauve2;
    }
   //On cherche l'endroit où placer la nouvelle valeur
    if(nouvelleValeur<=tabValeurs[i] && !nbPlace){
        sauve=tabValeurs[i];
        tabValeurs[i]= nouvelleValeur;
        nbPlace = true;
    }

}
//
//Mettre la dernière valeur du tableau ou la nouvelle si elle n'a pas été placé
if(nbPlace){
    tabValeurs.push(sauve);
}
else {
    tabValeurs.push(nouvelleValeur);
}

console.table(tabValeurs);