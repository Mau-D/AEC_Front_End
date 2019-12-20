//Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00.

var avectaxe; //9%


for (var i =5; i <=100; i +=5){
    avectaxe = i * 1.09; //Calcul de la taxe
    document.write("Le montant est de " + i + "$ et avec les taxes =" + avectaxe.toFixed(2) + "$<br>");
}