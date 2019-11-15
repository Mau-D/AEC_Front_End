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

//Lecture de la note
note = Number(prompt("Quelle est la note en %?"));

//Affiche la correspondance en lettre selon la note
if(note < 60){
    document.write("Votre note correspond à un E.");
}
else if (note >= 60 && note < 70 ){
    document.write("Votre note correspond à un D.");
}
else if (note >= 70 && note < 80 ){
    document.write("Votre note correspond à un C.");
}
else if (note >= 80 && note < 90 ){
    document.write("Votre note correspond à un B.");
}
else{
    document.write("Votre note correspond à un A.");

}