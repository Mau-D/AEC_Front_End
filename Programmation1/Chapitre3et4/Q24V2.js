//Trouvez TOUS les nombres de Armstrong de moins de 1000
// On dénomme nombre de Armstrong un entier naturel qui est égal à la somme des cubes des chiffres qui le composent.
// Exemple : 153 = = 13 + 53 + 33 = 1 + 125 + 27, est un nombre de Armstrong.



//!!!!!!!!À REVOIR
var c = 0;
var d = 0;
var u = 0;

var sommeCube = 0; //somme des cubes des chiffres
var nb = 0; //Nombre à vérifier
var doublenb = 0;


for (var i=0; i<10; i++){ //centaine
    c = i;
    for (var j=0; j<10; j++){ //dizaine
        d = j;
        for (var k=0; k<10; k++){ //unité
            u = k;
            sommeCube = (Math.pow(c,3 )) + (Math.pow(d,3 )) + (Math.pow(u,3 ));
            nb = (c * 100) + (d * 10) + u;
            doublenb = 2 * nb;
            console.log(nb + doublenb);
            if(sommeCube === doublenb ){
                document.write(nb);
            }
        }
    }
}
