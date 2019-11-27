//Calculer le prix des assurances pour un véhicule.
// Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
// S’il est plus vieux, le taux sera de 3 %.
// Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.

//variables
var ass; //prix des assurances pour un véhicule

var sexe; //garçon ou fille
var age; //âge
var autoValeur; //Valeur de la voiture

//Lecture des variables d'entrée : âge, sexe et valeur du véhicule
sexe = prompt("Écrire F pour fille ou M pour garçon selon votre sexe.");
age = Number(prompt("Écrire votre âge."));
autoValeur = Number(prompt("Écrire la valeur du véhicule."));

//fonction pour arrondir à deux décimales
function financial(x)
{
    return Number.parseFloat(x).toFixed(2);
}

//si l'âge est entre 16 et 25 ans
if(age <= 25 && age >= 16){
    console.log("jeune");
    //pour un garcon
    if (sexe.toUpperCase() === "M"){
        //Calcul du prix
        ass = 0.05 * autoValeur;
        console.log("Je suis un garçon âgé entre 16 et 25 ans.");
    }
    //C'est une fille
    else{
        //Calcul du prix
        ass = 0.03 * autoValeur;
        console.log("Je suis une fille âgée entre 16 et 25 ans.");
    }
}
//Pour les plus vieux
else if(age > 25){
    console.log("vieux");
    if (sexe.toUpperCase() === "M"){
    //Calcul du prix
    ass = 0.03 * autoValeur;
        console.log("Je suis un garçon âgé de plus de 25 ans.");

    }
    //C'est une fille
    else{
        //Calcul du prix
        ass = 0.02 * autoValeur;
        console.log("Je suis une fille âgée de plus de 25 ans.");

    }
}
console.log("Tout va bien?");
document.write("Le prix des assurances est de " + financial(ass) + "$");