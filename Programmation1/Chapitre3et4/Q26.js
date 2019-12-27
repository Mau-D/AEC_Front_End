//Dans ce jeu, le croupier retourne d’abord deux cartes sur la table. Le joueur doit
// ensuite parier si la valeur de la prochaine carte (la troisième) sera ou non classée entre les deux premières cartes.
// S’il remporte son pari, il gagne la partie, sinon il perd.
//
// Nous proposerons ici une version quelque peu modifiée du jeu. Pour rendre les paris plus intéressants,
// le joueur devra parier tant qu’il gagne (tant que ses prédictions sont correctes).
//
// Votre algorithme doit donc générer et afficher deux nombres aléatoires de 1 à 13. Il doit ensuite demander
// à l’utilisateur de faire ses paris. Lorsque l’utilisateur perd, le nombre de prédictions remportées est affiché.

var carte1;
var carte2;
var carte3;
var placementCarte;//Pour placer la carte la plus petite dans carte 1
var pari = ""; //oui ou non
var partieTerminee = false;
var partieGagnee = 0; //Compteur de parties gagnées

while(partieTerminee === false){
    //Générer les deux cartes du croupier
    carte1 = Math.floor(Math.random()*13) + 1;
    carte2 = Math.floor(Math.random()*13) + 1;
    console.log(carte1);
    console.log(carte2);
   //Trouver la plus petite carte
    if (carte1 > carte2){
        placementCarte = carte1;
        carte1 = carte2;
        carte2 = placementCarte;
    }
    console.log(carte1);
    console.log(carte2);
    //Afficher les cartes
    alert("Carte 1 = "+ carte1 + "     Carte 2 = " + carte2);
    //Faire le pari
    pari = prompt("Pariez! La prochaine carte sera entre les deux cartes oui ou non");
    //Jouer la troisième carte
    carte3 = Math.floor(Math.random()*13) + 1;
    alert("Carte 3 = " + carte3);

    //Vérifier si le pari est gagné ou perdu
    if (pari.toUpperCase() === "OUI"){
        if (carte3 > carte1 && carte3 < carte2){
            partieGagnee++;
            alert("Vous avez gagné!, Continuons à jouer.");
        }
        else{
            partieTerminee = true;
        }
    }
    else if(pari.toUpperCase() === "NON"){
        if(carte3 <= carte1 || carte3 >= carte2){
            partieGagnee++;
            alert("Vous avez gagné!, Continuons à jouer.");
        }
        else{
            partieTerminee = true;
        }
    }

}
document.write("Vous avez perdu! Fin de la partie.<br>");
document.write("Vous avez remportés " + partieGagnee + " parties.");