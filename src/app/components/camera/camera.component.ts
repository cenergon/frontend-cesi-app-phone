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
  @Input() galeria: boolean = false;
  @Input() tituloDocumento: string ;

  swiperOts = {
    allowSlidePrev : false,
    allowSlideNext : false
  };

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
    private geolocation: Geolocation,
    private camera: Camera,
    private navCtrl: NavController) {}


    navCtrlPage( nav: string){
      this.navCtrl.navigateRoot(nav,{ animated: true});
    }

    navCtrlPagePrueba(){
      this.navCtrl.navigateRoot(this.inmediatoSiguiente,{ animated: true});

    }

    async crearPost(){
    
      const creado = await this.postsSerivce.crearPost(this.post)

      // Purgo mi objeto
      this.post = {
       mensaje : this.tituloDocumento,
       coords: null,
       posicion: false,
     };
   
     this.tempImages = [];// limpio antes de carga
   
     // Cuando creo un nuevo mensaje de post,  me muevo al tab1
     // Gracias a las subscripcion es el secreto para actualizar el tab1
     // this.router.navigateByUrl('/main/tabs/tab1');
     this.navCtrlPage(this.inmediatoSiguiente);
     }
   
     getGeolocation(){
   
       // Si es falso, no pone la geo.
       if (!this.post.posicion){
         this.post.coords = null;
         return;
       }
       
       this.cargandoGeo = true;
       
       // Comienzo geo
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
   
   
        // console.log(this.post);
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
         
         // Puede ser pesado de usar
         // let base64Image = 'data:image/jpeg;base64,' + imageData;
        
         const img = window.Ionic.WebView.convertFileSrc( imageData );
         // console.log (img);
    
         this.postsSerivce.subirImagen( imageData );
         this.tempImages.push( img );
    
        }, (err) => {
         // Handle error
        });
     }

  
    

}


// guardar( form: NgForm ){
    
//   if (form.invalid) {
//     console.log("Formulario no valido"); 
//     return;
//   }

  
//     Swal.fire({
//       title: 'Espere',
//       text: 'Guardando informacion',
//       type: 'info',
//       allowOutsideClick: false
//     })
//     Swal.showLoading();

//   let peticion : Observable<any>;

//   console.log(form);
//   console.log("Guardando objeto",this.heroe.id);


//     if( this.heroe.id){
//     //actualizo
//     console.log("entro a actualizar");
//       peticion = this._heroesService.actualizarHeroe( this.heroe );
       
//       //this._heroesService.actualizarHeroe( this.heroe ).subscribe (
//       //    resp=>{
//       //      console.log(resp);
//       //    }
//       //  );

//     }else{
//       //creo
//               peticion = this._heroesService.nuevoHeroe( this.heroe );

//       // this._heroesService.nuevoHeroe( this.heroe ).subscribe (
//       //   resp=>{
//       //     console.log(resp);
//       //   }
//       // );
//      }

//    peticion.subscribe( resp=> {
//       Swal.fire({
//         title: this.heroe.nombre,
//         text: 'Se actulizo correctamente',
//         type: 'success'

//       });

//    })

// }



