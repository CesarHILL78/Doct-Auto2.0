
import { Component, OnInit,Input } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { RechercheComponent } from '../recherche/recherche.component';
import { ApiService } from '../services/api.service';
import { Http } from '@angular/http';
import{Moteur} from "../model/moteur.model";
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';




@Component({
  selector: 'app-moteur',
  templateUrl: './moteur.component.html',
  styleUrls: ['./moteur.component.scss']
})
export class MoteurComponent implements OnInit {

    

    /**
     * Getter $moteurs
     * @return {Moteur[]}
     */
	public get $moteurs(): Moteur[] {
		return this.moteurs;
	}

    /**
     * Setter $moteurs
     * @param {Moteur[]} value
     */
	public set $moteurs(value: Moteur[]) {
		this.moteurs = value;
	}
  @Input() private moteurs : Moteur[]=[];
  constructor(private apiService : ApiService) { }


  ngOnInit() {
   
  }

 
  

}
