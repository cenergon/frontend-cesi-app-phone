import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentMenu } from 'src/app/interfaces/interfaces';
import { MenuService } from '../../services/menu.service';
import { UsuarioService } from '../../services/usuario.service';
import { PostsService } from '../../services/posts.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  componentes: Observable<ComponentMenu[]>;

  constructor( 
    private menu: MenuController,
    private menuService: MenuService,
    private usuarioService: UsuarioService ,
    private postService: PostsService ) { }

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

}
