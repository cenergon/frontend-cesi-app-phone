import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController, IonInput } from '@ionic/angular';
declare var window : any;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})

export class CameraComponent {

  @Input() inmediatoSiguiente: string;
  @Input() galeria: boolean = true;

  swiperOts = {
    allowSlidePrev : false,
    allowSlideNext : false
  };

  cargandoGeo = false;

  tempImages: string[] = [];

  post = {
    mensaje : '',
    coords: null,
    posicion: false,
  };

  constructor(
    private postsSerivce: PostsService,
    private router: Router,
    private geolocation: Geolocation,
    private camera: Camera,
    private navCtrl: NavController) {}


    navCtrlPage( nav: string){
      this.navCtrl.navigateRoot(nav);
    }

    async crearPost(){

      //console.log(this.post);

    //   const creado = await this.postsSerivce.crearPost(this.post)

    //   //Purgo mi objeto
    //   this.post = {
    //    mensaje : '',
    //    coords: null,
    //    posicion: false,
    //  };

    //  this.tempImages = [];//limpio antes de carga

     this.navCtrlPage(this.inmediatoSiguiente);

     }

     getGeolocation(){

       //Si es falso, no pone la geo.
       if (!this.post.posicion){
         this.post.coords = null;
         return;
       }

       this.cargandoGeo = true;

       //Comienzo geo
       this.geolocation.getCurrentPosition().then((resp) => {
         // resp.coords.latitude
         // resp.coords.longitude
         this.cargandoGeo  = false;

         const coords = `${ resp.coords.latitude }, ${ resp.coords.longitude}`;
         console.log(coords);
         this.post.coords =  coords;

        }).catch((error) => {
          console.log('Error getting location', error);
          this.cargandoGeo = true;
        });


        //console.log(this.post);
     }

     camara(){

       const options: CameraOptions = {
         quality: 45,
         destinationType: this.camera.DestinationType.FILE_URI,
         encodingType: this.camera.EncodingType.JPEG,
         mediaType: this.camera.MediaType.PICTURE,
         correctOrientation: true,
         sourceType: this.camera.PictureSourceType.CAMERA
       }

       this.procesarImagen( options );

     }

     libreria(){
       const options: CameraOptions = {
         quality: 45,
         destinationType: this.camera.DestinationType.FILE_URI,
         encodingType: this.camera.EncodingType.JPEG,
         mediaType: this.camera.MediaType.PICTURE,
         correctOrientation: true,
         sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
       }

       this.procesarImagen( options );


     }

     procesarImagen( options: CameraOptions){
       this.camera.getPicture(options).then( ( imageData ) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64 (DATA_URL):

         //Puede ser pesado de usar
         // let base64Image = 'data:image/jpeg;base64,' + imageData;

         const img = window.Ionic.WebView.convertFileSrc( imageData );
         //console.log (img);

         this.postsSerivce.subirImagen( imageData );
         this.tempImages.push( img );

        }, (err) => {
         // Handle error
        });
     }
}



