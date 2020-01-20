//Lire 10 nombres quelconques et les placer dans un tableau.
// Par la suite, trouver le plus petit et le plus grand de ces nombres.

var tabNombre = [];
var plusPetit = Infinity;
var plusGrand = 0;

for(i=0; i<10; i++){
    tabNombre[i]= Math.floor(Math.random() * 100);
    if (tabNombre[i] < plusPetit){
        plusPetit = tabNombre[i];
    }
    if(tabNombre[i] > plusGrand){
        plusGrand = tabNombre[i];
    }
}
console.table(tabNombre);
console.log("Le plus grand nombre est " + plusGrand);
console.log("Le plus petit nombre est " + plusPetit);
