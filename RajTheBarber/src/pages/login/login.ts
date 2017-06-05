import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AuthenticationProvider } from '../../providers/authentication-provider';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {

  public user = { email: "", password: "" };

  // Vi 'injecter' AngularFire-modulen inn i klassens constructor
  constructor(public navCtrl: NavController, private auth: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  // Registreringsfunksjonen. Hvis brukeren registreres og alt går bra, logger vi ut det til konsoll (i .then()).
    // Hvis registreringen ikke var suksess (f.eks. at emailen allerede er registrert), så vises det en alert (i catch())
    register() {
        this.auth.register(
            this.user.email,
            this.user.password
        )
    }
    login() {
        this.auth.login(
            this.user.email,
            this.user.password
        )
    }
    
    /*register() {
        this.af.auth.createUser({
            email: this.user.email,
            password: this.user.password
        })
            .then((user) => {
                // Denne funksjonen kjøres hvis brukeren registreres
                console.log(user);
            })
            .catch((error) => {
                // Denne funksjonen kjøres hvis brukeren ikke registreres (pga. en feil)
                alert(error);
            });
    }*/

    // Innloggingsfunksjonen. Hvis brukeren logges inn og alt går bra, logger vi ut det til konsoll (i .then()).
    // Hvis innloggingen ikke var suksess (f.eks. feil passord), så vises det en alert (i catch())
    /*login() {
        this.af.auth.login({
            email: this.user.email,
            password: this.user.password
        })
            .then((user) => {
                // Denne funksjonen kjøres hvis brukeren logges inn riktig
                console.log(user);
            })
            .catch((error) => {
                // Denne funksjonen kjøres hvis brukeren ikke logges inn (pga. en feil)
                alert(error);
            });
    }*/

  /*goToHomePage() {
    this.navCtrl.push(HomePage);
  }

  login() {

        if (this.user.username.length > 0) {
            this.navCtrl.setRoot(HomePage, {
                username: this.user.username
            });
        } else {
            alert("Du mangler brukernavn!");
        }
    }*/

}
