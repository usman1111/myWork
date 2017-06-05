import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data-provider';
import { Camera } from '@ionic-native/camera';

import { Review } from '../review/review';

@IonicPage()
@Component({
  selector: 'page-new-review',
  templateUrl: 'new-review.html',
})
export class NewReview {

  review = { title: '', description: ''}
  image : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider, private camera: Camera, public loadingCtrl: LoadingController) {
  }

  addReview() {
    console.log(this.image);
    this.data.addNewReview(this.review.title, this.review.description, this.image)
      .then(() => {
        if (this.navCtrl.canGoBack()) {
          this.loadingCtrl.create({
            duration: 3000,
            dismissOnPageChange: true
          }).present(this.navCtrl.pop());
          }
        });
  }

  openCamera() {

    const cameraOptions = {
      destinationType: 0
    };

    this.camera.getPicture(cameraOptions)
      .then((base64: string) => {
        this.image = base64;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewReview');
  }

  goToHome() {
    this.navCtrl.pop(Review);
  }
/*
  presentLoading() {
    this.loadingCtrl.create({
      
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  */

}