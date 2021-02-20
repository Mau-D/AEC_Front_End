import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';


@Pipe({
  name: 'rechercheDepart'
})
export class RechercheDepartPipe implements PipeTransform {

 transform(forfaits: Forfait[], departForfait: any): Forfait[] {   
    console.log('recherche depart' + departForfait)
     
    let today: any = new Date();
    let formDepart: any = (new Date(departForfait));

      console.log('aujour' + today);
      console.log('formDepart' + formDepart);
      
      if(!forfaits)
        return forfaits;
        //Date supérieure à aujourd'hui, afficher les forfaits avec une date supérieure
        //Voir pour mettre les dates égales
      if(formDepart > today){
        return forfaits.filter(forfait => (new Date(forfait.dateDepartD) >= formDepart))
      }
      //Pour la date d'aujourd'hui, valeur par défaut, retourner tout les forfaits
      else{
        return forfaits;
      }
  }
}
