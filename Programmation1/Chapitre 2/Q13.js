//Lire 2 nombres A et B différents. Trouver et afficher le plus petit et le plus grand.    Si les deux nombres sont
// identiques, affichez un message d'erreur à l'utilisateur.


var nb1; //Nombre A
var nb2; //Nombre B
//Demander les nombres à l'utilisateur
nb1 = Number(prompt("Donnez le nombre A."));
nb2 = Number(prompt("Donnez le nombre B."));
//Si le nombre 1 est plus grand
if (nb1 > nb2){
    document.write("Le nombre A ("+ nb1 + ") est le plus grand et le nombre B ("+ nb2 + ") est le plus petit.");
}
//Si le nombre 2 est plus grand
else if( nb2 > nb1){
    document.write("Le nombre B ("+ nb2 + ") est le plus grand et le nombre A ("+ nb1 + ") est le plus petit.");
}
//Si les nombres sont égaux
else{
    document.write("Erreur! Les deux nombres sont égaux = " + nb1);
}