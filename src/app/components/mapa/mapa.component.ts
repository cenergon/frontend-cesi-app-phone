import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;

  //Referencia a mapa
  @ViewChild('mapa', {static: true}) mapa: ElementRef; 


  constructor() { }

  ngOnInit() {
    console.log(this.coords)

    const latlng = this.coords.split(',');
    const lat = Number(latlng[0]); 
    const lng = Number(latlng[1]); 


    mapboxgl.accessToken = 'pk.eyJ1IjoiY2VuZXJnb24iLCJhIjoiY2sxNG50MzF3MG1hMTNwdGtyY3A5MndmaCJ9.aEYmriTt0i7zYEV6nQVeTA';
    const map = new mapboxgl.Map({
    //container: 'map',
    container: this.mapa.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ lng, lat ],
    zoom: 15
    });

    //creo marcador
    const marker = new mapboxgl.Marker()
    .setLngLat( [ lng, lat ] )
    .addTo( map );
    }

}
