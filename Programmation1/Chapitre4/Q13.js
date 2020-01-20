//Lire 12 nombres quelconques et les mettre dans un tableau.
// Vérifier si le dernier nombre (12e) additionné avec un des 11 autres nombres font une somme de 15.
// Si tel est le cas, afficher ces 2 nombres.

var tabNombre = [];

//Lecture des 12 nombres
for(var i=0; i<12; i++){
    tabNombre[i] = Number(prompt("Entrer un nombre"));
}
console.table(tabNombre);
//Vérifier si la somme d'un des chiffre avec le 12e donne 15
for( var j = 10; j>=0; j--){
    if(tabNombre[11] + tabNombre[j] === 15){
        document.write(tabNombre[11] +" et " + tabNombre[j] + " font 15<br>");
    }
}