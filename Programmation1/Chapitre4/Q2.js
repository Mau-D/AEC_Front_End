//Créez un tableau qui contient les 12 mois de l’année en utilisant une technique différente du numéro 1 et
//affichez-le à l’aide d’une boucle Pour.

var mois = [];
var moisVersion2 = [];
mois.push("Janvier");
mois.push("Février");
mois.push("Mars");
mois.push("Avril");
mois.push("Mai");
mois.push("Juin");
mois.push("Juillet");
mois.push("Août");
mois.push("Septembre");
mois.push("Octobre");
mois.push("Novembre");
mois.push("Décembre");

for(var i=0; i < mois.length; i++){
    document.write(mois[i] + "<br>");
    console.table(mois[i]);
}
moisVersion2[0] = "Janvier";
moisVersion2[1] = "Février";
moisVersion2[2] = "Mars";
moisVersion2[3] = "Avril";
moisVersion2[4] = "Mai";
moisVersion2[5] = "Juin";
moisVersion2[6] = "Juillet";
moisVersion2[7] = "Aoüt";
moisVersion2[8] = "Septembre";
moisVersion2[9] = "Octobre";
moisVersion2[10] = "Novembre";
moisVersion2[11] = "Décembre";
for(var j=0; j < moisVersion2.length; j++){
    document.write(mois[j] + "<br>");
    console.table(mois[j]);
}