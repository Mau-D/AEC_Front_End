//C’est le temps du recensement. Nous aimerions connaître le nombre d’enfants que chaque famille possède
// et par la suite afficher un tableau de statistiques comme suit : Le nombre d’enfants est l’indice du tableau.
// Regrouper ensemble les 10 enfants et plus.
//Truc : il faut utiliser l'indice du tableau pour représenter le nombre d'enfants.
//Par exemple : tab[2] = 10; signifie qu'il y a 10 familles qui ont 2 enfants.

var tabRecensement = [0,0,0,0,0,0,0,0,0,0,0];
var nbEnfants = 0;
var nb = true;
console.log(tabRecensement.length);
//Faire un tableau de données jusqu'à ce que l'entrée ne soit pas un nombre entier
while(nb === true){
    nbEnfants = Number(prompt("Combien avez-vous d'enfants?"));
    console.log(nbEnfants + typeof nbEnfants);
    if(nbEnfants>=10){
        tabRecensement[10]++;
    }
    else {
        tabRecensement[nbEnfants]++;
    }
    nb = Number.isInteger(nbEnfants);
    console.log(nb);
}

console.table(tabRecensement);
document.write(tabRecensement);