import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentsModule } from '../components.module';
import { MenuService } from '../../services/menu.service';
import { ComponentMenu } from 'src/app/interfaces/interfaces';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string ="Inicio";
  @Input() icono: string ="home";
  
  constructor(
    private menuService: MenuService,
    private navCtrl: NavController
    ) { }

  navigateForward(){
    // console.log(this.path); 
    // this.navCtrl.navigateRoot(this.path);
  }

  goBack() {
    console.log('regreso');
    this.navCtrl.back({ animated: true} );
  }

  ngOnInit() {
  }

  notifications(){ 
  }
  


}
