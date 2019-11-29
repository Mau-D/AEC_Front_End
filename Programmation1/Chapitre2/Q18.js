//Lire une note d’examen et afficher « Échec » si la note est inférieure à 60 et « Bravo » si la note est supérieure ou égale à 60.

var note; //note d'examen

//Lire la note
note = Number(prompt("Entrer la note d'examen"));
if (note>=0 && note<=100) {
    if (note < 60) {
        document.write("Échec");
    }
    else {
        document.write("Bravo");
    }
}
else{
    document.write("Erreur! La note doit être comprise entre 0 et 100.")
}
