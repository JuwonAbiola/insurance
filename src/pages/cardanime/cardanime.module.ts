import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardanimePage } from './cardanime';

@NgModule({
  declarations: [
    CardanimePage,
  ],
  imports: [
    IonicPageModule.forChild(CardanimePage),
  ],
})
export class CardanimePageModule {}
