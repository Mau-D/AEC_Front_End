//Exercice 12 à modifier
//Le code présenté n'est pas complet!!
// Que se passe-t-il si l'utilisateur entre "O" comme sexe ?
// Complétez le code présenté et assurez-vous
// de gérer TOUS les cas possibles (Sexe, âge et valeur).
// Défi !  Trouvez une façon d'afficher la prime en vert si l'utilisateur est de sexe masculin et en magenta pour le sexe féminin.
// Indice : utilisez le style.css et le document.write

var sexe;//fille ou garçon
var age;
var prime;
var valeur;
var taux; //Taux en vigueur selon le cas

//Lecture
sexe = prompt("Veuillez entrer votre sexe: M pour garçon et F pour fille");
age = Number(prompt("Veuillez entrer votre âge."));
valeur = Number(prompt("Veuillez entrer la valeur du véhicule."));

//Forcer une majuscule pour le sexe
sexe = sexe.toUpperCase();


if (sexe.toUpperCase() === "M"){ //Garcon
    if(age >= 16 && age <= 25){
        taux = 0.05;
    }
    else if (age >25){
        taux = 0.03;
    }
    else{
        alert("Désolé! vous n'avez pas l'âge légal pour avoir une voiture.");
    }
    prime = valeur * taux;
    document.write("Votre prime est de : <strong class='M'>"  + prime + " </strong> $");

}

else if(sexe.toUpperCase() === "F"){ //fille
    if(age >= 16 && age <= 25){
        taux = 0.03;
    }
    else if(age >25){
        taux = 0.02;
    }
    else{
        alert("Désolé! vous n'avez pas l'âge légal pour avoir une voiture.");
    }
    prime = valeur * taux;
    document.write("Votre prime est de : <strong class='F'>"  + prime + " </strong> $");
}
else {
    alert("Désolé! vous avez entré le mauvais caractère pour le sexe: utiliser M pour garçon et F pour fille.");
}

