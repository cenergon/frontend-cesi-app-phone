import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentMenu } from '../../interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.page.html',
  styleUrls: ['./terminos-condiciones.page.scss'],
})
export class TerminosCondicionesPage implements OnInit {

  titulo: string;
  icono: string;
  componentes: Observable<ComponentMenu[]>;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

}
