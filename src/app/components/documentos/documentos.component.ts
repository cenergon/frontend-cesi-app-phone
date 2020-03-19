import { Component, OnInit, Input } from '@angular/core';
import { Documento } from '../../interfaces/interfaces';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss'],
})
export class DocumentosComponent implements OnInit {

  @Input() documentos: Documento[] = [];

  constructor() { }

  ngOnInit() {}

}
