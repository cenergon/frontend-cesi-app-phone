import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth0.service';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';
import { ComponentMenu } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  titulo: string;
  constructor(
    public authService: AuthService,

  ) { }

  ngOnInit() {
    this.authService.userProfile$.subscribe(perfil => {
      //console.log("ngOnInit: pefil.page " ,perfil);
    })
  } 

}
