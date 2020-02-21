//Créez une classe Cylindre qui contient deux propriétés : 
// une hauteur et un rayon.
// 
// La classe Cylindre doit contenir une méthode GetVolume() qui retourne son volume.
// 
// Créez 2 cylindres avec les valeurs de votre choix et testez votre méthode GetVolume(). 
// 
// Créez une classe Boite qui contient un tableau de Cylindres.
// 
// Remplissez la boîte de 5 cylindres de votre choix. 
// 
// Créez une méthode GetVolumeBoite() qui permet d’afficher le volume total des 5 cylindres.  

class Cylindre{
    constructor(hauteur, rayon){
        this.hauteur = hauteur;
        this.rayon = rayon;
    }
    GetVolume(){//Ajouter un number car la méthode retourne un str
        return Number(Math.PI * Math.pow(this.rayon, 2) * this.hauteur).toFixed(2);
    }
}
class Boite{//Tableau dans une classe
    constructor(tabCylindres){
        this.tabCylindres = tabCylindres;
    }
    GetVolumeBoite(){
        let volumeTotal=0;
        for(let i=0; i<tabCylindres.length;i++){
            volumeTotal += Number(tabCylindres[i].GetVolume());//Ajouter un number car la méthode retourne un str
            console.log(volumeTotal);
            console.log(typeof volumeTotal);
        }
        return volumeTotal;
    }
}

let grosCylindre = new Cylindre(15, 5);
let petitCylindre = new Cylindre(5, 1);
let volumePetitCylindre = grosCylindre.GetVolume();
let volumeGrosCylindre = petitCylindre.GetVolume();
let cylindre3 = new Cylindre(14, 4);
let cylindre4 = new Cylindre(13, 3);
let cylindre5 = new Cylindre(12, 2);

//tableau de cylindres
let tabCylindres = [grosCylindre, petitCylindre, cylindre3, cylindre4, cylindre5];
console.table(tabCylindres);
let maBoite = new Boite(tabCylindres);

//Volume des 5 cylindres
let volumeDeLaMort = maBoite.GetVolumeBoite();


document.write("Le volume du petit cylindre est de " + volumePetitCylindre + " mètres cube.<br>");
document.write("Le volume du gros cylindre est de " + volumeGrosCylindre + " mètres cube<br>");
document.write("Le volume des 5 cylindres est " + volumeDeLaMort + " mètres cube");
