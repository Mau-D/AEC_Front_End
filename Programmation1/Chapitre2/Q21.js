//Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
// revenu > 0 et $7000.00 inclus : 16% du revenu imposable
// > 7000 et $14000.00 inclus : $1120 + 19.5% du reste
// >14000 et $23000.00 inclus : $2485 + 21.5% du reste
// >23000 et $50000.00 inclus : $4420 + 24.5% du reste
// >50000 et + $11035 + 26% du reste.

var revenu; //revenu imposable
var impot; //impôt provincial

//Lecture du revenu imposable
revenu = Number(prompt("Entrez votre revenu"));
//fonction pour arrondir à deux décimales
function financial(x)
{
    return Number.parseFloat(x).toFixed(2);
}

if (revenu <= 7000){
    impot = 0.16 * revenu;
}
else if(revenu > 7000 && revenu <= 14000){
    impot = 1120 + (revenu - 1120) * 0.195;
}
else if(revenu > 14000 && revenu <= 23000){
    impot = 2485 + (revenu - 2485) * 0.215;
}
else if(revenu > 23000 && revenu <= 50000){
    impot = 4420 + (revenu - 4420) * 0.245;
}
else{
    impot = 11035 + (revenu -11035) * 0.26;
}

//Afficher l'impôt provincial
document.write("L'impôt provincial est de " + financial(impot) + "$");