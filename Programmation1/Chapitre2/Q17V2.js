//Lire une lettre de l'alphabet. Afficher le mot voyelle (pour : a, e, i, o, u, y) ou le mot consonne (pour les autres)
// selon la lettre lue.
// Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules ou en majuscules.
var lettre;

//Lire la lettre
lettre = prompt("Entrez une lettre");


switch (lettre.toUpperCase()) {
    case "A"://voyelles
    case "E":
    case "I":
    case "O":
    case "U":
    case "Y":
     document.write("voyelle");
     break;

    default:
         document.write("consonne"); //consonnes
}