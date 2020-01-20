//Dans ce jeu, le croupier retourne d’abord deux cartes sur la table. Le joueur doit
// ensuite parier si la valeur de la prochaine carte (la troisième) sera ou non classée entre les deux premières cartes.
// S’il remporte son pari, il gagne la partie, sinon il perd.
//
// Nous proposerons ici une version quelque peu modifiée du jeu. Pour rendre les paris plus intéressants,
// le joueur devra parier tant qu’il gagne (tant que ses prédictions sont correctes).
//
// Votre algorithme doit donc générer et afficher deux nombres aléatoires de 1 à 13. Il doit ensuite demander
// à l’utilisateur de faire ses paris. Lorsque l’utilisateur perd, le nombre de prédictions remportées est affiché.


//Inspiré du corrigé

var carte1, carte2, carte3;
var partieTerminee = false; //Valeur booléenne pour indiquer la fin de la partie
var pari;//Parier si la carte 3 sera entre ou pas les cartes 1 et 2

//Boucle jusqu'à une partie perdu
while(partieTerminee === false) {
    //Générer les deux cartes du croupier
    carte1 = Math.floor(Math.random() * 13) + 1;
    carte2 = Math.floor(Math.random() * 13) + 1;
    pari = prompt("Carte 1 = " + carte1 + "<br> Carte 2 = " + carte2 + "<br>Parier si la carte 3 sera entre les deux cartes oui(O) ou non (N)").toUpperCase();
    carte3 = Math.floor(Math.random() * 13) + 1;
    if(carte3 < carte1 && carte3 > carte2 || carte3 > carte1 && carte3 < carte2){
        if(pari ==="O") {
            document.write("Carte 3 = " + carte3 + "<br> BRAVO!!!, Vous pouvez continuer à jouer.");
        }
        else{
            document.write("Carte 3 = " + carte3 + "<br> Désolé!!!, Fin de la partie.");
            partieTerminee = true;
        }
    }
    else{
        if(pari ==="N") {
            document.write("Carte 3 = " + carte3 + "<br> BRAVO!!!, Vous pouvez continuer à jouer.");
        }
        else{
            document.write("Carte 3 = " + carte3 + "<br> Désolé!!!, Fin de la partie.");
            partieTerminee = true;
        }
    }

}