import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransdetailsPage } from './transdetails';

@NgModule({
  declarations: [
    TransdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TransdetailsPage),
  ],
})
export class TransdetailsPageModule {}
