import { Component, OnInit, ViewChild, ApplicationRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from '../../validators/age';
import { UsernameValidator } from '../../validators/usernames';
import { Platform } from '@ionic/angular';

import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';



@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.page.html',
  styleUrls: ['./wizard.page.scss'],
})
export class WizardPage  {

  @ViewChild('signupSlider', {static:false} ) signupSlider;

	public slideOneForm: FormGroup;
	public slideTwoForm: FormGroup;
  public submitAttempt: boolean = false;

  constructor(
     public formBuilder: FormBuilder,
     private platform: Platform,
     // tslint:disable-next-line: deprecation
     private transfer: FileTransfer,
     private fileOpener: FileOpener,
     private file: File,
     private document: DocumentViewer
    ) {
 

    this.slideOneForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      age: ['', AgeValidator.isValid]
  });

  this.slideTwoForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
      privacy: ['', Validators.required],
      bio: ['']
  });

  }

    next(){
        this.signupSlider.slideNext();
    }

    prev(){
        this.signupSlider.slidePrev();
    }

    save(){
      this.submitAttempt = true;

      if(!this.slideOneForm.valid){
          this.signupSlider.slideTo(0);
      } 
      else if(!this.slideTwoForm.valid){
          this.signupSlider.slideTo(1);
      }
      else {
          console.log("success!")
          console.log(this.slideOneForm.value);
          console.log(this.slideTwoForm.value);
      }
    }

    openLocalPdf(){

          if (this.platform.is('android')) {
          const self = this;
          const targetFile = self.file.dataDirectory + '/' + 'contrato.pdf';
            
          self.file.copyFile(self.file.applicationDirectory + 'www/assets/', 'contrato.pdf', 
                              self.file.dataDirectory, 'contrato.pdf').
                    then(function (res) {
              self.fileOpener.open(targetFile, 'application/pdf');
              // self.fileOpener.showOpenWithDialog(targetFile, 'application/pdf');
              
          });
          }else{
          const options: DocumentViewerOptions = {
            title: 'Contrato '
          }
          this.document.viewDocument('file:///android_asset/www/assets/contrato.pdf', 'application/pdf',options);
          }

    }

    downloadLocaPdf(){

      const fileTransfer: FileTransferObject = this.transfer.create();


      const url = 'file:///android_asset/www/assets/contrato.pdf';
      fileTransfer.download(url, this.file.dataDirectory + 'contrato.pdf').then((entry) => {
        console.log('download complete: ' + entry.toURL());
      }, (error) => {
        // handle error
        console.log('download ERROR: ');
      });

      // let dowloadUrl = "file:///android_asset/www/assets/contrato.pdf";
      // let path = this.file.dataDirectory;
      // const transfer = this.ft.create();

      // transfer.download(dowloadUrl,`${path}myfile.pdf`).then(entry =>{
      //   let url = entry.toURL();

      //   if (this.platform.is('ios')) {
      //     this.document.viewDocument(url,'application/pdf',{});
      //   } else {
      //     this.fileOpener.open(url,'application/pdf');
      //   }
      // })
    }


}
