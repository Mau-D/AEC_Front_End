//Trouvez les nombres parfaits
// On souhaite écrire un programme qui calcule les n premiers nombres parfaits. Un nombre est dit parfait s’il est égal
// à la somme de ses diviseurs, 1 compris.
// Exemple : 6 = 1+2+3 , est un nombre parfait.

//Inspiré du corrigé...Trouver les nombres entre 0 et 1000
var somme=0;  //somme des diviseurs

for(var i=1; i<1000; i++){
    //Trouver les diviseur
    for(var diviseur =1; diviseur<i; diviseur++){   //Ne pas mettre le chiffre lui-même diviseur<i
        if (i % diviseur === 0) //Utiliser le modulo =0 si la division donne un entier
            somme+=diviseur;
    }
    if(somme === i){
        document.write(i + "<br>");
    }
    somme = 0; //Initialiser la variable
}