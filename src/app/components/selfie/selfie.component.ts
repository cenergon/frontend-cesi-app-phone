import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {}

}
