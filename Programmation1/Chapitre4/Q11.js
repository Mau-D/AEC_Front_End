//C’est le temps du recensement. Nous aimerions connaître le nombre d’enfants que chaque famille possède
// et par la suite afficher un tableau de statistiques comme suit : Le nombre d’enfants est l’indice du tableau.
// Regrouper ensemble les 10 enfants et plus.
//Truc : il faut utiliser l'indice du tableau pour représenter le nombre d'enfants.
//Par exemple : tab[2] = 10; signifie qu'il y a 10 familles qui ont 2 enfants.
var tabDonnees = [];
var tabRecensement = [0,0,0,0,0,0,0,0,0,0,0];
var nbEnfants = 0;
var nb = true;

//Faire un tableau de données jusqu'à ce que l'entrée ne soit pas un nombre entier
while(nb === true){
    nbEnfants = Number(prompt("Combien avez-vous d'enfants?"));
    console.log(nbEnfants + typeof nbEnfants);
    tabDonnees.push(nbEnfants);
    nb = Number.isInteger(nbEnfants);
    console.log(nb);

}
console.table(tabDonnees);
for(var i=0; i<tabDonnees.length-1; i++) {

    if (tabDonnees[i] === 0) {
        tabRecensement[0]++;
    }
    else if (tabDonnees[i] === 1) {
        tabRecensement[1]++;
    }
    else if (tabDonnees[i] === 2) {
        tabRecensement[2]++;
    }
    else if (tabDonnees[i] === 3) {
        tabRecensement[3]++;
    }
    else if (tabDonnees[i] === 4) {
        tabRecensement[4]++;
    }
    else if (tabDonnees[i] === 5) {
        tabRecensement[5]++;
    }
    else if (tabDonnees[i] === 6) {
        tabRecensement[6]++;
    }
    else if (tabDonnees[i] === 7) {
        tabRecensement[7]++;
    }
    else if (tabDonnees[i] === 8) {
        tabRecensement[8]++;
    }
    else if (tabDonnees[i] === 9) {
        tabRecensement[9]++;
    }
    else if(tabDonnees[i] >=10){
        tabRecensement[10]++;
    }
}
console.table(tabRecensement);