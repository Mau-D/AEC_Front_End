//Lire une lettre au clavier.
// Si la lettre est 'w', écrire Avancer.
// Si la lettre est 'a', écrire Gauche.
// Ajouter 's' et 'd'. reculer et droite
// Si c'est autre chose, écrire un message d'erreur.

var lettre; //lettre au clavier
var mvt = ""; //mouvement commandée

//Lecture de la lettre
lettre = prompt("Entrez une lettre au clavier.");

//cas pour la lettre w
if(lettre === "w"){
    mvt = "Avancer";
}
//cas pour la lettre a
else if (lettre === "a"){
    mvt = "Gauche";
}
//cas pour la lettre s
else if (lettre === "s"){
    mvt = "Reculer";
}
else if (lettre === "d"){
    mvt = "Droite";
}
else{
    alert("Erreur: lettre entrée incorrecte, choisir a, w, s ou d.");
}
document.write("Commande: " + mvt);