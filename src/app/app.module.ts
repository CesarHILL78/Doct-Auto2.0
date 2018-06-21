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
import {WebcamModule} from 'ngx-webcam';
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  { path: 'modele', component: ModeleComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: '', component: MarqueComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    RechercheComponent,
    MarqueComponent,
    ModeleComponent,
    
    
   
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