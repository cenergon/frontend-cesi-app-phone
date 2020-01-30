import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { MapaComponent } from './mapa/mapa.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CodebarComponent } from './codebar/codebar.component';
import { SimComponent } from './sim/sim.component';



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    AvatarSelectorComponent,
    MapaComponent,
    HeaderComponent,
    CodebarComponent,
    SimComponent

  ],
  exports: [
    PostsComponent,
    AvatarSelectorComponent,
    HeaderComponent,
    CodebarComponent,
    SimComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    RouterModule,
    
  ]
})
export class ComponentsModule { }
