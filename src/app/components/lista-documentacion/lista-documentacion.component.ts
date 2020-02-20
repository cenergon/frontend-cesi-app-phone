import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-documentacion',
  templateUrl: './lista-documentacion.component.html',
  styleUrls: ['./lista-documentacion.component.scss'],
})
export class ListaDocumentacionComponent implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  navDcoumento(){
    this.navCtrl.navigateRoot('/menu/documento1', { animated: true});
  }

  ngOnInit() {}

}
