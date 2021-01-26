//Création de service pour échanger de l'information avec l'API
//https://forfaits-voyages.herokuapp.com/api/forfaits/da/1996416
import { Injectable } from '@angular/core';
//Pour le service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//Importer l'interface
import { Forfait } from './forfait';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {
  //Variable de l'url de l'API
  voyagesUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';

//Ajouter une variable privée dans l'argument du constructeur  pour le module HttpClient
  constructor(private http: HttpClient) { }
  //Fonction pour appeler l'API
  getVoyages(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.voyagesUrl + 'da/1996416');  
  }
  //Ajout d'un forfait
  addForfait(forfait: Forfait): Observable<Forfait> {
    console.log(forfait);
    return this.http.post<Forfait>(this.voyagesUrl, forfait, httpOptions);
}
  /** DELETE: suppression du forfait */
  deleteVoyage(id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.voyagesUrl + id, httpOptions);
  }

}
//{"_id":"600a1ec7d51ad50017236874","forfait":{"_id":null,"destination":"Hawai","villeDepart":"Bagotville","hotel":{"nom":"Hotel Léo","coordonnees":"123 Go","nombreEtoiles":null,"nombreChambres":null,"caracteristiques":[]},"dateDepartD":null,"dateRetourD":null,"prix":null,"rabais":null,"vedette":true,"da":"1996416"}}