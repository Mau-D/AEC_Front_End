//À l’aide d’une boucle, créez un tableau de 1000 valeurs contenant vrai ou faux (boolean).
// Ces valeurs doivent être aléatoires. Ensuite, à l’aide d’une autre boucle, comptez le nombre de vrai et de faux et
// faites-les afficher.
// Calculez la plus longue séquence de vrais et de faux consécutifs.
// Plus longue séquence de vrais consécutifs : 3
// Plus longue séquence de faux consécutifs  : 4
// Donnez aussi la position de départ de chacune des séquences :
// Position de départ de la plus longue séquence de vrais consécutifs : 6
// Position de départ de la plus longue séquence de faux consécutifs  : 12

var tabVraiOuFaux= [];
var compteurVrai=0; //Nombre de vrais
var compteurFaux=0; //Nombre de faux


//Créer un tableau de 1000 valeurs booléennes aléatoires
for(var i=0; i<1000; i++){
    tabVraiOuFaux[i]=(Boolean(Math.round(Math.random()))); //Boolean(Math.floor(Math.random()*2))
    console.log(i);
    console.log(tabVraiOuFaux[i]);
    if(tabVraiOuFaux[i] === true){
        compteurVrai++;
    }
    else{
        compteurFaux++
    }
}

//Afficher le nombre de vrai et de faux
document.write("Il y a " + compteurVrai + " vrais<br>");
document.write("Il y a " + compteurFaux + " faux<br>");
