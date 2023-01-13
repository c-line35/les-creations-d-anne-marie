import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AtelierComponent } from './atelier/atelier.component';
import { DessinsComponent } from './dessins/dessins.component';
import { HaikusComponent } from './haikus/haikus.component';
import { MandalasComponent } from './mandalas/mandalas.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'dessins', component: DessinsComponent },
  { path: 'mandalas', component: MandalasComponent },
  { path: 'haikus', component: HaikusComponent },
  { path: 'atelier', component: AtelierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
