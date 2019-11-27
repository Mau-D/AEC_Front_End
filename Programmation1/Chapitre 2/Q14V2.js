//Lire 3 nombres A, B et C différents. Trouver et afficher le plus petit et le plus grand.

var nb1; //Nombre A
var nb2; //Nombre B
var nb3; //Nombre C

//Lire les trois nombres
nb1 = Number(prompt("Donnez le nombre A"));
nb2 = Number(prompt("Donnez le nombre B"));
nb3 = Number(prompt("Donnez le nombre C"));

if(nb1 > nb2 && nb1 > nb3){//A>B et A>C
    if(nb2> nb3) { //B>C
        document.write("Le plus grand nombre est A = " + nb1 + " et le plus petit nombre est C = " + nb3);
    }
    else {//C>B
            document.write("Le plus grand nombre est A = " + nb1 + " et le plus petit nombre est B = " + nb2);
        }
}
else if(nb2 > nb1 && nb2 > nb3){//B>A et B>C
    if(nb1 > nb3) { //A>C
        document.write("Le plus grand nombre est B = " + nb2 + " et le plus petit nombre est C = " + nb3);
    }
    else {//A<C
            document.write("Le plus grand nombre est B = " + nb2 + " et le plus petit nombre est A = " + nb1);
        }
    }
else if (nb3 > nb1 && nb3>nb2){//C>A et C>B
    if (nb1 > nb2){// A>B
        document.write("Le plus grand nombre est C = " + nb3 + " et le plus petit nombre est B = " + nb2);
    }
    else{//B>A
        document.write("Le plus grand nombre est C = " + nb3 + " et le plus petit nombre est A = " + nb1);
    }
}



