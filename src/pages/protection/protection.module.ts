import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProtectionPage } from './protection';

@NgModule({
  declarations: [
    ProtectionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProtectionPage),
  ],
})
export class ProtectionPageModule {}
