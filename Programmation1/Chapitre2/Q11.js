//Lire une lettre au clavier.
// Si la lettre est 'w', écrire Avancer.
// Si la lettre est 'a', écrire Gauche.
// Ajouter 's' et 'd'. reculer et droite
// Si c'est autre chose, écrire un message d'erreur.

var lettre; //lettre au clavier

//Lecture de la lettre
lettre = prompt("Entrez une lettre au clavier.");

//cas pour la lettre w
if(lettre === "w"){
    document.write("Avancer");
}
//cas pour la lettre a
else if (lettre === "a"){
    document.write("Gauche");
}
//cas pour la lettre s
else if (lettre === "s"){
    document.write("Reculer");
}
else if (lettre === "d"){
    document.write("Droite");
}
else{
    document.write("Erreur: lettre entrée incorrecte, choisir a, w, s ou d.")
}