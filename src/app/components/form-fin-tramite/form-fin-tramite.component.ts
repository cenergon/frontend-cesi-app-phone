import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-fin-tramite',
  templateUrl: './form-fin-tramite.component.html',
  styleUrls: ['./form-fin-tramite.component.scss'],
})
export class FormFinTramiteComponent implements OnInit {

  inmediatoSiguiente: string = 'menu/home'
  constructor(
    private router: Router
  ) { }

  navCtrlPage(){
    this.router.navigateByUrl('/main/tabs/tab1');

  }

  ngOnInit() {}

}
