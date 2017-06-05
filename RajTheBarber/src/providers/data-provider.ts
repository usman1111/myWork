import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthenticationProvider } from './authentication-provider';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable()
export class DataProvider {

  reviews: FirebaseListObservable<any[]>;

  constructor(private auth: AuthenticationProvider, private afdb: AngularFireDatabase) {
    this.reviews = afdb.list("/reviews");
  }

  addNewReview(title: string, description: string, base64: string) {
    return new Promise((resolve, reject) => {
      
      let storageRef = firebase.storage().ref('images/' + 'image-' + new Date().getTime() + '.jpg');
      let storageUpload = storageRef.putString(base64, 'base64');

      storageUpload
        .then((snapshot) => {

          this.auth.state.subscribe(s => {
            this.reviews.push({
            title,
            description,
            username: s.email,
            imageUrl: snapshot.downloadURL,
            createdAt: firebase.database["ServerValue"]["TIMESTAMP"]
          }).then(() => {
            resolve();
          });
          });

        });

    });
  }

}
