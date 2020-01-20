///Faire afficher 1 3 5 7 9 11 sur 13 lignes
for(var j = 0; j<13; j++) {     //j = ligne, nous pourrions appeler la variable ligne
    for (var i = 1; i <= 11; i+=2) {
        document.write(i + " ");
    }
    document.write("<br>");
}
