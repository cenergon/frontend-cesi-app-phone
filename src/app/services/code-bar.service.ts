import { Injectable } from '@angular/core';
import { BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { DniCode } from '../interfaces/interfaces';
import { Usuario } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CodeBarService {

  // tslint:disable-next-line: align

  constructor() { }

  async guardarCodeBar( codeBar: string) {
    codeBar = '00398344125@RAMOS@JUAN CARLOS@M@29428784@B@27/05/1982@11/09/2015@202'    
    console.log('servicio codebar' , codeBar);
    this.fraccionarCodebarDni(codeBar);
  }

  fraccionarCodebarDni(codeBar: string) {
    let  dniCode : DniCode ;
    let letra = "";
    let i = 1;
    let k = 0;
    let nro_1 : string = '';
    let apellido : string = '';
    let nombre : string = '';
    let nro_4 : string = '';
    let dni : string = '';
    let nro_6 : string = '';
    let fechaNacimiento : string = '';
    let fechaTramite : string = '';
    let nro_9 : string = '';

    while ( letra != '@' ) {
          letra = codeBar.substring(k, i);
          if (letra != '@') {
            nro_1 = nro_1 + letra;
          }
          k = i;
          i++;
      }

    //console.log(nro_1);
    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          apellido = apellido + letra;
        }
        k = i;
        i++;
    }
  
    //console.log(apellido);
    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          nombre = nombre + letra;
        }
        k = i;
        i++;
    }
  
    //console.log(nombre);
    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          nro_4 = nro_4 + letra;
        }
        k = i;
        i++;
    }
    //console.log(nro_4);
    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          dni = dni + letra;
        }
        k = i;
        i++;
    }
    //console.log(dni);
    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          nro_6 = nro_6 + letra;
        }
        k = i;
        i++;
    }
    //console.log(nro_6);
    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          fechaNacimiento = fechaNacimiento + letra;
        }
        k = i;
        i++;
    }
    //console.log(fechaNacimiento);
    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          fechaTramite = fechaTramite + letra;
        }
        k = i;
        i++;
    }
    //console.log(fechaTramite);
    letra = codeBar.substring(k, i);
    while ( letra != '') {
        letra = codeBar.substring(k, i);
        if (letra != '') {
          nro_9 = nro_9 + letra;
        }
        k = i;
        i++;
   }
   dniCode = {
     nombre: nombre,
     apellido: apellido
   }
   console.log(dniCode);
  
  }
}
