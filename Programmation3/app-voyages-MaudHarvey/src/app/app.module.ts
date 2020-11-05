import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Importations de Angular Material
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { EtoileComponent } from './etoile/etoile.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    ForfaitComponent,
    ForfaitCompletComponent,
    ForfaitMiniComponent,
    EtoileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
