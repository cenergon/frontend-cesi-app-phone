import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-datos-contactos',
  templateUrl: './form-datos-contactos.component.html',
  styleUrls: ['./form-datos-contactos.component.scss'],
})
export class FormDatosContactosComponent implements OnInit {

  form: FormGroup;
  constructor() {
    this.form = new FormGroup ({
      telefonoCelular : new FormControl(''),
      telefonoFijo : new FormControl(''),
      telefonoMensajes : new FormControl(''),
      nombreReferencia : new FormControl(''),
      telefonoReferencia : new FormControl(''),
    });
  }
  guardarDatosContactos(){}

  ngOnInit() {}

}
