//Importations de modules angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';//Module pour le service

//Routage pour la navigation
import { AppRoutingModule } from './app-routing.module';


//Importations des composants
import { AppComponent } from './app.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { EtoileComponent } from './etoile/etoile.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { EnteteComponent } from './entete/entete.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { AdministrationComponent } from './administration/administration.component';
import { ForfaitsToutSudComponent } from './forfaits-tout-sud/forfaits-tout-sud.component';
import { ForfaitsExplorateurComponent } from './forfaits-explorateur/forfaits-explorateur.component';
import { TableForfaitsComponent } from './table-forfaits/table-forfaits.component';

//Importations des services
import { VoyagesService } from './voyages.service';//Fichier pour le service

//Importations des pipes
import { ForfaitVedettePipe } from './forfait-vedette.pipe';

//Importations pour les dates en français
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');






//Importations de Angular Material
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    ForfaitCompletComponent,
    ForfaitMiniComponent,
    EtoileComponent,
    FormulaireForfaitComponent,
    ForfaitVedettePipe,
    FormulaireRechercheComponent,
    AccueilComponent,
    EnteteComponent,
    PiedDePageComponent,
    AproposComponent,
    AdministrationComponent,
    ForfaitsToutSudComponent,
    ForfaitsExplorateurComponent,
    TableForfaitsComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    MatTableModule
  ],
  //Calendrier en français
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'fr-CA'}, VoyagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
