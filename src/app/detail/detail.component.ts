import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  voitures : any[];
  caracs : any[];
   ngOnInit() {
    /* this.voitures=this.apiService.voiture
    console.log(this.bouchonService.voitureSel);
    this.caracs = this.bouchonService.voiture[this.bouchonService.voitureSel-1].carac;
 */
  } 

}
