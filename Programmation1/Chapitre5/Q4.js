//Créez un objet Guerrier qui possède 5 propriétés.
// Les points de vie, la force, l’agilité, la chance et la précision.
// La chance du guerrier est un nombre aléatoire de 0 à 1 qui doit être recalculée après chaque attaque.
// Le guerrier possède la fonction Attaquer() qui retourne un nombre de points de dégâts = (force*précision+agilité)*chance

//Objet Guerrier
class guerrier{
    constructor(ptVie,force,agilite,chance,precision){
        this.ptVie = ptVie;
        this.force = force;
        this.agilite = agilite;
        this.chance = chance;
        this.precision = precision;
    }
    Attaquer(){
        return (this.force * this.precision + this.agilite)*this.chance;
    }
}
//Instanciez deux guerriers avec 100 points de vie,
// random de 1 à 10 de force, d’endurance, de précision et d’agilité,
let guerrier1 = new guerrier(100, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, 0,Math.floor(Math.random() * 10) + 1);
let guerrier2 = new guerrier(100, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, 0,Math.floor(Math.random() * 10) + 1);

// random de 0 à 1 de chance (ex 0.5 de chance fait frapper votre guerrier à 50% de sa puissance) N’oubliez pas que la chance doit être recalculée après chaque attaque.
// Faites combattre vos deux guerriers jusqu’à la mort. et affichez les détails de votre combat.
let compteur=0;
let attaqueGuerrier1 = 0;
let attaqueGuerrier2 = 0;

while (guerrier1.ptVie > 0 && guerrier2.ptVie > 0){
    compteur++;
    guerrier1.chance = Math.random().toFixed(1);
    guerrier2.chance = Math.random().toFixed(1);
    attaqueGuerrier1 = guerrier1.Attaquer().toFixed(1);
    attaqueGuerrier2 = guerrier2.Attaquer().toFixed(1);
    guerrier1.ptVie -= attaqueGuerrier2;
    guerrier2.ptVie -= attaqueGuerrier1;
    document.write("ROUND " + compteur + "<br>");
    document.write("Attaque du guerrier 1 = " + attaqueGuerrier1 + " dégâts.<br>");
    document.write("Attaque du guerrier 2 = " + attaqueGuerrier2 + " dégâts.<br>");
    document.write("Guerrier 1 = " + guerrier1.ptVie + " VS Guerrier 2 = " + guerrier2.ptVie + "<br>");
}
if (guerrier1.ptVie <= 0){
    document.write("Le guerrier 1 est mort!!!");
}
else if (guerrier2.ptVie <= 0){
    document.write("Le guerrier 2 est mort!!!");
}
else if (guerrier1.ptVie <=0 && guerrier2.ptVie <=0){
    document.write("Les deux guerriers sont morts!!!");

}