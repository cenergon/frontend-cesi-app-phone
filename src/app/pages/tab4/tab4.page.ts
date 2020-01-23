import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  swiperOts = {
    allowSlidePrev : false,
    allowSlideNext : false
  };
  
  constructor( private barcodeScanner: BarcodeScanner) { }


  ngOnInit() {
  }

  
  // Cargo la vista con la pagina es cargada (metodo del ciclo de vida)
  ionViewDidEnter() {
    console.log('viewerDidEnter');
  }

  // Cargo el metodo cuando dejo la pagina (metodo del ciclo de vida)
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  // Carga primer que el ionViewDidEnter, es como decir un aviso "Va a cargar"
  ionViewWillEnter() {
    console.log('viewWillEnter-lanzo el lector');
    this.scan();
  }
  ionViewWillLeave() {
    console.log('viewWillLeave');
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
