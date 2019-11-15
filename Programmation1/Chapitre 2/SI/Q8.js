// Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé. Affichez son salaire.
// (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées.
// Une semaine de travail normale est de 40 heures.

var taux; //Taux horaire
var heure;//Nombre d'heures travaillées

var salaire;// Salaire hebdomadaire


//Lecture du taux horaire et du nombre d'heures travaillées
taux = Number(prompt("Quel est votre taux horaire?"));
heure = Number(prompt("Combien d'heures avez-vous travaillé cette semaine?"));

//Si le nombre d'heure ne dépasse pas 40 heures
if(heure <= 40){
    salaire = taux * heure;
}
else{
    salaire = (40 * taux) + ((heure - 40) * 2 * taux);
}
document.write("Votre salaire cette semaine est de " + salaire + "$");