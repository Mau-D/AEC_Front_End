//Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et compter le nombre de 0 et de 1.
var aleatoireNb;
var zeroNb = 0;
var unNb = 0;

for(var i = 0; i < 100; i++){
    aleatoireNb = Math.round(Math.random());
    document.write(aleatoireNb + "<br>");
    if(aleatoireNb === 0){
        zeroNb++;
    }
    else if(aleatoireNb === 1){
        unNb++;
    }
}
console.log("Nombre de 0 = " + zeroNb);
console.log("<br>Nombre de 1 = " + unNb);