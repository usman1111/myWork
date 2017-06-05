import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// Import all pages in the app
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { AboutMe } from '../pages/about-me/about-me';
import { Booking } from '../pages/booking/booking';
import { Collection } from '../pages/collection/collection';
import { Contact } from '../pages/contact/contact';
import { Instagram } from '../pages/instagram/instagram';
import { NewReview } from '../pages/new-review/new-review';
import { Review } from '../pages/review/review';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataProvider } from '../providers/data-provider';
import { AuthenticationProvider } from '../providers/authentication-provider';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Camera } from '@ionic-native/camera';
import { Time } from '../pipes/time';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environments';

// npm install promise-polyfill --save-exact (Oppdatering til Firebase)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Review,
    Instagram,
    Contact,
    Collection,
    Booking,
    AboutMe,
    NewReview,
    Time,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Vi initialiserer prosjektet vårt med og mot Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // Vi initialiserer IonicImageViewerModule for slide
    IonicImageViewerModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyByePR4wAJ4oiGBby7GU3CfSW3W_hdn1oY'}),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Review,
    Instagram,
    Contact,
    Collection,
    Booking,
    AboutMe,
    NewReview
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationProvider,
    DataProvider,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
