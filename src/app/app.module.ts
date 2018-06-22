import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ApiService } from './services/api.service';
import { Routes,RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'; 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MarqueComponent } from './marque/marque.component';
import { CommonModule } from '@angular/common';
import { ModeleComponent } from './modele/modele.component';
import { environment } from '../environments/environment';
import { InscriptionComponent } from './inscription/inscription.component';
import {WebcamModule} from 'ngx-webcam';

const appRoutes: Routes = [
  { path: 'modele', component: ModeleComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: '', component: MarqueComponent },
  { path: 'inscription', component:InscriptionComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    RechercheComponent,
    MarqueComponent,
    ModeleComponent,
    InscriptionComponent,
    
   
    
    
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    CommonModule,
    WebcamModule
    
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);