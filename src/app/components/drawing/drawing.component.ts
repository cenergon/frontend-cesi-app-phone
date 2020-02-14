import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { style } from '@angular/animations';
import { File } from '@ionic-native/file/ngx';

const STORAGE_KEY = 'IMAGE_LIST';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss'],
})
export class DrawingComponent implements OnInit {

  @ViewChild(IonContent, {static: true}) content: IonContent; 
  @ViewChild('fixedContainer', {static: true}) fixedContainer: any; 
  @ViewChild('imageCanvas', {static: true}) canvas: any; 
  canvasElement: any;
  saveX: number;
  saveY: number;
  storedImages = [] ;
  selectedColor = '#E9967A';
  colors = ['#CD5C5C','#F08080','#FA8072','#E9967A','#00ff00'];

  swiperOts = {
    allowSlidePrev : false,
    allowSlideNext : false
  };

  constructor( 
    private storage: Storage, 
    private plt: Platform, 
    private file: File) { 
    this.storage.ready().then(()=>
    this.storage.get(STORAGE_KEY).then( data => {
      if (data !== undefined) {
        this.storedImages = data;
      }
    }));
  }

  selectColor(color) {
    this.selectedColor = color;
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;  
    }

  ionViewDidEnter(){
    let itemHeigth = this.fixedContainer.nativeElement.offsetHeight;
    let scroll = this.content.getScrollElement();

    // itemHeigth = Number.parseFloat(scroll.style.marginTop.replace("px","")) + itemHeigth;
    // scroll.style.marginTop = itemHeigth + 'px';
  }

  ionViewDidLoad(){
    this.canvasElement = this.canvas.negativeElement;
    this.canvasElement.whidth = this.plt.width() + '';
    this.canvasElement.height = 200;
  }

  startDrawing(ev){
    let canvasPosition = this.canvasElement.getBoundingClientRect();
    this.saveX = ev.touches[0].pageX - canvasPosition.x;
    this.saveY = ev.touches[0].pageY - canvasPosition.y;
  }

  moved(ev){

    var canvasPosition = this.canvasElement.getBoundingClientRect(); 
    let curretX = ev.touches[0].pageX - canvasPosition.x;
    let curretY = ev.touches[0].pageY - canvasPosition.y;    
    let ctx = this.canvasElement.getContext('2d');

    ctx.lineJoin = 'round';
    ctx.strokeStyle = this.selectedColor;
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(curretX, curretY);
    ctx.closePath();
    ctx.stroke();

    this.saveX = curretX;
    this.saveY = curretY;
  
  }

  saveCanvasImage(){
    var dataUrl = this.canvasElement.toDataURL();
    console.log(dataUrl);
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0 , 0, ctx.canvas.whidth, ctx.canvas.heigth);

    let name = new Date().getTime() + '.png';
    let path = this.file.dataDirectory;

    var data =  dataUrl.split(',')[1];
    let blob = this.b64toBlob(data,'image/png')
  }

  b64toBlob(b64Data, contentType = '', sliceSize = 512) {

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  storeImage(imageName){
    let saveObj = { img: imageName };
    this.storedImages.push(saveObj);
    this.storage.set(STORAGE_KEY, this.storedImages).then(() => {
       setTimeout(() => {
         this.content.scrollToBottom();
       },500);
    });
  }

  removeImage(index){
    let removed =  this.storedImages.splice(index,1);
    this.file.removeFile(this.file.dataDirectory, removed[0].img).then( resp =>{
      console.log("removed"); 
    }, err => {
      console.log("remove err");
    });
    this.storage.set(STORAGE_KEY, this.storedImages); 
  }

  clearImage(){
    const context = this.canvasElement.getContext('2d');
    context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

  getImagePath(imageName){
    let path = this.file.dataDirectory + imageName;
    let win: any = window; // hack compilator
     path = win.Ionic.WebView.convertFileSrc(path);
  }

  ngOnInit() {
    this.canvasElement = this.canvas.nativeElement;
  }

}
