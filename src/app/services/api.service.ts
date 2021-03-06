import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { Injectable } from "@angular/core";
import { Marque } from "../model/marque.model";
import { Modele } from "../model/modele.model";
import { enableProdMode } from '@angular/core';
import { Moteur } from "../model/moteur.model";
import { Annee } from "../model/annee.model";
import { Element } from "../model/element.model";

@Injectable()
export class ApiService {

    idMarque: number;
    idModele : number;
    idMoteur : number;
    idVoiture : number;
    
    
    constructor(private http: Http) { }


    getListeMarque(): Observable<Marque[]> {
        let apiURL = "http://www.n4naki.fr/u139863db1.php?action=get_list_marque";
        return this.http.get(apiURL).pipe(map(res => {
            return res.json().map(item => {
                return new Marque(
                    item.id_mar,
                    item.nom_mar,
                );
            });
        }));
    }


    getListeModele():Observable<Modele[]> {
        
        let apiURL = "http://www.n4naki.fr/u139863db1.php?action=get_modele_by_marque&id=" + this.idMarque.toString();
        return this.http.get(apiURL).pipe(map(res => {
            return res.json().map(modele => {
                return new Modele(
                    modele.id_mod, 
                    modele.modele,
                    
                );
              });
            })); 
}

getListeMoteur(): Observable<Moteur[]>{
  
    let apiURL = "http://www.n4naki.fr/u139863db1.php?action=get_moteur_by_modele&id=" + this.idModele.toString();
    return this.http.get(apiURL).pipe(map(res => {
        return res.json().map(moteur => {
            return new Moteur(moteur.id_mot, moteur.moteur);
          
        
      });
    }));
}

getListeAnnee(): Observable<Annee[]>{
   
    let apiURL = "http://www.n4naki.fr/u139863db1.php?action=get_voiture_by_annee&id1="+this.idModele.toString()+"&id2=" + this.idMoteur.toString();
    return this.http.get(apiURL).pipe(map(res => {
        return res.json().map(annee => {
           
            return new Annee( annee.annee,annee.id_voiture);
            
          
        
      });
    }));

}
getListeElement(): Observable<Element[]>{
   
    let apiURL = "http://www.n4naki.fr/u139863db1.php?action=get_voiture_element&id=" + this.idVoiture.toString();
    return this.http.get(apiURL).pipe(map(res => {
        console.log("res"+res)
        return res.json().map(element => {
            console.log("element" +element)
            return new Element( element.nom_element,element.id_element);
      });
    }));

}

getDefaut(idElement : number): Observable<string>{
   
    let apiURL = "http://www.n4naki.fr/u139863db1.php?action=get_voiture_defaut&id1="+this.idVoiture.toString()+"&id2=" + idElement.toString();
    return this.http.get(apiURL).pipe(map(res => {
        return res.json().map(defaut => {
           
            return ( defaut.nom_defaut);
            
          
        
      });
    }));

}
getMeteo(lat:number,lon:number): Observable<any[]>{
   
    let apiURL = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=4fcb3a91904bd04021870ca8464a60d8"
    return this.http.get(apiURL).pipe(map(res => {
        console.log("meteo"+res)
        return res.json()
          
        
     
    }));

}

}