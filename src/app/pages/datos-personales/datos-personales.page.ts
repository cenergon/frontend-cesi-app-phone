import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {

  titulo : string;
  icono : string;
  footer: false;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

}
