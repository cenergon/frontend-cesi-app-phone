import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documento1',
  templateUrl: './documento1.page.html',
  styleUrls: ['./documento1.page.scss'],
})
export class Documento1Page implements OnInit {

  titulo: string;
  icono: string;
  footer =false;
  
  
  constructor() { }

  ngOnInit() {
  }

}
