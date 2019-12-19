//Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00.

var taxe; //9%

function financial(x)     //fonction pour arrondir à deux décimales
{
    return Number.parseFloat(x).toFixed(2);
}
document.write("Montant --> taxe<br>");
for (var montant =5; montant <=100; montant +=5){
    taxe = 0.09 * montant; //Calcul de la taxe
    document.write(financial(montant) + "$-->" + financial(taxe) + "$<br>");
}