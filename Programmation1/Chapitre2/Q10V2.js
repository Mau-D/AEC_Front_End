//Lire un nombre entier au clavier et afficher le nom du mois correspondant. Si le nombre saisi ne correspond
//pas à un mois, affichez le message suivant : « Mois invalide ».

var mois;//Nombre correspondant au mois de l'année

//Lecture du nombre
mois = Number(prompt("Entrez le nombre correspondant au mois choisi."));

switch (mois) {
    case 1:
        document.write("Le mois est janvier");
        break;
    case 2:
        document.write("Le mois est février");
        break;
    case 3:
        document.write("Le mois est mars");
        break;
    case 4:
        document.write("Le mois est avril");
        break;
    case 5:
        document.write("Le mois est mai");
        break;
    case 6:
        document.write("Le mois est juin");
        break;
    case 7:
        document.write("Le mois est juillet");
        break;
    case 8:
        document.write("Le mois est août");
        break;
    case 9:
        document.write("Le mois est septembre");
        break;
    case 10:
        document.write("Le mois est octobre");
        break;
    case 11:
        document.write("Le mois est novembre");
        break;
    case 12:
        document.write("Le mois est décembre");
        break;
    default:
    document.write("Mois invalide");
}