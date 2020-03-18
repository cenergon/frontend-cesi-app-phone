import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-documentacion',
  templateUrl: './lista-documentacion.component.html',
  styleUrls: ['./lista-documentacion.component.scss'],
})
export class ListaDocumentacionComponent implements OnInit {
  isChecked =true;

  public documentos = [
    { val: 'DNI', isChecked: true },
    { val: '3 últimos Recibos de Sueldo', isChecked: true },
    { val: '3 últimos Resumen Bancarios', isChecked: true },
    { val: 'Un Servicio a Tu Nombre', isChecked: true }
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  navCtrlPage(){
    this.navCtrl.navigateRoot('/menu/terminos-condiciones', { animated: true});
  }
  clickTrue(){
    this.isChecked = true;
  }

  ngOnInit() {}

}
