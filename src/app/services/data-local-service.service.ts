import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalServiceService {

  guardados: Registro[] = [];

  constructor(private storage: Storage, private navCtrl: NavController, private iab: InAppBrowser) {
    this.cargarStorage();
  }

  async cargarStorage() {
    this.guardados = (await this.storage.get('historial')) || [];
  }


  async guardarRegistro(format: string, text: string) {
    await this.cargarStorage();
    const nuevoRegistro = new Registro(format, text);
    this.guardados.unshift(nuevoRegistro);
    this.storage.set('historial', this.guardados);
    this.abrirRegistro(nuevoRegistro)
  }


  abrirRegistro(registro: Registro) {
    this.navCtrl.navigateForward('/tabs/tab3');
    switch (registro.type) {
      case 'Sitio web':
        this.iab.create(registro.texto, '_system');
        break;

      case 'Mapa':
          this.navCtrl.navigateForward(`tabs/mapa/${registro.texto}`)
        break;
    }
  }



}
