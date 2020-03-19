import { Component, OnInit, Output } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { CodeBarService } from '../../services/code-bar.service';
import { FormGroup, FormControl, Validator} from '@angular/forms';
import { DniCode } from '../../interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { GeoService } from '../../services/geo.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-codebar',
  templateUrl: './codebar.component.html',
  styleUrls: ['./codebar.component.scss'],
})
export class CodebarComponent implements OnInit {

  form: FormGroup;
  lectura: DniCode;
  @Output() inmediatoAnterior='/menu/terinos-condiciones';

  inmediatoSiguiente='/menu/datos-domiciliarios';

  swiperOts = {
    allowSlidePrev : false,
    allowSlideNext : false
  };

  constructor(
    private barcodeScanner: BarcodeScanner,
    private codeBaservice: CodeBarService,
    private geoService: GeoService,
    private navCtrl: NavController,
    ) {
      this.form = new FormGroup({
        dni: new FormControl(''/*,regla de validacion,/*regla de validacion ascincrona*/),
        nombre: new FormControl(''/*regla de validacion,/*regla de validacion ascincrona*/),
        apellido: new FormControl(''/*regla de validacion,/*regla de validacion ascincrona*/),
        fechaNacimiento: new FormControl(''/*,regla de validacion,/*regla de validacion ascincrona*/)
      });
    }

  ngOnInit() {

  }

  navDatosDomiciliarios(){
    this.navCtrl.navigateRoot(this.inmediatoSiguiente, { animated: true});

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
      // Descompongo el codebar dni
      if (barcodeData.text != ""){
        console.log('ENTRO IF');
        this.lectura = this.codeBaservice.formatCodeBar(barcodeData.text);
        this.cargarForm(this.lectura);
        
      // Guardo Geo y fecha de cuando scaneo
        this.geoService.getGeolocation().then( resp => { 
        console.log ('Imprimo coordenadas ionic',resp);
        this.lectura.coords = resp;
        this.lectura.created = new Date();
        console.log('lectura de: ', this.lectura);
      } );
      }
      
     }).catch(err => {
         console.log('Error', err);
     });
  }

  cargarForm( lectura: DniCode) {
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
  guardarDatosDni() {
    console.log('guardo: ', this.lectura);
  }

  resetForm() {
    this.form.reset({
      dni: '',
        nombre: '',
        apellido: '',
        fechaNacimiento: ''
    });
  }

  test() {
    console.log("entro a test");
    this.cargarForm(this.codeBaservice.formatCodeBar('test'));
    this.lectura = this.codeBaservice.formatCodeBar('test');
    this.geoService.getGeolocation().then( resp => { 
      console.log ('Imprimo coordenadas',resp);
      this.lectura.coords = resp;
      this.lectura.created = new Date();
    } );
  }



}
