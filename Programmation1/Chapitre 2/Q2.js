//Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant total de ses achats est plus grand
// que 200.00$. Écrire un algorithme qui permet de calculer et d’afficher la réduction que chaque acheteur a droit,
// connaissant le montant total des achats.

//variables
var total; //Montant total des achats
var rabais; //Montant de la réduction

//Lecture du montant total des achats
total = Number(prompt("Quel est le montant total des achats?"));

//fonction pour arrondir à deux décimales
function financial(x)
{
    return Number.parseFloat(x).toFixed(2);
}

//Calcul de la réduction de 15% si le montant est de de 200 et + et afficher le résultat
if (total > 200){
    rabais = 0.15 * total;
    console.log("Rabais: " + rabais);
    document.write("La réduction est de " + financial(rabais)+ "$.");
}
else {
        document.write("Pour un montant total de  200$ et moins, la réduction n'est pas accordée.");
}

