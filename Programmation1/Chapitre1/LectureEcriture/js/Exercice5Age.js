//Lire le nom et l’âge d’un individu, puis convertir son âge en jours (approximatif). Imprimer un message incluant
// son nom pour l’informer du nombre de jours vécus.

//Variables d'entrée et de sortie
var nom;
var age;
var jours;

//Lecture du nom et de l'âge
nom = prompt("Quel est votre nom?");
age = Number(prompt("Quel âge avez-vous?"));

//Calcul du nombre de jours vécus
jours = age * 365;

//Afficher message du nombre de jours vécus de l'usager

console.log("Cher/chère " + nom + ", vous avez vécu " + jours + "jours. Félicitation!");
