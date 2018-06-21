import { Component, OnInit } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { RechercheComponent } from '../recherche/recherche.component';
import { ApiService } from '../services/api.service';
import { Http } from '@angular/http';
import { Modele } from "../model/modele.model";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Moteur } from "../model/moteur.model";
import { map } from 'rxjs/internal/operators/map';
import { Annee } from '../model/annee.model';
import { Element } from '../model/element.model';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['../app.component.scss']
})
export class ModeleComponent implements OnInit {

  isMoteur: boolean = false;
  isAnnee: boolean = false;

  /**
   * Getter $modeles
   * @return {Modele[]}
   */
  public get $modeles(): Modele[] {
    return this.modeles;
  }

  /**
   * Setter $modeles
   * @param {Modele[]} value
   */
  public set $modeles(value: Modele[]) {
    this.modeles = value;
  }
  private modeles: Modele[] = [];
  constructor(private apiService: ApiService, private http: Http) { }


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
  private moteurs: Moteur[] = [];


  /**
   * Getter $annees
   * @return {Annee[]}
   */
  public get $annees(): Annee[] {
    return this.annees;
  }

  /**
   * Setter $annees
   * @param {Annee[]} value
   */
  public set $annees(value: Annee[]) {
    this.annees = value;
  }

  private annees: Annee[] = [];

  /**
   * Getter $elements
   * @return {Element[]}
   */
  public get $elements(): Element[] {
    return this.elements;
  }

  /**
   * Setter $elements
   * @param {Element[]} value
   */
  public set $elements(value: Element[]) {
    this.elements = value;
  }

  private elements: Element[] = [];
  ngOnInit() {
    this.apiService.getListeModele().subscribe(res => {
      this.modeles = res;
    })
  }

  showMoteur(id: number) {

    let index = this.getIndex(this.modeles, id);
    this.modeles.forEach(element => {
      element.$isActive = false;
    });
    this.modeles[index].$isActive = true;

    this.apiService.idModele = id;
    this.apiService.getListeMoteur().subscribe(res => {
      this.moteurs = res;

    })
    this.isMoteur = true
  }

  showAnnee(idModele: number, idMoteur: number) {

    let index = this.getIndex(this.moteurs, idMoteur);
    this.moteurs.forEach(element => {
      element.$isActive = false;
    });

    this.apiService.idModele = idModele;
    this.apiService.idMoteur = idMoteur;
    this.apiService.getListeAnnee().subscribe(res => {
      this.annees = res;

    })
    this.moteurs[index].$isActive = true;
    this.isAnnee = true
  }

  getIndex(liste: any[], id: number) {
    let j = 0;
    let index: number;
    liste.forEach(element => {
      if (element.id == id) {
        index = j;
      }
      j++
    });
    return index;
  }
  showElement(idvoiture: number, annee: number) {

    let index = this.getIndex(this.annees, annee);
    this.annees.forEach(element => {
      element.$isActive = false;
    });
    this.$annees[index].$isActive = true;
    this.apiService.idVoiture = idvoiture;

    this.apiService.getListeElement().subscribe(res => {
      this.elements = res;
      res.forEach(element => {
        this.apiService.getDefaut(element.$id).subscribe(res => {
          element.$defaut = res;

        });

      })



    });


}
}
