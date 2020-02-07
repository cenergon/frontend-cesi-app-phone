import { Injectable } from '@angular/core';
import { BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { DniCode } from '../interfaces/interfaces';
import { Usuario } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CodeBarService {

  // tslint:disable-next-line: align
  deniCode: DniCode;

  constructor() { }

    formatCodeBar( codeBar: string) : DniCode {
    //codeBar = '00398344125@RAMOS@JUAN CARLOS@M@29428784@B@27/05/1982@11/09/2015@202';    
    return this.fraccionarCodebarDni(codeBar);
  }

  fraccionarCodebarDni(codeBar: string): DniCode {
    let  dniCode : DniCode ;
    let letra = "";
    let i = 1;
    let k = 0;
    let nroTramite : string = '';
    let apellido : string = '';
    let nombre : string = '';
    let sexo : string = '';
    let dni : string = '';
    let ejemplar : string = '';
    let fechaNacimiento : string = '';
    let fechaEmision : string = '';
    let codigo : string = '';


    while ( letra != '@' ) {
          letra = codeBar.substring(k, i);
          if (letra != '@') {
            nroTramite = nroTramite + letra;
          }
          k = i;
          i++;
      }

    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          apellido = apellido + letra;
        }
        k = i;
        i++;
    }
  
    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          nombre = nombre + letra;
        }
        k = i;
        i++;
    }
  
    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          sexo = sexo + letra;
        }
        k = i;
        i++;
    }

    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          dni = dni + letra;
        }
        k = i;
        i++;
    }

    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          ejemplar = ejemplar + letra;
        }
        k = i;
        i++;
    }

    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          fechaNacimiento = fechaNacimiento + letra;
        }
        k = i;
        i++;
    }

    letra = codeBar.substring(k, i);
    while ( letra != '@' ) {
        letra = codeBar.substring(k, i);
        if (letra != '@') {
          fechaEmision = fechaEmision + letra;
        }
        k = i;
        i++;
    }

    letra = codeBar.substring(k, i);
    while ( letra != '') {
        letra = codeBar.substring(k, i);
        if (letra != '') {
          codigo = codigo + letra;
        }
        k = i;
        i++;
   }
    dniCode = {
      dniCode : codeBar,
      nroTramite : nroTramite,
      apellido : apellido,
      nombre : nombre,
      sexo : sexo,
      dni : parseInt(dni) ,
      ejemplar : ejemplar,
      fechaNacimiento : fechaNacimiento,//new Date(this.invertirFecha(fechaNacimiento)),
      fechaEmision : fechaNacimiento,//new Date(this.invertirFecha(fechaEmision)),
      codigo : codigo,
   }
    //console.log(dniCode);
    return dniCode;
 
  
  }

   invertirFecha(fecha : string): string {
    let dd = fecha.substring(0,2);
    let mm = fecha.substring(3,5);
    let yyyy = fecha.substring(6,10);
    let fechaEstandar = mm + '/' + dd + '/' + yyyy;
    return fechaEstandar;
  }
}
