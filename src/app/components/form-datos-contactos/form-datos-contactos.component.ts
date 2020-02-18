import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-datos-contactos',
  templateUrl: './form-datos-contactos.component.html',
  styleUrls: ['./form-datos-contactos.component.scss'],
})
export class FormDatosContactosComponent implements OnInit {

  form: FormGroup;
  constructor(
    private navCtrl: NavController
  ) {
    this.form = new FormGroup ({
      telefonoCelular : new FormControl(''),
      telefonoFijo : new FormControl(''),
      telefonoMensajes : new FormControl(''),
      nombreReferencia : new FormControl(''),
      telefonoReferencia : new FormControl(''),
    });
  }
  guardarDatosContactos(){}


  navCamDatos(){
    this.navCtrl.navigateRoot('/menu/cam-documentos', { animated: true});
  }

  ngOnInit() {}

}
