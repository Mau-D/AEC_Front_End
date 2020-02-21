//Créez une classe très grosse poupée russe qui contient une grosse poupée russe qui contient une poupé russe
// qui contient une petite poupée russe qui contient une très petite poupée russe.
// Chacune de ces poupées possède la fonction GetParents() qui retourne dans combien de poupées russes
// elle se situe et GetEnfants() qui retourne combien de poupées russes sont à l’intérieur d’elle.
class tresGrossePoupeeRusse {
    constructor(gpr, pr, ppr, tppr) {
        this.gpr = gpr;
        this.pr = pr;
        this.ppr = ppr;
        this.tppr = tppr;
    }
    GetEnfants(){
        let compteur = 0;
        for(let cle in tresGrossePoupeeRusse){
            compteur++;
        }
        return compteur;
    }
    GeParents(x){
        return 4-x;
    }
}
class grossePoupeeRusse extends tresGrossePoupeeRusse{
    constructor(pr, ppr, tppr) {
       super(pr, ppr, tppr);
    }
    GetParents(){
        let compteur = 0;
        for(let cle in poupee1){
            compteur++;
        }
        return compteur;
    }
    GetEnfants(x){
        return 4-x;
    }
}
class poupeeRusse extends grossePoupeeRusse{
    constructor(ppr, tppr) {
        super(ppr, tppr);
    }
    GetParents() {}
    GetEnfants(){}
}
class petitepoupeeRusse extends poupeeRusse{
    constructor(tppr) {
        super(tppr);
    }
    GetParents() {}
    GetEnfants(){}
}


let poupee1 = new grossePoupeeRusse(1,1,1);
document.write("La grosse poupee contient " + poupee1.GetEnfants() + " et est à l'intérieur de " + poupee1.GetParents(poupee1.GetEnfants()) + " poupées");