import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cam-selfie',
  templateUrl: './cam-selfie.page.html',
  styleUrls: ['./cam-selfie.page.scss'],
})
export class CamSelfiePage implements OnInit {

  titulo: string;
  icono: string;
  
  constructor() { }

  ngOnInit() {
  }

}
