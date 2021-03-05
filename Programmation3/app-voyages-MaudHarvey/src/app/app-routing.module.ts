import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importer les composants utilisés pour la navigation ici
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { AdministrationComponent } from './administration/administration.component';
import { ForfaitsToutSudComponent } from './forfaits-tout-sud/forfaits-tout-sud.component';
import { ForfaitsExplorateurComponent } from './forfaits-explorateur/forfaits-explorateur.component';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';

const routes: Routes = [
  //Définir les chemins pour accéder au composant ici
  
  { path: '', component: AccueilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'toutsud', component: ForfaitsToutSudComponent },
  { path: 'explorateur', component: ForfaitsExplorateurComponent },
  { path: 'chart-line', component: ChartLineComponent },
  { path: 'chart-pie', component: ChartPieComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',  useHash: false,
  anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
