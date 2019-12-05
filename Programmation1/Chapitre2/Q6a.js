// Lire une note au clavier et afficher la lettre correspondante.
// 90 et plus : A
// Entre 80 et 90 : B
// Entre 70 et 80 : C
// Entre 60 et 70 : D
// Moins de 60 : E
//
// * Codez l’exercice #6 2 fois, une fois en débutant le IF par la cote A et une fois par la cote E
// (en sens inverse).

var note; //Note inscrite en %
var lettre; //Lettre correspondante à la note en %

//Lecture de la note
note = Number(prompt("Quelle est la note en %?"));

//Affiche la correspondance en lettre selon la note
if(note >= 90 && note <=100){
   lettre = "A";
}
else if (note >= 80 && note < 90 ){
    lettre = "B";
}
else if (note >= 70 && note < 80 ){
    lettre = "C";
}
else if (note >= 60 && note < 70 ){
    lettre = "D";
}
else if (note < 60 && note >=0){
    lettre = "E";
}
else{
    alert("Erreur! Entrez une note entre 0 et 100.");
}
document.write("Votre note correspond à un " + lettre + ".");
