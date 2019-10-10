import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pedir-prestamo',
  templateUrl: './pedir-prestamo.page.html',
  styleUrls: ['./pedir-prestamo.page.scss'],
})
export class PedirPrestamoPage implements OnInit {

  titulo: string;
  icono: string;
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentInput() {

    const input = await this.alertCtrl.create({
      header: '¡Ya casi es tuyo!',
      subHeader: 'Ingresa tu CBU:',
      inputs: [
        {
          name: 'txtCBU',
          type: 'number',
          placeholder: 'CBU'
        },
        {
          name: 'txtTelefono',
          type: 'number',
          placeholder: 'Telefono'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: ( data ) => {

            if (data.txtCBU === '123' ) {
              console.log('Confirm Ok', data);
               this.titulo = data.txtNombre;
               this.presentAlertCbuValido();
            }
            else
             return this.presentAlertCbuInvalido();
          }
        }
      ]
    });

    await input.present();

  }

  async presentAlertCbuInvalido() {
    const alert = await this.alertCtrl.create({
      header: 'ATENCIÓN',
      subHeader: '',
      message: 'CBU INCORRECTO',
      buttons: [
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   cssClass: 'secondary',
        //   handler: (blah) => {
        //     console.log('Cancelar');
        //   }
        // },
        {
            text: 'Ok',
            handler: (blah) => {
              console.log('Botón OK');
          }
        }
      ]
    });

    await alert.present();
  }


  async presentAlertCbuValido() {
    const alert = await this.alertCtrl.create({
      header: 'FELICITACIONES!!',
      subHeader: 'TU PRE-PRÉSTAMO FUE APROBADO',
      message: ' En minutos nos comunicaremos con vos..',
      buttons: [
        {
            text: 'GRACIAS',
            handler: (blah) => {
              console.log('Botón OK');
          }
        }
      ]
    });

    await alert.present();
  }


}
