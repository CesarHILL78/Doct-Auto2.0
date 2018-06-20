import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service'; 
import { Http } from '@angular/http';
import{Marque} from "../model/marque.model";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {


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
  annees: any[];
  @Input() isMarqueSelected="";
  @Input() isModeleSelected="";
  modeles: any[];
  indexMarque: any;
  constructor(private apiService: ApiService,private http: Http) { }

  ngOnInit() {
    //if(this.bouchonService.recheche===[''])
    //{this.voitures= this.bouchonService.voiture;}
    //else{this.voitures=this.bouchonService.recheche}
    
    
 
  }
  
/*   selectionMarque(){
    this.voitures= this.apiService.voiture;
   
    var j = 0;
    var m = (document.getElementById("marque")) as HTMLSelectElement;
   var sel = m.selectedIndex;
   var opt = m.options[sel];
   var marquesel = (opt).text;
   this.isMarqueSelected = 'true';

    console.log(marquesel);

    for(var i = 0; i < this.marques.length ; i++){
      console.log(this.marques[i].name);
      if (marquesel.match(this.marques[i].name) != null) {
        console.log("match");
        this.modeles = this.marques[i].modeles;
        this.indexMarque=this.marques[i].id;
        break;
        }
    }
   
   for(var i = 0; i < this.voitures.length ; i++){
      if (marquesel.match(this.voitures[i].marque) != null) {
      this.voituresParMarque[j] = this.voitures[i];
       j++;
}
    }

   this.voitures= this.voituresParMarque;
    

  }

  selectionModele(){
    this.voitures= this.voituresParMarque;
    this.voituresParModele= [''];
    var j = 0;
    var m = (document.getElementById("modele")) as HTMLSelectElement;
   var sel = m.selectedIndex;
   var opt = m.options[sel];
   var marquesel = (opt).text;
   this.isModeleSelected = 'true';

    console.log(marquesel);

    for(var i = 0; i < this.marques[this.indexMarque-1].modeles.length ; i++){
      console.log(this.marques[this.indexMarque-1].modeles[i].name);

      if (marquesel.match(this.marques[this.indexMarque-1].modeles[i].name) != null) {
        console.log("match");
        this.annees = this.marques[this.indexMarque-1].modeles[i].annee;
        break;
        }
    }
   
   for(var i = 0; i < this.voitures.length ; i++){
      if (marquesel.match(this.voitures[i].modele) != null) {
       this.voituresParModele[j] = this.voitures[i];
       j++;
}
    }

   this.voitures= this.voituresParModele;
    

  }

  selectionAnnee(){
    this.voitures= this.voituresParModele;
    var voitiretriannee : any[] = [''];
     
    var j = 0;
    var m = (document.getElementById("annee")) as HTMLSelectElement;
   var sel = m.selectedIndex;
   var opt = m.options[sel];
   var marquesel = (opt).text;
  

   for(var i = 0; i < this.voitures.length ; i++){
      if (marquesel.match(this.voitures[i].annee) != null) {
        voitiretriannee[j] = this.voitures[i];
       j++;
}
    }

   this.voitures= voitiretriannee;
    

  } */


  // selectionDetail(id:number){
    
  //   this.apiService.voitureSel=id;
  //   console.log(id);
  //   this.apiService.recheche=this.voitures;

    

  // }

}
