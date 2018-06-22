import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
 isPhoto=false;
  constructor() { }

  ngOnInit() {
  }
getPhoto(){
this.isPhoto=!this.isPhoto;
}
}
