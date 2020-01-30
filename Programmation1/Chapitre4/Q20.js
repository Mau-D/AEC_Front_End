//À l’aide d’une boucle, créez un tableau de 1000 valeurs contenant vrai ou faux (boolean). Ces valeurs doivent être aléatoires. Ensuite, à l’aide d’une autre boucle, comptez le nombre de vrai et de faux et faites-les afficher.
//
// Calculez la plus longue séquence de vrais et de faux consécutifs.
// Ex:
//
//
// Plus longue séquence de vrais consécutifs : 3
// 	Plus longue séquence de faux consécutifs  : 4
//
// Donnez aussi la position de départ de chacune des séquences :
// 		Position de départ de la plus longue séquence de vrais consécutifs : 6
// 		Position de départ de la plus longue séquence de faux consécutifs  : 12

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
var consecutifVrai=1;
var consecutifFaux=1;
var plusLongVrai=0;
var plusLongFaux=0;
var positionVrai=0;
var positionFaux=0;



//Créer un tableau de 1000 valeurs booléennes aléatoires
for(var i=0; i<1000; i++) {
    tabVraiOuFaux[i] = (Boolean(Math.round(Math.random()))); //Boolean(Math.floor(Math.random()*2))
    console.log(i);
    console.log(tabVraiOuFaux[i]);
}
for(var j=0; j<1000; j++) {
    if (tabVraiOuFaux[j] === true) {
        compteurVrai++;
        if(tabVraiOuFaux[j+1] === true){
            consecutifVrai++;
        }
        else{
            if(consecutifVrai>plusLongVrai){
                plusLongVrai = consecutifVrai;
                positionVrai = j-plusLongVrai+1;
                consecutifVrai = 1;
            }
            else{
                consecutifVrai = 1;
            }
        }
    }
    else {
        compteurFaux++;
        if(tabVraiOuFaux[j+1] === false){
            consecutifFaux++;
        }
        else{
            if(consecutifFaux>plusLongFaux){
                plusLongFaux = consecutifFaux;
                positionFaux = j-plusLongFaux+1;
                consecutifFaux = 1;
            }
            else{
                consecutifFaux = 1;
            }
        }
    }
}
//Vrai et faux consécutifs


//Afficher le nombre de vrai et de faux
document.write("Il y a " + compteurVrai + " vrais<br>");
document.write("Il y a " + compteurFaux + " faux<br>");
document.write("Le plus grand nombre de vrai est " + plusLongVrai + " et commence à la position " + positionVrai);
document.write("<br>Le plus grand nombre de faux est " + plusLongFaux + " et commence à la position " + positionFaux);
