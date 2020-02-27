import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fin-tramite',
  templateUrl: './fin-tramite.page.html',
  styleUrls: ['./fin-tramite.page.scss'],
})
export class FinTramitePage implements OnInit {

  titulo: string;
  icono:string;
  footer = false;
  constructor() { }

  ngOnInit() {
  }

}
