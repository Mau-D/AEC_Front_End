//Lire les noms et notes d’examen d’une classe de 5 élèves. Afficher ceux (noms et notes) qui ont une note supérieure
// à la moyenne.

var tabNoms= [];
var tabNotes= [];
var moyenne = 0;

for(var i=0; i<5; i++){
    tabNoms[i] = prompt("Écrire le nom de l'élève");
    tabNotes[i] = Number(prompt("Écrire la note de l'élève"));
    //Calcul de la moyenne
    moyenne += tabNotes[i];
}
moyenne = moyenne/tabNotes.length;
console.table(tabNoms);
console.table(tabNotes);
console.log(moyenne);
for(var j=0; j < tabNotes.length; j++){
    if(tabNotes[j] > moyenne){
        document.write(tabNoms[j] + " a obtenu la note de " + tabNotes[j] + "<br>");
    }
}