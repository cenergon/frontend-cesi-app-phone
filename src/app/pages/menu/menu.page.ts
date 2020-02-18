import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';
import { ComponentMenu } from '../../interfaces/interfaces';
import { PostsService } from '../../services/posts.service';
import { UsuarioService } from '../../services/usuario.service';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth0.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  componentes: Observable<ComponentMenu[]>;

  flag: boolean = true;
  titulo: string;
  icono: string;

  selectedPath = '';

  configMenu ={
    buttonSalir : true
  }

  constructor(
    private menuService: MenuService,
    private postService: PostsService,
    private usuarioService: UsuarioService,
    private menu: MenuController,
    public authService : AuthService

  ) { }

  ngOnInit() {
    this.componentes = this.menuService.getMenuOpts();
  }

  logout(){
    //logout propip
    this.close();
    this.postService.paginaPost = 0;
    this.usuarioService.logout();
    //logout auth0
    //this.authService.logout();
  }

  close() {
    this.menu.close();
    this.menu.open('end');
  }

  flagcahngeTrue(){
    this.flag = true;
  }

  chatWhatsapp(){
    window.location.href = 'https://wa.me/542944667389?text=Me%20gustaría%20saber%20más%20sobre%20el%20servicio';
  }

}
