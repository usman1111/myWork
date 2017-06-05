import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Booking } from './booking';

@NgModule({
  declarations: [
    Booking,
  ],
  imports: [
    IonicPageModule.forChild(Booking),
  ],
  exports: [
    Booking
  ]
})
export class BookingModule {}
