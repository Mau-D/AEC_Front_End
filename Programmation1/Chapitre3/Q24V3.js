//Trouvez TOUS les nombres de Armstrong de moins de 1000
// On dénomme nombre de Armstrong un entier naturel qui est égal à la somme des cubes des chiffres qui le composent.
// Exemple : 153 = = 13 + 53 + 33 = 1 + 125 + 27, est un nombre de Armstrong.



//Inspiré du corrigé
var unite =0, dizaine = 0, centaine = 0;
var sommeCube = 0;

//Boucle de 0 à 1000
for(var i=0; i<1000; i++){
    //Pour les dix premiers chiffres
    if(i<10){
        unite = i;
    }
    //Pour les chiffres avec dizaines et unités
    else if(i>=10 && i<100){
        dizaine = parseInt(i / 10);
        unite = i % 10;
    }
    //Pour les chiffres avec centaines dizaines et unités
    else{
        centaine = parseInt(i / 100);
        dizaine = parseInt((i % 100) / 10);
        unite = (i % 100) % 10;
    }
    //Calcul de la somme des cube
    sommeCube = (Math.pow(unite, 3)) + (Math.pow(dizaine, 3)) + (Math.pow(centaine, 3));
     console.log(i + "-->" + unite + "-->" + dizaine);
    //Vérifier si le nombre est un nombre d'Armstrong
    if(sommeCube === i){
        document.write(i + "<br>");
    }
}