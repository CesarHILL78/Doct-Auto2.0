import { Component, OnInit } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { RechercheComponent } from '../recherche/recherche.component';
import { ApiService } from '../services/api.service';
import { Http } from '@angular/http';
import{Marque} from "../model/marque.model";
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['../app.component.scss']
})
export class MarqueComponent  implements OnInit {
  /**
     * Getter $marques
     * @return {Marque[]}
     */
    public get $marques(): Marque[] {
      return this.marques;
    }
  
      /**
       * Setter $marques
       * @param {Marque[]} value
       */
    public set $marques(value: Marque[]) {
      this.marques = value;
    }
    
     marques: Marque[];
 constructor(private apiService:ApiService){}
  ngOnInit() {
    this.apiService.getListeMarque().subscribe(res=> {
      this.marques = res.filter(marque=> marque.$id<17); 
    })
  }

AfficherTout(){
  this.apiService.getListeMarque().subscribe(res=> {
    this.marques = res; 
  })
}

GetId(id:number){
  this.apiService.idMarque=id;
}

}
