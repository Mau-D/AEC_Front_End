//Ecrire un programme qui demande à l'utilisateur de saisir un entier N et qui affiche la figure suivante.
//         N=1
//         *
//         N=2
//         **
//         N=3
//         ***

var entierN;

entierN = Number(prompt("Entrez un mombre entier"));

for(var i=0; i <entierN; i++){
    document.write("*");
}
console.log(i);