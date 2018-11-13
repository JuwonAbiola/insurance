import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginposPage } from './loginpos';

@NgModule({
  declarations: [
    LoginposPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginposPage),
  ],
})
export class LoginposPageModule {}
