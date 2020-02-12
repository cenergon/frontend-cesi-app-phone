import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { resolve } from 'q';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  cargandoGeo = false;

  constructor(
    private geolocation: Geolocation
  ) { }

  getGeolocation(): Promise<string>{
    this.cargandoGeo = true;
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise(resolve =>{
      // Comienzo geo
      this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
        this.cargandoGeo  = false;
        const coords = `${ resp.coords.latitude }, ${ resp.coords.longitude}`;
        resolve(coords);
      }).catch((error) => {
        console.log('Error getting location', error);
        this.cargandoGeo = true;
      });  
    });
  }
}
      