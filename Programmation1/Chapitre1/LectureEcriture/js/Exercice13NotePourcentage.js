//Lire les quatre éléments d’information suivants :
// le nom de l’étudiant,
// la note de laboratoire, (compte pour 20%)
// la note de l’examen de mi-session  (compte pour 30%)
// la note de l’examen de fin de session. (compte pour 50%)
// Toutes les notes lues sont sur 100.
// Affiche le nom suivi des trois notes lues qui ont été ramenées sur le pourcentage demandé ci-dessus, et de la note
// finale. Le tout sur des lignes différentes accompagné de messages clairs.

//Variables d'entrée et de sortie
var nom;
var laboratoire100;
var MiSession100;
var FinSession100;

var laboratoire20;
var MiSession30;
var FinSession50;
var NoteFinale;

//Lecture du nom de l'étudiant et de ces trois notes

nom = prompt("Écrire votre nom");
laboratoire100 = Number(prompt("Inscrire la note de laboratoire en %"));
MiSession100 = Number(prompt("Inscrire la note de l'examen de mi-session en %"));
FinSession100 = Number(prompt("Inscrire la note de l'examen de fin de session en %"));

//Calculs pour ramener les notes selon la pondération

laboratoire20 = laboratoire100 * 20 / 100;
MiSession30 = MiSession100 * 30 / 100;
FinSession50 = FinSession100 * 50 / 100;

//Calcul de la note finale
NoteFinale = laboratoire20 + MiSession30 + FinSession50;

//Afficher le nom, les notes pondérées et la note finale
console.log("Nom de l'étudiant: " + nom );
console.log("A obtenu la note de " + laboratoire20 + "/20" + " en laboratoire.");
console.log("A obtenu la note de " + MiSession30 + "/30" + " à l'examen de mi-session.");
console.log("A obtenu la note de " + FinSession50 + "/50" + " à l'examen de fin de session.");
console.log("Donc, sa note finale est de " + NoteFinale + "%");

