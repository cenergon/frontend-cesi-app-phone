import { Injectable , EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaDocumentos, Documento } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
import { resolve } from 'q';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

  //Defino constatne definia en environment
  const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
 
  //en el logout hay que ponerlo en cero!
  paginaPost = 0;
  
  //lo uso para poner primero mi nuevo Documento siempre
  nuevoPost = new EventEmitter<Documento>();

  constructor(
    private http: HttpClient,
    private usuarioServie: UsuarioService,
    private fileTransfer: FileTransfer
    ) { }

  getDocumento(pull: boolean = false){

    if (pull){
      this.paginaPost =0;
    }

    this.paginaPost ++;
    //return this.http.get(`${URL}'/post/?pagina=${ this.paginaPost }`);
    return this.http.get<RespuestaDocumentos>(`${ URL }/post/?pagina=${ this.paginaPost}`);
  }

  crearPost( post ){

  const token = this.usuarioServie.token;
  const headers = new HttpHeaders({
      'x-token': token
    });

  return new Promise(resolve =>{
      this.http.post(`${URL}/post`,post,{ headers })
      .subscribe( resp => {
       this.nuevoPost.emit(resp['post']);//emito mi post al tab 2
       //console.log("Respuesta al crear post",resp);
       resolve(true);
      });
    });
 
  }

  /**
   * Puede subir cualquier archivo
   * este es especifico para imagen, pero sirve para cualquier que tenga un path
   */
  subirImagen( img: string ){
      
    const options: FileUploadOptions = {
      
      fileKey : 'file', //es la imagen, lo que nombre file (yo le puse asi) en postman
      headers : {
        'x-token': this.usuarioServie.token
      }
    };

      //Para subir debo crear una tarea
      //fileTransfer tiene herramientas, de como por ejemplo cuanto % esta subido de la imagen, etc..
    const fileTransfer:  FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload( img, `${ URL}/post/upload`, options )
      .then( data => {
        console.log(data);
      }).catch( err => {
        console.log ('error en carga de imagen', err);
      });  
    } 
}
