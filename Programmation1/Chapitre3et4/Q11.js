//Afficher les nombres de 1 à 10 avec le carré et le cube de chacun de ces nombres.

var carre;
var cube;
document.write("Nombre-->carré-->cube<br>");
for(var i=1; i<=10; i++){
    carre = i * i;
    cube = i * i * i;
    document.write(i + " --> " + carre +" --> " + cube + "<br>" );
}