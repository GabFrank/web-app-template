import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  buscarActive = false;
  formGroup : FormGroup;
 
  constructor(){}

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.formGroup = new FormGroup({
      buscar : new FormControl(null)
    })
  }

  toogleBuscar(){
    this.buscarActive = !this.buscarActive;
  }

}
