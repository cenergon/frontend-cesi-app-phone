import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-fin-tramite',
  templateUrl: './form-fin-tramite.component.html',
  styleUrls: ['./form-fin-tramite.component.scss'],
})
export class FormFinTramiteComponent implements OnInit {

  inmediatoSiguiente: string = 'menu/home'
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) { }

  navCtrlPage(){
    this.msjAceptacionSolicitud();
    this.navCtrl.navigateRoot('/menu/main/tabs/tab1', { animated: true});

  }

  async msjAceptacionSolicitud() {
    const alert = await this.alertCtrl.create({
      header: 'Gracias!',
      subHeader: 'Juan Carlos',
      message: 'En breve nos pondremos en contacto con vos',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Cancelar');
          }
        },
        {
            text: 'Ok',
            handler: (blah) => {
              // console.log('Botón OK');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {}

}
