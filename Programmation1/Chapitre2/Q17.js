//Lire une lettre de l'alphabet. Afficher le mot voyelle (pour : a, e, i, o, u, y) ou le mot consonne (pour les autres)
// selon la lettre lue.
// Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules ou en majuscules.
var lettre;

//Lire la lettre
lettre = prompt("Entrez une lettre");

if (lettre.toUpperCase() === "A" || lettre.toUpperCase() === "E" || lettre.toUpperCase() === "I" ||
    lettre.toUpperCase() === "O" || lettre.toUpperCase() ==="U" || lettre.toUpperCase() === "Y"){   //voyelles
    document.write("voyelle");
}
else{   //consonnes
    document.write("consonne");
}