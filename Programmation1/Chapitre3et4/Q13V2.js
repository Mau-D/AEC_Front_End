//Afficher les nombres impairs de 1 à 49, et mettre 5 valeurs par ligne.
for(var i=1; i <50; i+=2){
    document.write(i + "-->");
    if(i=== 9 || i=== 19 || i===29 || i===39){
        document.write("<br>");
    }
}