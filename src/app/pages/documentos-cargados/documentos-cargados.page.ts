import { Component, OnInit } from '@angular/core';
import { DocumentosService } from '../../services/documentos.service';
import { Documento, ComponentMenu } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-documentos-cargados',
  templateUrl: './documentos-cargados.page.html',
  styleUrls: ['./documentos-cargados.page.scss'],
})
export class DocumentosCargadosPage implements OnInit {


  titulo : string;
  icono : string;
  documentos: Documento[]=[];
  habilitado = true;

  componentes: Observable<ComponentMenu[]>;


  constructor( private postService: DocumentosService, private menuService: MenuService
    ) {}

  ngOnInit() {
    this.siguientes();

    this.componentes = this.menuService.getMenuOpts();

    
    this.postService.nuevoPost.subscribe( documento => {
      //Cuando recibo mi documento lo pongo en mi primer posicion
      this.documentos.unshift(documento);
    });
  }

  /**
   * infinite-scroll
   * Trabaja junto el infinite scroll, carga todos mis documento
   * el pull trae todos los registro otra vez, para refrescar. 
   * esto sucede cuando es true
   * uso el doRefresh
   * @param event 
   */
  siguientes( event?,pull: boolean = false){
  
    console.log('cargo documento');

    this.postService.getDocumento(pull).subscribe( resp => {
      // console.log(resp.postList[0].usuario._id);
      //console.log(resp);
      this.documentos.push( ...resp.postList);//cada entrada retorna como elemento nuevo
   
       if (event) {
         event.target.complete();
         if (resp.postList.length == 0){
            this.habilitado = false;
          }
       }

    })

  }
/**
 * Mentodo que llama al doRefresh para recargar mis datos,
 * esto por si hay cambios en el momento que estyo mirando los documentos/file
 */
  recargar(event?){
      
    this.siguientes(event, true)

  }

}
