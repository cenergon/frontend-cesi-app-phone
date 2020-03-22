import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { AuthService } from './auth0.service';

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
    private navCtrl: NavController  ,
   // private authService: AuthService ,

    ) { }

    /**
     * Me retorna mi token cuando me logueo y lo almaceno en mi storage nativo de ionic
     * @param email 
     * @param password 
     */
    async login(email: string, password: string){

      console.log("entre a login ");
      
      const data = {email, password};
      
     return new Promise(resolve => {
        this.http.post(`${ URL }/usuarios/login`,data)
        .subscribe( async resp => {
        console.log(resp);
  
        if (resp['ok']){
          console.log("guardo Token generado");
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
    registro( pUsuario:Usuario){

      let usuario = { 
        avatar: pUsuario.avatar,
        nombre:  pUsuario.nombre,
        password: pUsuario.password,
        dni:  pUsuario.dni,
        cbu:  pUsuario.cbu,
        email: pUsuario.email,
        email_verified: pUsuario.email_verified,
        family_name: pUsuario.family_name,
        given_name: pUsuario.given_name,
        locale: pUsuario.locale,
        name: pUsuario.name,
        nickname:pUsuario.nickname,
        picture: pUsuario.picture,
        sub_idAuth0: pUsuario.sub, //aca cambio el nombre del campo 
        updated_at: pUsuario.updated_at
      }

      if (usuario.avatar === ''){
          usuario.avatar ='av-1.png';
      }

      return new Promise(resolve => {
        this.http.post(`${ URL }/usuarios/create`,usuario)
        .subscribe( async resp =>{
          if (resp['ok']){
            console.log("creo usuario y guardo token");
            await this.guardarToken( resp['token']) ;
            resolve(true);
          } else {
            console.log("NO CREO USUARIO");
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
      console.log("valido token generado por servicio rest - METODO validarToken del canLoad");
      await this.cargarToken(); //espera y carga el token
      if (!this.token) {
        console.log("NO  valido token y mando a login");
        this.navCtrl.navigateRoot('/login');
        return Promise.resolve(false);
      }

      return new Promise<boolean> ( resolve =>{
        const headers =  new HttpHeaders({
          'x-token': this.token
        })
        this.http.get(`${ URL }/usuarios/verificar`, {headers})
        .subscribe ( resp =>{ 
          //console.log(resp);
          //if (resp['ok'] || this.authService.isAuthenticated$){
          if (resp['ok'] ){
            this.usuario = resp['usuario']; //es el usuario, del token no de la base de datos!!
             resolve(true);
          }else{
            console.log("NO PASO VALIDACION TOKEN");
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

  // registroUsuarioauth0(){
  //   this.authService.userProfile$.subscribe(perfil => {
  //   console.log("busco si esixte usuario Auth0");
  //    this.getUsuarioByAuth0(perfil).then( flag =>{
  //       if (!flag){
  //         console.log("Creo Usuario");
  //         this.registro(perfil);
  //         this.login('cesi@cesi.com.ar','@');
  //       }else{
  //         console.log("NO creo Usuario - genero Token ");
  //         this.login('cesi@cesi.com.ar','@');   
  //       }
  //    })
  //   })
  // }

  /**
   * Busco si existe el usuario de red social, 
   * si no existe se crea. Si existe genera el token de navegación
   * @param perfil 
   */
  getUsuarioByAuth0(perfil: Usuario){
    let sub_idAuth0 = perfil.sub;
    return new Promise( resolve =>{
    this.http.get(`${ URL }/usuarios/usuarioAuth0/${sub_idAuth0}`)
      .subscribe ( resp =>{
        if (resp){
            //console.log("Encontrado");
            resolve(true);
        } else {
           //console.log("NO encontrado");
            resolve(false);
        }
      })
    });
  }

}
