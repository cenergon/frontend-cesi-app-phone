import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
import { UsuariosGuard } from 'src/app/guards/usuarios.guard';
const routes: Routes = [
  {
    path: '',
   
   redirectTo: '/menu/pedir-prestamo',
   // redirectTo: '/wizard',
   // redirectTo: '/menu/terminos-condiciones',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'perfil', loadChildren: '../perfil/perfil.module#PerfilPageModule', canLoad: [ UsuariosGuard ]},
      // tslint:disable-next-line: max-line-length
      // { path: 'pedir-prestamo', loadChildren: '../pedir-prestamo/pedir-prestamo.module#PedirPrestamoPageModule', canLoad: [ UsuariosGuard ] },
      { path: 'mensajes', loadChildren: '../mensajes/mensajes.module#MensajesPageModule', },
      { path: 'cuenta', loadChildren: '../cuenta/cuenta.module#CuentaPageModule', canLoad: [ UsuariosGuard ] },
      { path: 'prestamo', loadChildren: '../prestamo/prestamo.module#PrestamoPageModule', canLoad: [ UsuariosGuard ] },
      { path: 'acercade', loadChildren: '../acercade/acercade.module#AcercadePageModule', canLoad: [ UsuariosGuard ]},
      { path: 'ayuda', loadChildren: '../ayuda/ayuda.module#AyudaPageModule', canLoad: [ UsuariosGuard ]},
      // Pages Wizard - Agregar canLoad
      { path: 'pedir-prestamo', loadChildren: '../pedir-prestamo/pedir-prestamo.module#PedirPrestamoPageModule', },
      { path: 'terminos-condiciones', loadChildren: '../terminos-condiciones/terminos-condiciones.module#TerminosCondicionesPageModule' },
      { path: 'documentacion', loadChildren: '../documentacion/documentacion.module#DocumentacionPageModule',},
      { path: 'datos-personales', loadChildren: '../datos-personales/datos-personales.module#DatosPersonalesPageModule' },
      { path: 'datos-domiciliarios', loadChildren: '../datos-domiciliarios/datos-domiciliarios.module#DatosDomiciliariosPageModule' },
      { path: 'datos-contactos', loadChildren: '../datos-contactos/datos-contactos.module#DatosContactosPageModule' },
      { path: 'cam-documentos', loadChildren: '../cam-documentos/cam-documentos.module#CamDocumentosPageModule' },
      { path: 'cam-selfie', loadChildren: '../cam-selfie/cam-selfie.module#CamSelfiePageModule' },
      { path: 'firma', loadChildren: '../firma/firma.module#FirmaPageModule' },
      { path: 'fin-tramite', loadChildren: '../fin-tramite/fin-tramite.module#FinTramitePageModule' },

      {
        path: 'main',
        loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule), 
        canLoad: [ UsuariosGuard ]},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
