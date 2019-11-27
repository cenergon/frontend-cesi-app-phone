import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PedirPrestamoPage } from './pedir-prestamo.page';
import { ComponentsModule } from '../../components/components.module';
import { MenuComponent } from '../../components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: PedirPrestamoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
  ],
  declarations: [PedirPrestamoPage,MenuComponent]
})
export class PedirPrestamoPageModule {}
