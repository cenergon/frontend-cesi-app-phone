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
import { CamaraDocumentosComponent } from './camara-documentos/camara-documentos.component';
import { FormDatosDomiciliariosComponent } from './form-datos-domiciliarios/form-datos-domiciliarios.component';
import { FormDatosContactosComponent } from './form-datos-contactos/form-datos-contactos.component';
import { FormTerminosCondicionesComponent } from './form-terminos-condiciones/form-terminos-condiciones.component';
import { SelfieComponent } from './selfie/selfie.component';
import { FormValoresPrestamoComponent } from './form-valores-prestamo/form-valores-prestamo.component';
import { FormFinTramiteComponent } from './form-fin-tramite/form-fin-tramite.component';
import { FooterComponent } from './footer/footer.component';
import { ListaDocumentacionComponent } from './lista-documentacion/lista-documentacion.component';
import { CameraComponent } from './camera/camera.component';



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    AvatarSelectorComponent,
    MapaComponent,
    HeaderComponent,
    CodebarComponent,
    SimComponent,
    DrawingComponent,
    CamaraDocumentosComponent,
    FormDatosDomiciliariosComponent,
    FormDatosContactosComponent,
    FormTerminosCondicionesComponent,
    FormValoresPrestamoComponent,
    FormFinTramiteComponent,
    SelfieComponent,
    FooterComponent,
    ListaDocumentacionComponent,
    CameraComponent
  ],
  exports: [
    PostsComponent,
    AvatarSelectorComponent,
    HeaderComponent,
    CodebarComponent,
    SimComponent,
    DrawingComponent,
    CamaraDocumentosComponent,
    FormDatosDomiciliariosComponent,
    FormDatosContactosComponent,
    FormTerminosCondicionesComponent,
    FormValoresPrestamoComponent,
    FormFinTramiteComponent,
    SelfieComponent,
    FooterComponent,
    ListaDocumentacionComponent,
    CameraComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
