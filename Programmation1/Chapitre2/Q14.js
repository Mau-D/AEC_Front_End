//Lire 3 nombres A, B et C différents. Trouver et afficher le plus petit et le plus grand.

var nb1; //Nombre A
var nb2; //Nombre B
var nb3; //Nombre C

//Lire les trois nombres
nb1 = Number(prompt("Donnez le nombre A"));
nb2 = Number(prompt("Donnez le nombre B"));
nb3 = Number(prompt("Donnez le nombre C"));

if(nb1 > nb2){
    if(nb1 > nb3) { //A>B et A>C
        if (nb2 > nb3) {  //A>B>C
            document.write("Le plus grand nombre est A = " + nb1 + " et le plus petit nombre est C = " + nb3);
        }
        else {//A>B<C
            document.write("Le plus grand nombre est A = " + nb1 + " et le plus petit nombre est B = " + nb2);
        }
    }
    else{//A>B mais A<C, C>A>B
        document.write("Le plus grand nombre est C = " + nb3 + " et le plus petit nombre est B = " + nb2);

    }
}
else if(nb2 > nb1){
        if(nb2 > nb3) { //B>A et B>C
            if (nb1 > nb3) {  //B>A>C
                document.write("Le plus grand nombre est B = " + nb2 + " et le plus petit nombre est C = " + nb3);
            } else {//B>C<A
                document.write("Le plus grand nombre est B = " + nb2 + " et le plus petit nombre est A = " + nb1);
            }
        }
        else {//B>A mais B<C, C>B>A
            document.write("Le plus grand nombre est C = " + nb3 + " et le plus petit nombre est A = " + nb1);
        }
}



