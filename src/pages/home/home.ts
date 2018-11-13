import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomeePage } from '../homee/homee';
import { AlertController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { ClaimPage } from '../claim/claim';
import {MenuController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public enable: boolean;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController ,private alertCtrl: AlertController) {
    this.menuCtrl.enable(true, 'myMenu');
  }
  contact(){
    this.navCtrl.push(ContactPage);
  }
  getStarted() {
    this.navCtrl.push(LoginPage);
  }
  claim(){
    this.navCtrl.push(ClaimPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    // this.enable = true;
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Please Sign Up and Login',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  explore() {
    this.navCtrl.setRoot(HomeePage);
  }



}
