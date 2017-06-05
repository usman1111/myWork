import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class Contact {

  public myPosition = { lat: 59.914255, lng: 10.748027};
  public zoomLevel = 15;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contact');
  }

  goToHome() {
    this.navCtrl.pop(HomePage);
  }
  
  
}
