import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';

//Defino constatne definia en environment
const URL = environment.url;

/**
 * Instalar el stora nativo de IONIC para que funcione este servicio
 * https://ionicframework.com/docs/building/storage
 */
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  private usuario: Usuario = {};

  constructor( 
    private http: HttpClient,
    private storage: Storage  ,
    private navCtrl: NavController  
    ) { }

    /**
     * Me retorna mi token cuando me logueo y lo almaceno en mi storage nativo de ionic
     * @param email 
     * @param password 
     */
    login(email: string, password: string){

      const data = {email, password};
      
      return new Promise(resolve => {
        this.http.post(`${ URL }/usuarios/login`,data)
        .subscribe( async resp => {
        console.log(resp);
  
        if (resp['ok']){
          await this.guardarToken( resp['token']) ;
          resolve(true);
        } else {
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
        });

      });

     
    }

    /**
     * Guardo el token y lo almaceno en el storage nativo de ionic
     * Explorador lo vemos en la pestaña aplication opcin ionic almacenado 
     */
    async guardarToken(token: string){
       this.token = token;
       await this.storage.set('token',token);

       await this.validaToken();
    }

    /**
     * Metodo crear nuevo usuario
     * Si no paso el avatar genera el avatar por defecto av-1.png
     * @param usuario 
     */
    registro( usuario:Usuario){
      console.log(usuario);

      if (usuario.avatar === ''){
        console.log('set avatar');
          usuario.avatar ='av-1.png';
      }

      return new Promise(resolve => {

        this.http.post(`${ URL }/usuarios/create`,usuario)
        .subscribe( async resp =>{
          if (resp['ok']){
            await this.guardarToken( resp['token']) ;
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        })


      })
      
    }
/**
 * Esto valida el token y obtiene los datos del usuario del token - no de la base de datos
 */
    async validaToken(): Promise<boolean>{

      await this.cargarToken(); //espera y carga el token
      if (!this.token) {
        this.navCtrl.navigateRoot('/login');
        return Promise.resolve(false);
      }

      return new Promise<boolean> ( resolve =>{
        const headers =  new HttpHeaders({
          'x-token': this.token
        })
        this.http.get(`${ URL }/usuarios/verificar`, {headers})
        .subscribe ( resp =>{ 
          console.log(resp);
          if (resp['ok']){
            this.usuario = resp['usuario']; //es el usuario, del token no de la base de datos!!
             resolve(true);
          }else{
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }
        });
      }); 
    }
  /**
   * Regresa el token del usuario o null caso contrario
   */
    async cargarToken(){
       this.token = await this.storage.get('token') || null;
    }

    /**
     * Retorna la informacion del usuario si exite
     */
    getUsuario(){
      //Lo saco al login, si no es correcto el token
      if (!this.usuario._id){
        this.validaToken();
      }
      return { ...this.usuario}; //destruyo la relacion al objeto y retorno uno nuevo
    }

/**
 * Actualizo el usuario , y utilizo el token del mismo
 * @param usuario 
 */
    actualizarUsusario(usuario: Usuario){

      //Preparo para pasar mi token al servicio
      const headers = new HttpHeaders({
        'x-token': this.token
      });

      return new Promise( resolve =>{

        this.http.post(`${ URL }/usuarios/update`,usuario, { headers })
        .subscribe ( resp =>{
          if (resp['ok']){
              this.guardarToken(resp['token']);
              resolve(true);
          } else {
              resolve(false);
          }
        })
      });
      } 

      logout(){
          this.token =  null;
          this.usuario  = null;
          this.storage.clear();
          this.navCtrl.navigateRoot('/login',{ animated: true });
      }
}
