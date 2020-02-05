import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { CodeBarService } from '../../services/code-bar.service';

@Component({
  selector: 'app-codebar',
  templateUrl: './codebar.component.html',
  styleUrls: ['./codebar.component.scss'],
})
export class CodebarComponent implements OnInit {

  swiperOts = {
    allowSlidePrev : false,
    allowSlideNext : false
  };

  constructor( 
    private barcodeScanner: BarcodeScanner,
    private codeBaservice: CodeBarService
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log('viewWillEnter-lanzo el lector');
    this.scan();
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
      console.log('Barcode data completo', barcodeData);
      this.codeBaservice.guardarCodeBar(barcodeData.text);
      
     }).catch(err => {
         console.log('Error', err);
     });
  }

  test(){
    this.codeBaservice.guardarCodeBar('test');
  }

}
