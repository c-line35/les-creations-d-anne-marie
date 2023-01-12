import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AtelierComponent } from './atelier/atelier.component';
import { DessinsComponent } from './dessins/dessins.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MandalasComponent } from './mandalas/mandalas.component';
import { HaikusComponent } from './haikus/haikus.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AtelierComponent, DessinsComponent, AccueilComponent, MandalasComponent, HaikusComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
