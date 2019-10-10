import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
/**
 * Este es el encarfado de renderizar mis posts uno por uno en su html
 */
export class PostComponent implements OnInit {

  @Input() post: Post = {};

  //El slideSoloOpts permite que cuando tengo una imagen esta no se mueva con el slide
  slideSoloOpts = {
    allowSlideNext: false,
    allowSlidePrev: false
  };

  img1 = './assets/perro-1.jpg';
  img2 = './assets/perro-2.jpg';
  img3 = './assets/perro-2.jpg';

  constructor() { }

  ngOnInit() {
    
  }

}
