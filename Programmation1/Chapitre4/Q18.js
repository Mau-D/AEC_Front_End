//Lire 10 noms et afficher en ordre alphabétique selon la 1ere lettre uniquement.
// Indices :
// var texte1 = “Shany”
// var texte2 = “Carle”
// console.log(texte1[0] < texte2[0]);
// Va afficher false car ‘S’ n’est pas plus petit que ‘C’
//
// tabMots[0] = "shany";
//            console.log(tabMots[0][1]); //Affiche le caractère h
var tabNoms = [];
var ordreAlphabet=false;
//Lire 10 noms
for(var i=0; i<10;i++){
    tabNoms[i]= prompt("Écrire un nom").toUpperCase();
}
console.table(tabNoms);
//Faire le tri
for(var j=0; j<tabNoms.length;j++){
    for(var k=j+1; k<tabNoms.length;k++){
        ordreAlphabet = tabNoms[j]>tabNoms[k];
        if(tabNoms[j]===tabNoms[k]){//Placer la ligne avant pour executer la prochaine condition
            ordreAlphabet = tabNoms[j][1]>tabNoms[k][1];
        }
        if(ordreAlphabet){
            sauve = tabNoms[j];
            tabNoms[j] = tabNoms[k];
            tabNoms[k] = sauve;
        }
    }
}
console.table(tabNoms);