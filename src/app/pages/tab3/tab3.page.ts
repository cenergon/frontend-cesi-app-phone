import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiSericeService } from '../../services/ui-serice.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit{


 constructor(
   private usuarioService: UsuarioService,
   private uiSericeService: UiSericeService ,
   private postService: PostsService
   
   ){}

 usuario : Usuario ={};

 ngOnInit(): void {
  this.usuario = this.usuarioService.getUsuario();
  console.log( 'Tab3 ngOnInit',this.usuario );
 }

async actualizarUsuario( fActulizar: NgForm){
  
  if (fActulizar.invalid) { return };

  const actualizado = await this.usuarioService.actualizarUsusario( this.usuario );

  if (actualizado){
    //toast con mensaje de actualzizado
    this.uiSericeService.presentToast('Perfil actualizado');
  } else {
    //toast con mensaje de error
    this.uiSericeService.presentToast('No se pudo actualizado');

  }
 }

  logout(){
    this.postService.paginaPost = 0;
    this.usuarioService.logout();
  }
}
