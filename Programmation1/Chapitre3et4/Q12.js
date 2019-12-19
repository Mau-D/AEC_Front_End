//Le premier jour de l'ouverture de votre compte, vous déposez .01 . À chaque jour pendant 10 jours, vous déposez
// le double de la veille. Affichez pour chaque jour, le numéro du jour, le montant déposé et le solde de votre compte.

var montant = 0.005;
var solde = 0;

function financial(x)     //fonction pour arrondir à deux décimales
{
    return Number.parseFloat(x).toFixed(2);
}

document.write("Jour-->Montant-->Solde<br>");
for (var jour=1; jour<=10; jour++){
    montant = montant * 2;
    solde = solde + montant;
    document.write(jour + "-->" + financial(montant) + "$-->" + financial(solde) + "$<br>");
}