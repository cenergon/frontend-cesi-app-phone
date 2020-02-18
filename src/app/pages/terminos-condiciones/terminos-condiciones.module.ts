import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TerminosCondicionesPage } from './terminos-condiciones.page';
import { ComponentsModule } from '../../components/components.module';


const routes: Routes = [
  {
    path: '',
    component: TerminosCondicionesPage
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
  declarations: [TerminosCondicionesPage]
})
export class TerminosCondicionesPageModule {}
