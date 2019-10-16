import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentMenu } from 'src/app/interfaces/interfaces';
import { MenuService } from '../../services/menu.service';
import { UsuarioService } from '../../services/usuario.service';
import { PostsService } from '../../services/posts.service';
import { MenuController } from '@ionic/angular';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  componentes: Observable<ComponentMenu[]>;

  flag: boolean = true;


  selectedPath = '';


  constructor( 
    private menu: MenuController,
    private menuService: MenuService,
    private usuarioService: UsuarioService ,
    private postService: PostsService ,
    private router: Router) {

      this.router.events.subscribe((event: RouterEvent) => {
        this.selectedPath = event.url;
      });

     }

  ngOnInit() { 
    this.componentes = this.menuService.getMenuOpts();
  }
  logout(){
    this.close();
    this.postService.paginaPost = 0;
    this.usuarioService.logout();
  }

  close() {
    this.menu.close();
    this.menu.open('end');
  }

  flagcahngeTrue(){
    this.flag = true;
  }

}