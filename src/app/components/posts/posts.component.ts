import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
/**
 * Contiene todos mis post - todos mis contenidos
 */
export class PostsComponent implements OnInit {

  @Input() posts: Post[] = [];
  constructor() { }

  ngOnInit() {
   // console.log('Mi posts.components: ',this.posts);
  }

}
