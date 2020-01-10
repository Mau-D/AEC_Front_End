//Modifiez le numéro précédent pour trouver le plus grand nombre possible en JavaScript.


var tab2Exp = [];


for(var i=0; i<1024; i++){  //Nombre maximum en Javascript 2 e 1023, après le résultat = Infinity

    tab2Exp[i] = (Math.pow(2, i));

}
console.table(tab2Exp);
