////Faire afficher 2 4 6 8 10 sur 30 lignes
for(var j = 0; j<30; j++) {
    for (var i = 2; i <= 10; i+=2) {
        document.write(i + " ");
    }
    document.write("<br>");
}
console.log(j);