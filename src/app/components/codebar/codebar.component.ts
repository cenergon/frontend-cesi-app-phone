import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { CodeBarService } from '../../services/code-bar.service';
import { FormGroup, FormControl, Validator} from '@angular/forms';
import { DniCode } from '../../interfaces/interfaces';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-codebar',
  templateUrl: './codebar.component.html',
  styleUrls: ['./codebar.component.scss'],
})
export class CodebarComponent implements OnInit {
 
  form: FormGroup;
  lectura : DniCode;

  swiperOts = {
    allowSlidePrev : false,
    allowSlideNext : false
  };

  constructor( 
    private barcodeScanner: BarcodeScanner,
    private codeBaservice: CodeBarService
    ) { 
      this.form = new FormGroup({
        'dni': new FormControl(''/*,regla de validacion,/*regla de validacion ascincrona*/),
        'nombre': new FormControl(''/*regla de validacion,/*regla de validacion ascincrona*/),
        'apellido': new FormControl(''/*regla de validacion,/*regla de validacion ascincrona*/),
        'fechaNacimiento': new FormControl(''/*,regla de validacion,/*regla de validacion ascincrona*/)
      });
    }

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
      this.lectura = this.codeBaservice.formatCodeBar(barcodeData.text);
      console.log("lectura de: ", this.lectura);
      this.cargarForm(this.lectura);
      
        
     }).catch(err => {
         console.log('Error', err);
     });
  }

  cargarForm( lectura : DniCode){
    this.resetForm();
    this.form.setValue({
      dni : lectura.dni,
      nombre : lectura.nombre,
      apellido : lectura.apellido,
      fechaNacimiento : lectura.fechaNacimiento
    }) ;
 
    console.log(this.form.value);
  }

  /**
   * No guardo datos del Form, sino de el codigo completo de lectura
   */
  guardarDatosDni(){
    console.log('guardo: ',this.lectura);
  }

  resetForm(){
    this.form.reset({
      'dni': '',
        'nombre': '',
        'apellido': '',
        'fechaNacimiento': ''
    });
  }

  test(){
    this.cargarForm(this.codeBaservice.formatCodeBar('test'));
    this.lectura = this.codeBaservice.formatCodeBar('test');
  }

 

}
