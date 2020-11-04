import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantRacineComponent } from './composant-racine/composant-racine.component';
import { EnteteComponent } from './entete/entete.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { ImageComponent } from './image/image.component';
import { ProduitComponent } from './produit/produit.component';
import { PrixComponent } from './prix/prix.component';
import { DetailsComponent } from './details/details.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';





@NgModule({
  declarations: [
    AppComponent,
    ComposantRacineComponent,
    EnteteComponent,
    ListeProduitsComponent,
    FicheProduitComponent,
    PiedDePageComponent,
    ImageComponent,
    ProduitComponent,
    PrixComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
