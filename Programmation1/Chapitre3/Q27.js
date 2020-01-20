//Lire une string, écrire le mot à l'envers. Patate devient etataP
//             Indice :  mot[0] donne 'P'
//             Indice : mot.length donne 6

var mot;
var longueurMot;


mot = prompt("Écrire un mot");
longueurMot = mot.length;
for(var i=1; i<=longueurMot; i++){
    document.write(mot[longueurMot-i]);
}

