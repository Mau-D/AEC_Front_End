//Le prix de vente d’une voiture neuve est la somme du prix de base, d’un montant de frais et d'un montant de profit du
// concessionnaire et des montants taxes de ventes. Les frais sont de 2% du prix de base et le pourcentage du
// concessionnaire est de 12% du prix de base. et le premier montant de taxe de vente est de 5% du sous-total du
// prix de base, des frais et du profit du concessionnaire et le deuxième montant de taxe est de 9,975% du prix de
// base, des frais et du profit du concessionnaire. Écrire l’algorithme qui lit le prix de base et qui imprime le
// montant de frais, le montant de commission, les deux montants de taxes et le prix de vente total, le tout sur des
// lignes différentes avec des messages explicites.

//Variables d'entrée et de sortie
var PrixBase;
var frais;
var profit;
var soustotal;
var tps;
var tvq;
var total;

//Demander le prix de base à l'utilisateur
PrixBase = Number(prompt("Entrez le prix de base de la voiture: "));

//Calcul des frais
frais = 0.02 * PrixBase;

//Calcul de la commission du concessionnaire
profit = 0.12 * PrixBase;

//Calcul du sous-total

soustotal = PrixBase + frais + profit;

//Calculs des taxes
tps = 0.05 * soustotal;
tvq = 0.09975 * soustotal;

//Calcul du montant total de la voiture
total = soustotal + tps + tvq;

//Fonction pour arrondir à deux décimales

function financial(x)
{
    return Number.parseFloat(x).toFixed(2);
}

//Afficher les différents montants de la facture de la voiture neuve dans la console

console.log("Pour une voiture d'un montant de base de " + PrixBase + "$.");
console.log("Le montant des différents frais sont de " + financial(frais) + "$");
console.log("Le montant dela commission du concessionnaire est de " + financial(profit) + "$");
console.log("Le montant de la TPS est de " + financial(tps) + "$");
console.log("Le montant de la TVQ est de " + financial(tvq) + "$");
console.log("Pour un grand total de " + financial(total) + "$");



