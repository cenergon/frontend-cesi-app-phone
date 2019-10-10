import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post, ComponentMenu } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  posts: Post[]=[];
  habilitado = true;



 
  constructor( private postService: PostsService) {}

  ngOnInit() {
    this.siguientes();

    this.postService.nuevoPost.subscribe( post => {
      //Cuando recibo mi post lo pongo en mi primer posicion
      this.posts.unshift(post);
    });
  }

  /**
   * infinite-scroll
   * Trabaja junto el infinite scroll, carga todos mis post
   * el pull trae todos los registro otra vez, para refrescar. 
   * esto sucede cuando es true
   * uso el doRefresh
   * @param event 
   */
  siguientes( event?,pull: boolean = false){
  
    console.log('cargo post');

    this.postService.getPost(pull).subscribe( resp => {
      // console.log(resp.postList[0].usuario._id);
      console.log(resp);
      this.posts.push( ...resp.postList);//cada entrada retorna como elemento nuevo
   
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

