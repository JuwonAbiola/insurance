import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymodePage } from './paymode';

@NgModule({
  declarations: [
    PaymodePage,
  ],
  imports: [
    IonicPageModule.forChild(PaymodePage),
  ],
})
export class PaymodePageModule {}
