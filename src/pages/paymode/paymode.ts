import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardPage } from '../card/card';
import { SuccessPage } from "../success/success";

/**
 * Generated class for the PaymodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymode',
  templateUrl: 'paymode.html',
})
export class PaymodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymodePage');
  }

  card() {
    this.navCtrl.push(SuccessPage);
  }


}
