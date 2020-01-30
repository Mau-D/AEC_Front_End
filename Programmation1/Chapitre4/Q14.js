//Lire 12 nombres quelconques et vérifier si deux de ces nombres font une somme de 15.
// Si tel est le cas, affichez ces deux nombres.

var tabNombre = [];
var trouver = false;

//Lecture des 12 nombres
for(var i=0; i<12; i++){
    tabNombre[i] = Number(prompt("Entrer un nombre"));
}
console.table(tabNombre);
//Vérifier si la somme de deux nombres égale 15.

for( var j = 0; j<12; j++){
    for( var k = 0; k<j; k++){
        if(tabNombre[j] + tabNombre[k] === 15) {
            document.write(tabNombre[j] + " et " + tabNombre[k] + " font 15<br>");
            trouver = true;
        }
    }
}
if(!trouver){
    document.write("Aucune solution!");
}