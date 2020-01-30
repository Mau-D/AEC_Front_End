//Charivari… vous connaissez? C'est le jeu qui mêle des lettres et
// le joueur doit trouver le mot!!
//
// Consignes:
//
// Entrez le mot à trouver;
// Mélangez les lettres au hasard;
// Affichez le mot mélangé;
// Affichez tous les essais;
//
// Félicitez le joueur quand il a la bonne réponse.
// Ajoutez une touche pour obtenir la réponse du mot recherché lorsque l’usager voudra connaître un mot qu’il ne peut trouver.

var charivari = [];//Mot mélangé du charivari
var reponse, bonMot;
var finPartie = false;

//Mélanger les lettres du mot
var r;//nombre aleatoire
var sauve; //sauvegarde de la donnée échangée
//Demander un mot à mélanger
bonMot = prompt("Écrire un mot pour le charivari").toUpperCase();
//Entrer le mot dans le tbleau
for(var j=0; j<bonMot.length;j++){
    charivari[j] = bonMot[j];
}
console.log(charivari);
//Mélanger le tableau
for(var i=0; i<charivari.length; i++){
    r = Math.floor(Math.random()*(bonMot.length-1));
    console.log(r);
    sauve = charivari[i];
    charivari[i] = charivari[r];
    charivari[r] = sauve;
}
//Afficher le mot mélangé
document.write("Le chartivari est " + charivari);
alert("Le chartivari est " + charivari);
//Demander une réponse tant qu'elle est mauvaise ou le joueur n'a pas abandonné
while (!finPartie) {
    reponse = prompt("Écrire votre réponse ou abondonner en marquant x").toUpperCase();
    document.write("<br>Votre réponse est " + reponse);
    if(reponse ==="X"){
        finPartie = true;
        document.write("<br>Désolé vous abandonnez, la réponse est " + bonMot);
    }
    else if(reponse === bonMot){
        finPartie = true;
        document.write("<br>Félicitation!!!");
        console.log(bonneReponse);
    }
}