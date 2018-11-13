import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeePage } from '../homee/homee';
import { SignupPage } from '../signup/signup';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: String = '';
  password: String = '';
  // public enable: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Please Fill all fields',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  login(): void {
    if (this.username == '' || this.password == '') {
      this.presentAlert();
      return;
    }
    this.navCtrl.setRoot(HomeePage);
    // this.enable = false;
  }

  signUp(): void {
    this.navCtrl.setRoot(SignupPage);
    // this.enable = false;
  }

}
