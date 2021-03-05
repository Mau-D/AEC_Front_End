import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'rechercheCaracteristiques',
  pure: false//Forcer le pipe à chaque changement
})
export class RechercheCaracteristiquesPipe implements PipeTransform {

  transform(forfaits: Forfait[], carac: Array<string>): Forfait[] {   
    //Si aucune caractéristiques est sélectionné
      if(!forfaits || carac.length == 0)
        return forfaits;
      else {
        for (var i=0; i<carac.length; i++){ 
          return (forfaits.filter(forfait => (
            forfait.hotel.caracteristiques.indexOf(carac[i]) !=-1 ) 
         ))};
      }
  }
}
//Le filtre sélectionnement seulement si un des éléments de la liste est présent
//Cherche solution pour combiné les caractéristiques