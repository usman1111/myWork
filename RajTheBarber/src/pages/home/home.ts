import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication-provider';
import { AngularFireAuth } from 'angularfire2/auth';


import { AboutMe } from '../about-me/about-me';
import { Booking } from '../booking/booking';
import { Collection } from '../collection/collection';
import { Contact } from '../contact/contact';
import { Instagram } from '../instagram/instagram';
import { Review } from '../review/review';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username :string = "";

  constructor(private auth: AuthenticationProvider, public navCtrl: NavController, private navParams: NavParams, private auf: AngularFireAuth ) {
    
  }

  logout() {
    this.auf.auth.signOut();
  }

  goToAboutMe() {
    this.navCtrl.push(AboutMe);
  }
  goToBooking() {
    this.navCtrl.push(Booking);
  }
  goToCollection() {
    this.navCtrl.push(Collection);
  }
  goToContact() {
    this.navCtrl.push(Contact);
  }
  goToInstagram() {
    this.navCtrl.push(Instagram);
  }
  goToReview() {
    this.navCtrl.push(Review);
  }

}
