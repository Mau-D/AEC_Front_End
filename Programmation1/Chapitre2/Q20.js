//Lire l’âge d’un individu et afficher le mot :
// « Adulte » si l’âge est >= 18 ans
// « Adolescent » si l’âge est compris entre 12 et 17 ans inclusivement
// « Enfant » si l’âge est < 12 ans.

var age;
var statut;

//Lire l'âge
age = Number(prompt("Entrez votre âge"));

if (age >= 18){
    statut = "Adulte";
}
else if(age >= 12 && age < 18){
    statut = "Adolescent";

}
else if(age > 0 && age < 12){
    statut = "Enfant";
}
else{
    alert("Erreur! entrez un nombre.")
}
document.write("Selon votre âge vous êtes un " + statut);
