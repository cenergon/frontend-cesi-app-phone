import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-terminos-condiciones',
  templateUrl: './form-terminos-condiciones.component.html',
  styleUrls: ['./form-terminos-condiciones.component.scss'],
})
export class FormTerminosCondicionesComponent implements OnInit {

  checkedbtn : boolean = false

  constructor(
    public navCtrl : NavController
  ) {}

  navDatosPersonales(){
    this.navCtrl.navigateRoot('/menu/datos-personales', { animated: true});
  }

  ngOnInit() {
  }

}
