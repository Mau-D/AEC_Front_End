//Lire deux nombres et afficher le plus grand des deux.

var nb1;
var nb2;
//Demander les nombres à l'utilisateur
nb1 = Number(prompt("Donner le nombre 1"));
nb2 = Number(prompt("Donner le nombre 2"));
//Si le nombre 1 est plus grand
    if (nb1 > nb2){
        document.write("Le nombre 1 est le plus grand: " + nb1);
    }
    //Si le nombre 2 est plus grand
        else if( nb2 > nb1){
            document.write("Le nombre 2 est le plus grand: " + nb2);
        }
            //Si les nombres sont égaux
            else{
                document.write("Le nombre 2 est le plus grand: " + nb2);
            }