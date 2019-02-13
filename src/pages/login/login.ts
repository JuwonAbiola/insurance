import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomeePage } from '../homee/homee';
import { SignupPage } from '../signup/signup';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

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
  MerchantID: String = '';
  MerchantPWD: String = '';
  // public enable: boolean;
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, private http: HTTP, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewCanEnter() { }

  login() {

    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

    let clientCode = localStorage.getItem('clientNo');

    let headers = {
      Authorization: "NkY4NTQ4MEQ5RThGMUM1RjlGOTlDM0M2QkJCMUJDQ0Y1QjI4MEVCNkUyQjQ1QzFFQzlGRDJFN0U5MDhERTdDNg==",
      'Content-Type': 'application/json'
    }

    let data = {
      'policy_number': 'HO/V/29/B0001235',
      'merchant_id': 'CUST_00004',
      'subsidiary': '2'
    }

    const URL = "https://apitest.custodianplc.com.ng/api/Agent/GetPolicyDetails";


    this.http.post(URL, data, headers).then((res: any) => {
      //console.log(res.data);
      // alert(JSON.stringify(res));
      let response = JSON.parse(res.data);
      //console.log(response.data);
      let polnum = response.result.polnum;
      let statusMessage = response.result.message;
      //this.alertService(statusMessage).present();
      alert(statusMessage);
      // alert(polnum);
      if (polnum) {
        localStorage.setItem('polnum', polnum)
      }

      loader.dismiss();
    }).catch((err: any) => {
      //alert(JSON.stringify(err));;
      loader.dismiss();
    });


  }




  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Please Fill all fields',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  // login(): void { 
  //   if (this.username == '' || this.password == '') {
  //     this.presentAlert();
  //     return;
  //   }
  //   this.navCtrl.setRoot(HomeePage);
  // this.enable = false;
  // login() {

  //   this.navCtrl.push(HomeePage);
  // }


  signUp(): void {
    this.navCtrl.setRoot(SignupPage);
    // this.enable = false;
  }

}
