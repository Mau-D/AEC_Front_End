//Service pour obtenir les informations des héros par l'entremise d'une API
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //Variable de l'url de l'API
  heroesUrl = 'https://guarded-mesa-24051.herokuapp.com/api/';

  constructor(private http: HttpClient) { }
  //Fonction pour appeler l'API, obtenir les données READ
  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl + 'heros');  
  }
  //Fonction pour appeler l'API, ajouter une donnée CREATE
  addHero(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl + 'hero', hero, httpOptions);
  }
  /** PUT: mise à jour du héros */
  updateHero(hero: Hero): Observable<any> {
    const id = hero._id;
    return this.http.put<Hero>(this.heroesUrl + 'hero/' + id, hero, httpOptions);
  }
  /** DELETE: suppression du héros */
  deleteHero(id: string): Observable<Hero> {
    return this.http.delete<Hero>(this.heroesUrl + 'hero/' + id, httpOptions);
  }
}
