import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class Booking {

  orderSheetForm: FormGroup;

  myDate = new Date().toISOString();

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private formBuilder: FormBuilder, public loadingCtrl: LoadingController, public afdb: AngularFireDatabase) {
    this.buildForm();
  }

  private buildForm() {
    this.orderSheetForm = this.formBuilder.group({
      haircut: this.formBuilder.control(null),
      shapeUp: this.formBuilder.control(null),
      cleanShave: this.formBuilder.control(null),
      customerName: this.formBuilder.control(null),
      customerPhone: this.formBuilder.control(null),
      customerNote: this.formBuilder.control(null),
      customerDate: this.formBuilder.control(this.myDate),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Booking');
  }

  goToHome() {
    this.navCtrl.pop(HomePage);
  }  

  onSubmitForm() {
    console.log(this.orderSheetForm.value);
    this.afdb.list('/bookings').push(this.orderSheetForm.value);
    this.loadingCtrl.create({
      
      duration: 5000,
      dismissOnPageChange: true
    }).present(this.navCtrl.pop());
    
    let toast = this.toastCtrl.create({
    message: 'Booking completed! You will be contacted.',
    duration: 5000,
    position: 'top'
  });
    toast.present();
  }
  
}
