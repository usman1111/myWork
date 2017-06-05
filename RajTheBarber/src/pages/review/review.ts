import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data-provider';

import { HomePage } from '../home/home';
import { NewReview } from '../new-review/new-review';

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class Review {

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Review');
  }
  
  goToHome() {
    this.navCtrl.pop(HomePage);
  }
  goToNewReview() {
    this.navCtrl.push(NewReview);
  }

}
