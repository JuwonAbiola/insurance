import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PolicyPage } from '../policy/policy';
import { UpdatepolPage } from '../updatepol/updatepol';
import { CertificatePage } from '../certificate/certificate';
import { CustomerclaimsPage } from '../customerclaims/customerclaims';
import { CustomerinfoPage } from '../customerinfo/customerinfo';
import { SinglepolicyrecordPage } from '../singlepolicyrecord/singlepolicyrecord';
import { ListofcustomerpoliciesPage } from '../listofcustomerpolicies/listofcustomerpolicies';
import { SpecclaiminfoPage } from '../specclaiminfo/specclaiminfo';
import { ViewcertificatePage } from '../viewcertificate/viewcertificate';
import { AutogoPage } from '../autogo/autogo';


/**
 * Generated class for the ProductslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more ifo on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productslist',
  templateUrl: 'productslist.html',
})
export class ProductslistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductslistPage');
  }

  protection() {
    this.navCtrl.push(PolicyPage)
  }
  update() {
    this.navCtrl.push(UpdatepolPage)
  }
  cert() {
    this.navCtrl.push(CertificatePage)
  }
  claims() {
    this.navCtrl.push(CustomerclaimsPage)
  }
  info() {
    this.navCtrl.push(CustomerinfoPage)
  }

  record() {
    this.navCtrl.push(SinglepolicyrecordPage)
  }
  poli() {
    this.navCtrl.push(ListofcustomerpoliciesPage)
  }
  clai() {
    this.navCtrl.push(SpecclaiminfoPage)
  }
  view() {
    this.navCtrl.push(ViewcertificatePage)
  }

  testPayment() {
    this.navCtrl.push(AutogoPage);
  }
}
