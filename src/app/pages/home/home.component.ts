import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = ['/assets/corosel1/l1.jpeg', '/assets/corosel1/l2.jpeg', '/assets/corosel1/l4.jpeg'];
  mbImages = ['/assets/mas-buscados-carousel/mb1.jpeg', '/assets/mas-buscados-carousel/mb2.jpeg', '/assets/mas-buscados-carousel/mb3.png']


  constructor() { }

  ngOnInit(): void {
  }

}
