import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentMenu } from 'src/app/interfaces/interfaces';
import { MenuService } from '../../services/menu.service';
import { UsuarioService } from '../../services/usuario.service';
import { PostsService } from '../../services/posts.service';
import { MenuController, Platform } from '@ionic/angular';
import { RouterEvent, Router } from '@angular/router';
import { AuthService } from '../../services/auth0.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  componentes: Observable<ComponentMenu[]>;

  flag: boolean = true;

  selectedPath = '';

  configMenu ={
    buttonSalir : false
  }


  constructor( 
    private menu: MenuController,
    private menuService: MenuService,
    private usuarioService: UsuarioService ,
    private postService: PostsService ,
    private router: Router,
    public platform: Platform,
    public authService : AuthService
    
    ) {

      this.router.events.subscribe((event: RouterEvent) => {
        this.selectedPath = event.url;
      });

     }

  ngOnInit() { 
    this.componentes = this.menuService.getMenuOpts();
  }
  logout(){
    //logout propip
    this.close();
    this.postService.paginaPost = 0;
    this.usuarioService.logout();
    //logou auth0
    this.authService.logout();
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