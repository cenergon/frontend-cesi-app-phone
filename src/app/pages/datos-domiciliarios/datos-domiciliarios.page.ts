import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-datos-domiciliarios',
  templateUrl: './datos-domiciliarios.page.html',
  styleUrls: ['./datos-domiciliarios.page.scss'],
})
export class DatosDomiciliariosPage implements OnInit {

  titulo: string;
  icono: string;

  constructor() { }

  ngOnInit() {
  }

}
