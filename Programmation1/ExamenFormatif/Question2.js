// Vous devez calculer le nombre de points de dommages de l’attaque Mad Bull GX de Tauros. L’attaque fait :
//
//     100 points de dommages si l’adversaire a moins de 60 points de vie (hp).
// 150 points de dommages si l’adversaire a entre 60 et 79 hp.
// 200 points de dommages si l’adversaire a entre 80 et 99 hp.
// 250 points si l’adversaire a 100 hp et plus.
//
//     Écrire un algorithme le code qui permet de :
//
//     Calculer et d’afficher les points de dommages de l’attaque Mad Bull GX à partir des points de vie d’un Pokémon adversaire.

var dommageTauros; //Nombre de points de dommages de Tauros
var hp; //Points de vie d'un Pokémon adversaire

//Lecture du nombre de point de vie du pokémon
hp = Number(prompt("Quelle est le nombre de vie (hp) du Pokémon?"));

//IF
if(hp < 60){
    dommageTauros = 100;
}
else if (hp >= 60 && hp < 80){
    dommageTauros = 150;
}
else if (hp >= 80 && hp < 100){
    dommageTauros = 200;
}
else if (hp >= 100){
    dommageTauros = 250;
}

document.write("Le nombre de points de dommage de Tauros est de " + dommageTauros);