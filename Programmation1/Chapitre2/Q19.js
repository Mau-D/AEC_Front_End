//Lire le montant de vente et afficher le montant d’escompte correspondant sachant que le taux d’escompte est de 12%
// et n’est calculé que sur les montants supérieurs ou égaux à $500.00.

var vente; //montant de vente
var rabais; //montant d'escompte 12%

//Lecture du montant de vente
vente = Number(prompt("Entrez le montant de vente"));

//fonction pour arrondir à deux décimales
function financial(x)
{
    return Number.parseFloat(x).toFixed(2);
}

//Condition du rabais: seulement sur les montants de 500 et +
if (vente >= 500){
    rabais = 0.12 * vente;
    document.write("Le montant de l'escompte accordé est de " + financial(rabais) + "$");
}
else{
    document.write("Désolé, l'escompte s'applique seulement sur un achat de 500$ et plus");
}