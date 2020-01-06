import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuariosGuard } from './guards/usuarios.guard';

const routes: Routes = [
  // {
  //   path: 'main', 
  //   loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  //   canLoad: [ UsuariosGuard ]
  // },

    {
       // Defino a donde quiero enviar cuando la aplicacion se inicializa nuevamente y se logueo el usuario
      path: '' , 
      pathMatch: 'full', 
      redirectTo: 'menu',
      // redirectTo: 'login'
      // redirectTo: 'main/tabs/tab1'
      // redirectTo: 'iniciodemo'
    },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
