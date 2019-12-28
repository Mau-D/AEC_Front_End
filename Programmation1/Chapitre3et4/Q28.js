//Écrire un programme qui saisit un entier et qui l'affiche à l'envers. Par exemple, l'utilisateur saisit 123456
// et le programme affiche 654321.
// Il est interdit d’utiliser les string pour cette question!
//
// Pour cela il faudra utiliser la division et le modulo. Indice: 153%10 = 3 et 153/10 = 15
var nombre;
var longueurNombre;
var enversNombre;
var division;//résultat de la division


//Demander un nombre
nombre = Number(prompt("Écrire un nombre"));
//Trouver la longueur du nombre
//Math.trunc retourne un entier
//Math.log10 donne la longueur du nombre
longueurNombre = Math.trunc(Math.log10(nombre) + 1);
console.log(longueurNombre);

for(var i=0; i <longueurNombre; i++){
    division  = nombre/10;
    enversNombre = Math.trunc(nombre % 10);
    console.log(enversNombre);
    document.write(enversNombre);
    nombre = division;
    console.log(nombre);
}


