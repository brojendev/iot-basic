import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';

declare let WifiWizard: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  networks: any = [];

  constructor(
    public navCtrl: NavController,
    private hotspot: Hotspot,
    private platform: Platform
  ) {
    this.startScan();
  }

  startScan(){
    this.platform.ready().then(() => {
      let self = this;
      this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
        console.log('networks', networks);
        self.networks = networks;
      });
    });


  }

}
