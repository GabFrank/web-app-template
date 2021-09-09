import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openWhats(){
    window.open('http://wa.me/595982187492', '_blank')
  }

}
