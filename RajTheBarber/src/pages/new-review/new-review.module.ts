import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewReview } from './new-review';

@NgModule({
  declarations: [
    NewReview,
  ],
  imports: [
    IonicPageModule.forChild(NewReview),
  ],
  exports: [
    NewReview
  ]
})
export class NewReviewModule {}
