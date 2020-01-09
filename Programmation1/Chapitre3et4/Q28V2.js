//Écrire un programme qui saisit un entier et qui l'affiche à l'envers. Par exemple, l'utilisateur saisit 123456
// et le programme affiche 654321.
// Il est interdit d’utiliser les string pour cette question!
//
// Pour cela il faudra utiliser la division et le modulo. Indice: 153%10 = 3 et 153/10 = 15


var nombre;
var division = 1;//résultat de la division

//Demander un nombre
nombre = Number(prompt("Écrire un nombre"));

while(division >= 1){
    division  = nombre/10;
    enversNombre = Math.trunc(nombre % 10);
    console.log(enversNombre);  //Vérification
    document.write(enversNombre);
    nombre = division;
    console.log(nombre)//Vérification
}


