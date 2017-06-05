import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as instafeed from 'instafeed.js';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
})
export class Instagram {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const userFeed = new instafeed({
        get: 'user',
        userId: '359580443',
        accessToken: '359580443.1677ed0.12c2b6da95864931b0458ba8ac111359'
    });
    userFeed.run();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Instagram');
  }

  goToHome() {
    this.navCtrl.pop(HomePage);
  }
  

}
