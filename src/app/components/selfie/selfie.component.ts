import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.scss'],
})
export class SelfieComponent implements OnInit {
  swiperOts = {
    allowSlidePrev : false,
    allowSlideNext : false
  };

  tempImages = [];

  constructor( private navCtrl: NavController) { }

  ngOnInit() {}

}
