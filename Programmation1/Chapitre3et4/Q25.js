//Trouvez les nombres parfaits
// On souhaite écrire un programme qui calcule les n premiers nombres parfaits. Un nombre est dit parfait s’il est égal
// à la somme de ses diviseurs, 1 compris.
// Exemple : 6 = 1+2+3 , est un nombre parfait.

var entier;//Valeur booléenne indiquant si la division est un entier
var division = 0;//diviseur
var somme = 0;//Somme des diviseurs
var nb = 0; //nombre à vérifier
var compteur = 0;//quantité de nombres
var parfait; //Quantité de nombre parfait

parfait = Number(prompt("Combien voulez vous de nombres parfaits?"));

//Nombre à vérifier

for(var j=1; compteur !== parfait; j++){
    nb = j;
    //Trouver les diviseurs
    for(var i=1; i<nb; i++){ //<nb, car un nombre se divise toujours par lui-même
        division = nb / i;
        entier = Number.isInteger(division);    //Vérifier que le résultat de la division est un entier
        if(entier === true){
            somme += i; //Faire la somme des diviseurs
        }
    }
    console.log(nb + "-->" + somme);
    //Vérifier la loi des nombres parfaits
    if (somme === nb){
        document.write(nb + "<br>")
        compteur ++;
    }
    somme = 0; //Réinitialiser la valeur
}
