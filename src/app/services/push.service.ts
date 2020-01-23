import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PushService {


  mensajes: OSNotificationPayload[] = [ //puede ser tipo any, pero no es lo ideal 
    // {
    //   title: 'Titulo de la push',
    //   body: 'Este es el body de la push cambio',
    //   date: new Date()
    // }
  ];

  pushListener = new EventEmitter<OSNotificationPayload>(); // Escuho los mensajes 

  userId: string; //id de mis usuarios 

  constructor(
    private oneSignal: OneSignal,
    private storage: Storage,
    private navCtrl: NavController  

    ) {
      this.cargarMensajes(); //Cuando carga mi aplicacion , cargo mis mjs almacenados en el storage
     }


configuracionInicial(){

  //("Push service Onesignal start");

  //Configuro Firebase y OneSignal
  this.oneSignal.startInit('bb4c972b-c5a5-424f-bd80-d12516d6d5ab','231233391718');
  
  //Muestro notificacion
  this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
  
  //Recibo notificacion
  this.oneSignal.handleNotificationReceived().subscribe((noti) => {
   // do something when notification is received
   //console.log('Notificacion Recibida',noti);
   this.notificacionRecibida( noti );

  });
  
  this.oneSignal.handleNotificationOpened().subscribe(async(noti) => {
    // do something when a notification is opened
    //console.log('Notificacion Abierta',noti);
    await this.notificacionRecibida(noti.notification);
    
    //Redirecciono a la pagina
    this.navCtrl.navigateRoot('/mensajes',{ animated: true });

  });
  
  //Obtener id del suscrptor
  this.oneSignal.getIds().then( info => {
    this.userId = info.userId;
    console.log(info.userId);
  });



  this.oneSignal.endInit();
  }

  async notificacionRecibida( noti: OSNotification){

    await this.cargarMensajes();

    const payload = noti.payload;
    const existePush = this.mensajes.find( mensaje => mensaje.notificationID === payload.notificationID)
    
    if (existePush){ //controlo no exista el mensaje ya
      return;
    }
    this.mensajes.unshift( payload );//guardo mi msj 

    //Emito cada vez que recibo una notificacion nueva
    this.pushListener.emit( payload );
  
    await this.guardarMensajes();
  }

  guardarMensajes(){
    this.storage.set('mensajes', this.mensajes )
  }

  async cargarMensajes(){
   this.mensajes = await this.storage.get('mensajes') || []; //Los paso por el operador || porque puede ser vacio y devuelvo nulo
   return this.mensajes;
  }

  async getMensajes(){
    await this.cargarMensajes();
    return [...this.mensajes]; //todos los mensajes del arreglo van como objetos nuevos
  }

  async borrarMensajes(){
  await this.storage.clear();
  this.mensajes = [];
  this.guardarMensajes();   
 }

 async borrarStorageFull(){
   await this.storage.clear();
   this.guardarMensajes();
}

}

