import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SinglepolicyrecordPage} from '../singlepolicyrecord/singlepolicyrecord';
import {ViewcertificatePage} from '../viewcertificate/viewcertificate';
import {CustomerclaimsPage} from '../customerclaims/customerclaims';

/**
 * Generated class for the ProtectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-protection',
  templateUrl: 'protection.html',
})
export class ProtectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProtectionPage');
  }
  pol(){
this.navCtrl.push(SinglepolicyrecordPage);
  }
  claim(){
this.navCtrl.push(CustomerclaimsPage);
  }
  cert(){
this.navCtrl.push(ViewcertificatePage);
  }

}
