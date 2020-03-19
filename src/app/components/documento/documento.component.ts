import { Component, OnInit, Input } from '@angular/core';
import { Documento } from '../../interfaces/interfaces';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss'],
})

/**
 * Este es el encarfado de renderizar mis documentos uno por uno en su html
 */
export class DocumentoComponent implements OnInit {

  @Input() documento: Documento = {};

  //El slideSoloOpts permite que cuando tengo una imagen esta no se mueva con el slide
  slideSoloOpts = {
    allowSlideNext: false,
    allowSlidePrev: false
  };

  img1 = './assets/perro-1.jpg';
  img2 = './assets/perro-2.jpg';
  img3 = './assets/perro-2.jpg';

  constructor() { }

  ngOnInit() {}

}
