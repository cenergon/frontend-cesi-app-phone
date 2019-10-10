import { Component, OnInit, ApplicationRef } from '@angular/core';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { PushService } from '../../services/push.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {

  titulo : string;
  icono: 'ios-chatbubbles';
 

  userId : string;
  mensajes: OSNotificationPayload[] = [];

  constructor(
    public pushService: PushService, 
    private applicationRef: ApplicationRef,
    ) {}

  ngOnInit(){
    //Cuanro recibo una push, cargo mis mensajes 
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
    console.log("llame al metodo borrar");

    await this.pushService.borrarMensajes();

  }

  async borrarStorageFull(){
    await this.pushService.borrarStorageFull();
    //console.log("llame al metodo borrar");
  }




}
