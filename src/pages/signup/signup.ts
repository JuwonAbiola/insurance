import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProductsPage } from '../products/products';
import { HTTP } from '@ionic-native/http';
import { HomeePage } from '../homee/homee';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  surname: String = '';
  email: String = '';
  othername: String = '';
  phone: String = '';
  // public enable: boolean;
  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, private http: HTTP, private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signin = () => {
    this.navCtrl.push(LoginPage);
  }

  alertService = (response) => {

    return this.alertCtrl.create({
      title: 'Status',
      subTitle: response,
      buttons: ['Dismiss']
    });

  }

  clearData = () => {
    this.surname = '';
    this.othername = '';
    this.email = '';
    this.phone = '';
  }

  signUp = () => {

    if (this.surname == undefined || this.email == undefined || this.othername == undefined || this.phone == null) {

      let toast = this.toastCtrl.create({
        message: 'Please Fill all fields',
        duration: 3000,
        position: 'top'
      });

      toast.present();
      return;
    }

    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

    let headers = {
      Authorization: "Bearer 39109f7df56e1051c399e685066bb852"
    }

    let data = {
      csurname: this.surname,
      cothername: this.othername,
      cemail: this.email,
      cgsm: this.phone
    }

    const NEW_CUSTOMER_URL = "http://104.199.122.248/iesdemo_genbiz/gen_api/ies_connect.php?process=users&opmode=EBCCreateNEWCustomer"

    this.http.post(NEW_CUSTOMER_URL, data, headers).then((res: any) => {
      loader.dismiss();
      let response = JSON.parse(res.data);
      let statusMessage = response.result.message || response.result;
      this.alertService(statusMessage).present();
      this.clearData();
      if (response.result.customer_id) {
        localStorage.setItem('customerID', response.result.customer_id);
        this.navCtrl.setRoot(HomeePage);
      }

    }).catch((err: any) => {
      alert(JSON.stringify(err));
      loader.dismiss();
    });


  }



}
