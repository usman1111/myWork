import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs'

@Injectable()
export class AuthenticationProvider {
  public state: any;

  constructor(private auf: AngularFireAuth) {
    this.state = this.auf.authState;
  }

  logout() {
    this.auf.auth.signOut();
  }

  register(email, password) {
    this.auf.auth.createUserWithEmailAndPassword(
      email,
      password
    )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  }

  login(email, password) {
    this.auf.auth.signInWithEmailAndPassword(
      email,
      password
    )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  }

}
