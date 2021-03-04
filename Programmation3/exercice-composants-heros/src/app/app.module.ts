import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';//Module pour le service
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { ComposantRacineComponent } from './composant-racine/composant-racine.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { RechercheComponent } from './recherche/recherche.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeroComponent } from './hero/hero.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Hero2Component } from './hero2/hero2.component';
import { TableHerosComponent } from './table-heros/table-heros.component';
import { DialogNewHeroComponent } from './dialog-new-hero/dialog-new-hero.component';


import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';









@NgModule({
  declarations: [
    AppComponent,
    ComposantRacineComponent,
    EnTeteComponent,
    RechercheComponent,
    CarouselComponent,
    HeroComponent,
    PiedPageComponent,
    Page1Component,
    Page2Component,
    Hero2Component,
    TableHerosComponent,
    DialogNewHeroComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
