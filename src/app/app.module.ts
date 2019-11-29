import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Importanciones Personalizadas
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { MenuComponent } from './components/menu/menu.component';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { UsuarioService } from './services/usuario.service';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,  
    IonicStorageModule.forRoot(), //Collecion des ervicios por eso es forRoot,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera, 
    FileTransfer,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
