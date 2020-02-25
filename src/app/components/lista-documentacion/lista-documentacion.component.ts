import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-documentacion',
  templateUrl: './lista-documentacion.component.html',
  styleUrls: ['./lista-documentacion.component.scss'],
})
export class ListaDocumentacionComponent implements OnInit {

  public documentos = [
    { val: 'DNI - Foto Ambos lados', isChecked: true },
    { val: '3 últimos Meses de Recibo de Sueldo', isChecked: true },
    { val: '3 últimos meses de resumen bancarios', isChecked: true },
    { val: 'Impuesto de Servicio - A Nombre de titular', isChecked: true }
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  navCtrlPage(){
    this.navCtrl.navigateRoot('/menu/terminos-condiciones', { animated: true});
  }

  ngOnInit() {}

}
