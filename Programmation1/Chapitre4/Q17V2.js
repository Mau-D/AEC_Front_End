//Lire 5 valeurs dans un tableau. Trier ce tableau en ordre décroissant.
var tableauValeur = [];
var sauve;
var plusPetit=false;


//Lire 5 valeurs
for(var i=0; i<5; i++){
    tableauValeur[i] = Number(prompt("entrer un nombre"));
}
console.table(tableauValeur);

//Boucler le tableau
for(var j=0; j<tableauValeur.length;j++){
    for(var k=j+1; k<tableauValeur.length;k++){
        plusPetit = tableauValeur[j]<tableauValeur[k];
        if(plusPetit){
            sauve = tableauValeur[j];
            tableauValeur[j] = tableauValeur[k];
            tableauValeur[k] = sauve;
        }

    }
}
   console.table(tableauValeur);