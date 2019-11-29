//Lire 2 nombres au clavier.
//         Si ces 2 nombres sont :
//    1         supérieurs ou égaux à 10, affichez leur somme
//     2        inférieurs à 10, affichez leur produit
//      3   Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10, affichez la différence entre les deux nombres.

var nb1;
var nb2;
var resultat; //résultat des opérations mathématiques

//Lecture des deux nombres
nb1 = Number(prompt("Entrez le premier nombre"));
nb2 = Number(prompt("Entrez le deuxième nombre"));

//si les deux nombes sont >10
if(nb1 >= 10 && nb2 >=10){ //cas 1
    resultat = nb1 + nb2;
    document.write("La somme des deux nombres est = " + resultat);
}
else if (nb1 >= 10 || nb2>=10){
    if(nb1>=10) {   //Cas 3 nb1>nb2
        resultat = nb1 - nb2;
        document.write("La différence des deux nombres est = " + resultat);
    }
    else {  //Cas 3 nb2>nb1
        resultat = nb2 - nb1;
        document.write("La différence des deux nombres est = " + resultat);
    }
}
else{   //cas 2
        resultat = nb1 * nb2;
        document.write("Le produit entre le nombre 1 et le nombre 2 est = " + resultat);
}

