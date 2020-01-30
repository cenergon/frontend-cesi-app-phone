import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterLink, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Importanciones Personalizadas
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { UsuarioService } from './services/usuario.service';
import { AuthService } from './services/auth0.service';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { AuthServiceIonic } from './services/auth0ionic.service';

// Plugin
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

// Wizard
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePage } from './pages/home/home';

//File
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { Sim } from '@ionic-native/sim/ngx';



@NgModule({
  declarations: [
    AppComponent,
    HomePage,
 
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Aca estan los metodos de ciclo de vida de cada componente
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(), // Collecion des ervicios por eso es forRoot,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthServiceIonic,
    AuthService, // auth0
    SafariViewController, // auth0
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
 
    Platform,
    File,
    FileOpener,
    // tslint:disable-next-line: deprecation
    FileTransfer,
    DocumentViewer,
    // tslint:disable-next-line: deprecation
    OneSignal,
    BarcodeScanner,
    Sim,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
