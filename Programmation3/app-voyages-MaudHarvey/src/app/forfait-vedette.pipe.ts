import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

//Pipe our le tri des forfaits vedette afficher dans le composant forfait-mini
@Pipe({
  name: 'PipeForfaitVedette'
})
export class ForfaitVedettePipe implements PipeTransform { 
 //La condition est ajoutée pour enlever l'erreur dans le cas d'une valeur null
  transform(forfaits: Forfait[]): Forfait[] {   
     if(!forfaits)
        return forfaits;
    return forfaits.filter(forfait => forfait.vedette); 
  }
}
