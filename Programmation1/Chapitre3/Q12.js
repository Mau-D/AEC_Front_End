//Le premier jour de l'ouverture de votre compte, vous déposez .01 . À chaque jour pendant 10 jours, vous déposez
// le double de la veille. Affichez pour chaque jour, le numéro du jour, le montant déposé et le solde de votre compte.

var depot = 0.01;
var solde = 0;

document.write("Jour-->Montant-->Solde<br>");
for (var jour=1; jour<=10; jour++){

    solde += depot;
    document.write(jour + "-->" + depot.toFixed(2) + "$-->" + solde.toFixed(2) + "$<br>");
    depot = depot * 2;
}