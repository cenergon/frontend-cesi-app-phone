import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.page.html',
  styleUrls: ['./documentacion.page.scss'],
})
export class DocumentacionPage implements OnInit {

  titulo:string;
  icono:string;
  footer = false;

  constructor() { }

  ngOnInit() {
  }

}
