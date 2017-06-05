import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class Collection {

  title = "Collection 2016";
  images = ['col1.jpg', 'col2.jpg', 'col3.jpg', 'col4.jpg', 'col5.jpg', 'col6.jpg', 'col7.jpg', 'col8.jpg', 'col9.jpg', 'col10.jpg', 'col11.jpg']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Collection');
  }

  goToHome() {
    this.navCtrl.pop(HomePage);
  }
  
}
