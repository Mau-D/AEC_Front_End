//Faire un programme qui boucle 10 fois. À toutes les itérations, votre programme génère
// un nombre aléatoire entre 0 et 1 et vous demande aussi de choisir un nombre entre 0 et 1.
// Si le nombre est identique, vous gagnez, perdez sinon. Vous affichez le pointage à la fin des 10 itérations.

var nombreAleatoire;
var nombreUtilisateur;
var pointageGagnant = 0;
var pointagePerdant = 0;


for (var i = 0; i < 10; i++) {
    nombreAleatoire = Math.round(Math.random());
    nombreUtilisateur = Number(prompt("Entrer un nombre entre 0 ou 1"));
    if (nombreUtilisateur === nombreAleatoire) {
        pointageGagnant++;
    }
    else{
        pointagePerdant++;
    }
    console.log(nombreAleatoire + "--->" + nombreUtilisateur);
}

document.write("Vous avez gagné " + pointageGagnant + " parties.<br>");
document.write("Vous avez perdu " + pointagePerdant + " parties.");

