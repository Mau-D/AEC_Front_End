// Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR » et si tel n’est pas le cas
// écrire « BONSOIR ».

var nb1; //nombre 1
var nb2; //nombre 2

//Lecture de nombre 1 et 2

nb1 = Number(prompt("Quel est le nombre 1 ?"));
nb2 = Number(prompt("Quel est le nombre 2 ?"));

//Si les deux nombres sont plus grand que 9
if(nb1 > 9 && nb2 > 9){
    document.write("BONJOUR");
}
//Sinon
else{
    document.write("BONSOIR");
}