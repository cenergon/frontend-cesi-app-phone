import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


declare var window : any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  cargandoGeo = false;

  tempImages: string[] =[];

  post = {
    mensaje : '',
    coords: null,
    posicion: false,
  };

  constructor( 
    private postsSerivce: PostsService,
    private router: Router,
    private geolocation : Geolocation,
    private camera: Camera
    ) {}

  async crearPost(){
    
   //console.log(this.post);

   const creado = await this.postsSerivce.crearPost(this.post)
  
   //Purgo mi objeto
   this.post = {
    mensaje : '',
    coords: null,
    posicion: false,
  };

  this.tempImages = [];//limpio antes de carga

  //Cuando creo un nuevo mensaje de post,  me muevo al tab1
  //Gracias a las subscripcion es el secreto para actualizar el tab1
  this.router.navigateByUrl('/main/tabs/tab1');
   
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
