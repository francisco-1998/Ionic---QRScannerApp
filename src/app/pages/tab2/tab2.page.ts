import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalServiceService } from '../../services/data-local-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
  }

  constructor(private barcodeScan: BarcodeScanner, private dataLocal: DataLocalServiceService) { }

  ionViewWillEnter() {
    this.scan();
  }

  scan() {
    this.barcodeScan.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if (!barcodeData.cancelled) {
        this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);

      }
    }).catch(err => {
      console.log('Error', err);
      this.dataLocal.guardarRegistro('QRCode', 'https://www.youtube.com');
    });
  }

}
