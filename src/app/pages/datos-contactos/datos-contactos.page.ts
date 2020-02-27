import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-contactos',
  templateUrl: './datos-contactos.page.html',
  styleUrls: ['./datos-contactos.page.scss'],
})
export class DatosContactosPage implements OnInit {

  titulo: string;
  icono: string;
  footer: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
