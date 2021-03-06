import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcercadePage } from './acercade.page';
import { ComponentsModule } from '../../components/components.module';
import { MenuComponent } from '../../components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: AcercadePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes), ComponentsModule
  ],
  declarations: [AcercadePage, MenuComponent]
})
export class AcercadePageModule {}
