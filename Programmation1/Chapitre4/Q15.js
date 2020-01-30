//Lire 2 valeurs dans un tableau. Inverser ces deux valeurs.

var tableau = [];
var sauve;
var valeur1;
var valeur2;
//Remplir le tableau de 10 valeurs
for(var i=0; i<10; i++){
    tableau[i] = Number(prompt("Entrer un nombre"));
}
console.table(tableau);
//Demander quelle valeur échanger
valeur1 = Number(prompt("Quelle nombre voulez-vous échanger, inscrire son rang de 1 à 10"));
valeur2 = Number(prompt("Quelle nombre voulez-vous échanger, inscrire son rang de 1 à 10"));

//Sauvegarder la valeur 2
sauve = tableau[valeur1-1];
//Mettre la valeur 1 à la fin du tableau
tableau[valeur1-1] = tableau[valeur2-1];

//Rwplacer la première valeur
tableau[valeur2-1] = sauve;
console.table(tableau);