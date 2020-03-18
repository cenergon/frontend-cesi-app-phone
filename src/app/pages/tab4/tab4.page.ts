import { Component, OnInit, ApplicationRef } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { PushService } from '../../services/push.service';


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

  userId : string;
  mensajes: OSNotificationPayload[] = [];

 constructor(
  private barcodeScanner: BarcodeScanner,
  public pushService: PushService, 
  private applicationRef: ApplicationRef,
  ) 
  {}

 ngOnInit(){

  //Cuando recibo una push, cargo mis mensajes 
  this.pushService.pushListener.subscribe(noti =>{
      this.mensajes.unshift( noti );
      this.applicationRef.tick();// Le digo a angular que controle los cambios
    }); 
  }
  
  async ionViewWillEnter(){
    console.log( 'will Enter - Cargar mensajes' );
    this.mensajes = await this.pushService.getMensajes();
  }
  
  async borrarMensajes(){
    await this.pushService.borrarMensajes();
    this.mensajes = [];
  }
  
  async borrarStorageFull(){
    await this.pushService.borrarStorageFull();
  }
  
  // Cargo la vista con la pagina es cargada (metodo del ciclo de vida)
  ionViewDidEnter() {
    console.log('viewerDidEnter');
  }

  // Cargo el metodo cuando dejo la pagina (metodo del ciclo de vida)
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  // // Carga primer que el ionViewDidEnter, es como decir un aviso "Va a cargar"
  // ionViewWillEnter() {
  //   console.log('viewWillEnter-lanzo el lector');
  //   this.scan();
  // }
  ionViewWillLeave() {
    console.log('viewWillLeave');
  }

  scan() {

    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Porfavor coloque el codigo en el recuadro',
      resultDisplayDuration: 500,
      formats: 'QR_CODE,PDF_417',
      orientation: 'landscape',
    };

    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}