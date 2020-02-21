//Créez une classe Examen qui contient 5 questions. Chaque question vaut de zéro à 20 points. Examen possède la fonction
// GetNote() qui retourne son score sur 100
// Créez une classe Etudiant qui contient les propriétés : nom, prénom et un Examen.
//
// Instanciez 10 étudiants avec chacun un examen dont chaque résultat de chaque question est choisi aléatoirement.
//
// Affichez les élèves qui réussissent l’examen et ceux qui échouent.


class Examen {
    constructor(Q1, Q2, Q3, Q4, Q5) {//La class Examen contient 5 questions
        this.Q1 = Q1;
        this.Q2 = Q2;
        this.Q3 = Q3;
        this.Q4 = Q4;
        this.Q5 = Q5;
    }
    GetNote(){
        let resultat = 0;
        resultat = this.Q1 + this.Q2 + this.Q3 + this.Q4 + this.Q5;
        return resultat;
    }
}
class Etudiant{
    constructor(nom, prenom, examen){
        this.nom = nom;
        this.prenom = prenom;
        this.examen = examen;
    }
    NomEtudiant(){//J'ai ajouté cette méthode pour écrire le nom complet sur une seule ligne
        return(this.prenom + " " + this.nom);
    }
}
//Résultats des dix examens
let examen1 =  new Examen(Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)));
let examen2 =  new Examen(Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)));
let examen3 =  new Examen(Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)));
let examen4 =  new Examen(Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)));
let examen5 =  new Examen(Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)),Math.floor(Math.random() * Math.floor(20)));
console.log(examen4);
//Liste des étudiants
let etudiant1 = new Etudiant("Harvey", "Maud", examen1);
let etudiant2 = new Etudiant("Harvey", "Melody", examen2);
let etudiant3 = new Etudiant("Frigon", "Joel", examen3);
let etudiant4 = new Etudiant("Frigon", "Léo", examen4);
let etudiant5 = new Etudiant("Lavoie", "Louise", examen5);
//Utiliser &nbsp pour faire un espace
//Résultats
document.write(etudiant1.prenom + "&nbsp" + etudiant1.nom + " a obtenu " + examen1.GetNote() + "%<br>");
document.write(etudiant2.prenom + "&nbsp" + etudiant2.nom + " a obtenu " + examen2.GetNote() + "%<br>");
document.write(etudiant3.prenom + "&nbsp" + etudiant3.nom + " a obtenu " + examen3.GetNote() + "%<br>");
document.write(etudiant4.prenom + "&nbsp" + etudiant4.nom + " a obtenu " + examen4.GetNote() + "%<br>");
document.write(etudiant5.prenom + "&nbsp" + etudiant5.nom + " a obtenu " + examen5.GetNote() + "%<br>");

//Afficher les élèves qui réussissent et échouent
let tabReussite = [];
let tabEchec = [];


tabEtudiant = [etudiant1, etudiant2, etudiant3, etudiant4, etudiant5];

for(let i=0; i<tabEtudiant.length; i++){
    if(tabEtudiant[i].examen.GetNote()>=60){
        tabReussite.push(tabEtudiant[i].NomEtudiant());
    }
    else {
        tabEchec.push(tabEtudiant[i].NomEtudiant());
    }
}
console.log(tabReussite);
console.log(tabEchec);
document.write("Les élèves suivants ont réussis l'examen:<br>");
for(let j=0; j<tabReussite.length; j++){
    document.write(tabReussite[j] + "<br>");
}
document.write("Les élèves suivants ont échoués l'examen:<br>");
for(let k=0; k<tabEchec.length; k++){
    document.write(tabEchec[k] + "<br>");
}