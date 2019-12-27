import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/acercade',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'perfil', loadChildren: '../perfil/perfil.module#PerfilPageModule',},
      { path: 'acercade', loadChildren: '../acercade/acercade.module#AcercadePageModule', },
      { path: 'pedir-prestamo', loadChildren: '../pedir-prestamo/pedir-prestamo.module#PedirPrestamoPageModule',  },
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
