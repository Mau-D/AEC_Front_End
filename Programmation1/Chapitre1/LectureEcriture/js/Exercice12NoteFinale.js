//Écrire un algorithme qui calcule la note finale d’un étudiant sur 100%. Cette note est dérivée des trois notes
// suivantes : note à l’examen de mi-session qui compte pour 30% de la note finale, note de l’examen de fin session qui
// compte pour 50% et la note de laboratoire qui compte pour 20%.


//Variables d'entrée et de sortie
var ExMiSession;
var ExFinal;
var labos;
var NoteFinal;

//Notes demandées à l'usager
ExMiSession = Number(prompt("Inscrire votre note (/30) de l'examen de mi-session"));
ExFinal = Number(prompt("Inscrire votre note (/50) de l'examen final"));
labos = Number(prompt("Inscrire votre note (/20) de laboratoire"));


//Calcul de la note final
NoteFinal = ExMiSession + ExFinal + labos;

//Afficher la note finale
console.log("La note finale est: " + NoteFinal + "%");

