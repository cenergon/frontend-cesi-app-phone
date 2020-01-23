import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentsModule } from '../components.module';
import { MenuService } from '../../services/menu.service';
import { ComponentMenu } from 'src/app/interfaces/interfaces';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string ="Inicio";
  @Input() icono: string ="home";

  constructor( private menuService: MenuService) { }

  ngOnInit() {
  }

  notifications(){ 
  }
  


}
