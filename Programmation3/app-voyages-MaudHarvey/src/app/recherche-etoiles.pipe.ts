import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';
@Pipe({
  name: 'rechercheEtoiles'
})
export class RechercheEtoilesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
