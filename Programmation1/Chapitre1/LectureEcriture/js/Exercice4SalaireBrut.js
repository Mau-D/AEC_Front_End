//Calculer le salaire brut d’un employé. Il est payé à l’heure et les données concernant le taux horaire et le nombre
// d’heures travaillées sont fournies en entrée.

//Variables d'entrée et de sortie

var taux;
var heure;
var salaire;

//Lecture du taux horaire
taux = Number(prompt("Entrez votre taux horaire svp"));

//Lecture du nombre d'heure travaillé
heure = Number(prompt("Entrez le nombre d'heure travaillé"));

//Calcul du taux horaire
salaire = taux * heure;

//Afficher le salaire brut dans la console
console.log("Le salaire brut est de " + salaire + "$")