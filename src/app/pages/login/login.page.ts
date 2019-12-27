import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlide, IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiSericeService } from '../../services/ui-serice.service';
import { Usuario } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth0.service';
import { AuthServiceIonic } from '../../services/auth0ionic.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Este decorador permite manipular el IonSlides de mi html
  @ViewChild( 'slidePrincipal', {static: true} ) slides: IonSlides;

  // Datos de configuracion App
  configApp = {
    whatsappActive : true,
    whatsappNumbre : '2944667389',
    loginApp : true ,
    tab1: true,
    tab2: true,
    tab3: true,
    titulo1: "Mutual 22 Septiembre",
    titulo2: "Bienvenido",
    buttonIngresar: true,
    buttonRegistrate: true,
    buttonFacebookAngular: false,
    buttonGmailAngular: false,
    buttonRegistrateIonic: false,
    buttonRegistrateRedesSocialesAll: false,
    fotterSlideLogin: false,
    fotterleyenda: true,
    fotterLeyendaTitulo: "¡Gracias por elegirnos...!", 
    footerColor: "primary",
    footerPosition: "stacked",
    fotterSlideIrInicio: true
  }


  // Lleno datos por defecto en login
  loginUser = {
    email: 'tuprestamoya@mutual.com',
    password: '123456'
    // email: '',
    // password: ''
  };

  // Lleno datos por defecto en registro
  registerUser: Usuario = {
    email: '',
    password: '',
    nombre: '',
    avatar : '',
    dni: null,
    cbu: ''
  };
  
  constructor(
    private usuarioService : UsuarioService,
    private navCtrl: NavController,
    private uiService: UiSericeService,
    public authService: AuthService ,// auth0 Web
    public autrhServiceIonic : AuthServiceIonic
  ) { }

  ngOnInit() {
    // Bloqueo mi slide principal 
    this.slides.lockSwipes(true);
  }

  async login(flogin: NgForm){
    
    if (!flogin.valid){return;}
     const valido = await this.usuarioService.login(this.loginUser.email,this.loginUser.password);
     
     if (valido){
       // navegar al tabs
       // this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true});
       
      //  this.navCtrl.navigateRoot('/pedir-prestamo', { animated: true});
       this.navCtrl.navigateRoot('/menu', { animated: true});


     } else {
       // mostrar alerta 
       this.uiService.presentAlert("Usuario o contraseña no son correctas.");
     }

  }

  async registro(fRegistro: NgForm){

    if(fRegistro.invalid){return;}

    const valido = await this.usuarioService.registro(this.registerUser);

    if (valido){
      // navegar al tabs
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true});

    } else {
      // mostrar alerta 
      this.uiService.presentAlert("El correo electrónico ya existe.");
    }
     // console.log(fRegistro.valid);
  }

 
  /**
   * Desbloqueo slide principal para controlar el movimiento por botones
   */
  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);

  }

  /**
   * Desbloqueo slide principal para controlar el movimiento por botones
   */
  mostrarLogin(){
   this.slides.lockSwipes(false);
   this.slides.slideTo(0);
   this.slides.lockSwipes(true);
  }


}
