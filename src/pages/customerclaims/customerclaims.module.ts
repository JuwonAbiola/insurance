import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerclaimsPage } from './customerclaims';

@NgModule({
  declarations: [
    CustomerclaimsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerclaimsPage),
  ],
})
export class CustomerclaimsPageModule {}
