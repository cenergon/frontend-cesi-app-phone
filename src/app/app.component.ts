import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuService } from './services/menu.service';
import { ComponentMenu } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { PushService } from './services/push.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 
  componentes: Observable<ComponentMenu[]>;

 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuService: MenuService,
    private pushService: PushService

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      //Llamo menu
      this.componentes = this.menuService.getMenuOpts();

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //Llamo oneSignal Component
      this.pushService.configuracionInicial();
    });
  }


}
