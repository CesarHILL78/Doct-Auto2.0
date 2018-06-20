import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RechercheComponent } from './recherche/recherche.component';
import { DetailComponent } from './detail/detail.component';
import { ApiService } from './services/api.service';
import { Routes,RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'; 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MarqueComponent } from './marque/marque.component';
import { CommonModule } from '@angular/common';
import { ModeleComponent } from './modele/modele.component';
import { MoteurComponent } from './moteur/moteur.component';

const appRoutes: Routes = [
  { path: 'modele', component: ModeleComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', component: MarqueComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    RechercheComponent,
    DetailComponent,
    MarqueComponent,
    ModeleComponent,
    MoteurComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    CommonModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);