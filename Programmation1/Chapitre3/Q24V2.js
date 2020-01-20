//Trouvez TOUS les nombres de Armstrong de moins de 1000
// On dénomme nombre de Armstrong un entier naturel qui est égal à la somme des cubes des chiffres qui le composent.
// Exemple : 153 = = 13 + 53 + 33 = 1 + 125 + 27, est un nombre de Armstrong.



//!!!!!!!!À REVOIR
var cubeC = 0;
var cubeD = 0;
var cubeU = 0;

var sommeCube = 0; //somme des cubes des chiffres
var nb = 0; //Nombre à vérifier



for (var c=0; c<10; c++){ //centaine
    cubeC = Math.pow(c,3);
    nb = (c * 100);
    for (var d=0; d<10; d++){ //dizaine
        cubeD = Math.pow(d,3);
        nb += (d * 10);
        for (var u=0; u<10; u++){ //unité
            cubeU = Math.pow(u,3);
            nb += u;
            sommeCube = cubeC + cubeD + cubeU;
            console.log(nb +"-->" + sommeCube);

            if(sommeCube === nb ){
                document.write(nb + "<br>");
            }
            nb -= u;        //Réinitialiser les unités
        }
        nb -= (d*10);       //Réinitialiser les dizaines
    }
    nb -= (c*100);          //Réinitialiser les centaines
}
