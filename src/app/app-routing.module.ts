import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuariosGuard } from './guards/usuarios.guard';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: 'main', 
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [ UsuariosGuard ]
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: '' , 
    pathMatch: 'full', 
    //Defino a donde quiero enviar cuando la aplicacion se inicializa nuevamente y se logue el usuario
    //redirectTo: 'login'
    redirectTo: 'main/tabs/tab1'
   
  },
  { path: 'alert', loadChildren: './components/alert/alert.module#AlertPageModule', canLoad: [ UsuariosGuard ] },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule', canLoad: [ UsuariosGuard ] },
  { path: 'documentacion', loadChildren: './pages/documentacion/documentacion.module#DocumentacionPageModule', canLoad: [ UsuariosGuard ]
},
  { path: 'cuenta', loadChildren: './pages/cuenta/cuenta.module#CuentaPageModule', canLoad: [ UsuariosGuard ] },
  { path: 'prestamo', loadChildren: './pages/prestamo/prestamo.module#PrestamoPageModule', canLoad: [ UsuariosGuard ] },
  { path: 'acercade', loadChildren: './pages/acercade/acercade.module#AcercadePageModule', canLoad: [ UsuariosGuard ] },
  { path: 'mensajes', loadChildren: './pages/mensajes/mensajes.module#MensajesPageModule', canLoad: [ UsuariosGuard ] },
  { path: 'ayuda', loadChildren: './pages/ayuda/ayuda.module#AyudaPageModule', canLoad: [ UsuariosGuard ] },
  { path: 'pedir-prestamo', loadChildren: './pages/pedir-prestamo/pedir-prestamo.module#PedirPrestamoPageModule' , canLoad: [ UsuariosGuard ]},

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
