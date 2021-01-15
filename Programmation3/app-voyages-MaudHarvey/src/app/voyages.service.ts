//Création de service pour échanger de l'information avec l'API
//https://forfaits-voyages.herokuapp.com/api/forfaits
import { Injectable } from '@angular/core';
//Pour le service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//Importer l'interface
import { Forfait } from './forfait';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {
  //Variable de l'url de l'API
  voyagesUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/da/1996416/';

//Ajouter une variable privée dans l'argument du constructeur  pour le module HttpClient
  constructor(private http: HttpClient) { }
  //Fonction pour appeler l'API
  getVoyages(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.voyagesUrl);  
  }
  /** DELETE: suppression du héros */
  deleteVoyage(id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.voyagesUrl + id, httpOptions);
  }

}
