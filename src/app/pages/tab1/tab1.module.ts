import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
//Personalizados 
import { ComponentsModule } from '../../components/components.module';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { AppComponent } from '../../app.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
    
  ],
  declarations: [Tab1Page],
 // bootstrap: [AppComponent]
})
export class Tab1PageModule {}
