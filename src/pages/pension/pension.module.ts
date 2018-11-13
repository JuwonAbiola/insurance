import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PensionPage } from './pension';

@NgModule({
  declarations: [
    PensionPage,
  ],
  imports: [
    IonicPageModule.forChild(PensionPage),
  ],
})
export class PensionPageModule {}
