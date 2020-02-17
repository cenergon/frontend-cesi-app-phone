import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-datos-domiciliarios',
  templateUrl: './form-datos-domiciliarios.component.html',
  styleUrls: ['./form-datos-domiciliarios.component.scss'],
})
export class FormDatosDomiciliariosComponent implements OnInit {

  form: FormGroup;
  constructor() { 
    this.form = new FormGroup({
      provincia: new FormControl(''),
      localidad: new FormControl(''),
      domicilio: new FormControl(''/*,regla de validacion,/*regla de validacion ascincrona*/),
      calle: new FormControl(''/*regla de validacion,/*regla de validacion ascincrona*/),
      numero: new FormControl(''/*regla de validacion,/*regla de validacion ascincrona*/),
      piso: new FormControl(''/*,regla de validacion,/*regla de validacion ascincrona*/),
      dpto: new FormControl(''),
      entrecalle: new FormControl(''),
      ycalle: new FormControl(''),
      barrio: new FormControl('')

    });
  }

  guardarDatosDomiciliarios(){
    console.log(this.form.value);

  }

  ngOnInit() {}

}
