//Trouvez les nombres parfaits
// On souhaite écrire un programme qui calcule les n premiers nombres parfaits. Un nombre est dit parfait s’il est égal
// à la somme de ses diviseurs, 1 compris.
// Exemple : 6 = 1+2+3 , est un nombre parfait.

var entier;
var division;
var somme;

//Nombre à vérifier
for(var nb=1; nb<=50000; nb++){
    //Trouver les diviseurs
    for(var i=1; i<=nb; i++){
        division = nb / i;
        entier = Number.isInteger(division);    //Vérifer que le résultat de la division est un entier
        if(entier === true){
            somme = somme + i; //Faire la somme des diviseurs
        }
    }
    //Vérifier la loi des nombres parfaits
    if (somme === 2*nb){
        document.write(nb + "<br>")
    }
    somme = 0; //Réinitialiser la valeur
}
