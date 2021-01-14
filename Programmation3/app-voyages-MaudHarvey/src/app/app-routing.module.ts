import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importer les composants utilisés pour la navigation ici
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { AdministrationComponent } from './administration/administration.component';
import { ForfaitsToutSudComponent } from './forfaits-tout-sud/forfaits-tout-sud.component';
import { ForfaitsExplorateurComponent } from './forfaits-explorateur/forfaits-explorateur.component';

const routes: Routes = [
  //Définir les chemins pour accéder au composant ici
  //exemple:{ path: 'produits', component: ListeProduitsComponent }, 
  //exemple redirection { path: '', redirectTo: '/produits', pathMatch: 'full' }
  { path: '', component: AccueilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'toutsud', component: ForfaitsToutSudComponent },
  { path: 'explorateur', component: ForfaitsExplorateurComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
