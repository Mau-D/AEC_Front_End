//Faire l’algorithme qui permet de calculer la facture d’un client. Cette facture contient la date, le montant de
// chacun des 3 articles achetés, les taxes de vente et le grand total de la facture. Vous demandez à l'usager la date
// et le montant de chacun des 3 articles achetés. Le montant de TPS est de 5% et la TVQ est de 9.975%. Vous affichez
// la date, les 2 montants de taxes et le grand total.

//Variables d'entrée et de sortie
var date;
var article1;
var article2;
var article3;
var soustotal;
var tps;
var tvq;
var total;


//Informations demandées à l'usager
date = prompt("Inscrire la date des achats:");
article1 = Number(prompt("Inscrire le montant du premier article"));
article2 = Number(prompt("Inscrire le montant du deuxième article"));
article3 = Number(prompt("Inscrire le montant du troisième article"));

//Calculs des taxes et du grand total, arrondir èa deux décimals
soustotal = article1 + article2 + article3;
tps =  0.05 * soustotal;
tvq = 0.09975 * soustotal;
total = soustotal + tps + tvq;

//Fonction pour arrondir à deux décimales
function financial(x)
{
    return Number.parseFloat(x).toFixed(2);
}



//Afficher les détails de la facture dans la console;
console.log(date);
console.log("TPS = " + financial(tps) + " $");
console.log("TVQ = " + financial(tvq) + " $");
console.log("Total = " + financial(total) + " $");