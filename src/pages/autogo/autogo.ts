import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AutogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autogo',
  templateUrl: 'autogo.html',
})
export class AutogoPage {
  plan: String;
  firstname: String = '';
  surname: String = '';
  dob: String = '';
  phone: number;
  email: String = '';
  address: String = '';
  vehiclemake: String = '';
  vehiclemodel: String = '';
  engine: String = '';
  chasis: String = '';
  reg: String = '';
  yearmake: String = '';
  startdate: String = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutogoPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Please Fill all fields',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  submitdata(){
    if (this.firstname == '' || this.surname == '' || this.email == '' || this.dob == '' || this.phone == null || this.address == '' || this.vehiclemake == '' || this.vehiclemodel == '' || this.engine == '' || this.chasis == '' || this.reg == '' || this.startdate == '' || this.yearmake == '') {
      this.presentAlert();
      return;
    }

    var payload = {
      'firstname': this.firstname,
      'surname': this.surname,
      'dob': this.dob,
      'phone': this.phone,
      'address': this.address,
      'vehiclemake': this.vehiclemake,
      'vehiclemodel': this.vehiclemodel,
      'engine': this.engine,
      'chasis': this.chasis,
      'email': this.email,
      'reg': this.reg,
      'yearmake': this.yearmake,
      'startdate': this.startdate,
      'plan': this.plan
    }
    
    this.navCtrl.push(PaymentPage, payload);
  }

}
