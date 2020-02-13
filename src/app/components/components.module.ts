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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrawingComponent } from './drawing/drawing.component';



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    AvatarSelectorComponent,
    MapaComponent,
    HeaderComponent,
    CodebarComponent,
    SimComponent,
    DrawingComponent
  ],
  exports: [
    PostsComponent,
    AvatarSelectorComponent,
    HeaderComponent,
    CodebarComponent,
    SimComponent,
    DrawingComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
