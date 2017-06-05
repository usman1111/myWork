import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Instagram } from './instagram';

@NgModule({
  declarations: [
    Instagram,
  ],
  imports: [
    IonicPageModule.forChild(Instagram),
  ],
  exports: [
    Instagram
  ]
})
export class InstagramModule {}
