import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  slideOpts={
    allowSlidePrev:false,
    allowSlideNext:false,
  }

  constructor(private barcodeScan:BarcodeScanner) {}

  ionViewWillEnter(){
    this.scan();
  }

  scan(){
    this.barcodeScan.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
