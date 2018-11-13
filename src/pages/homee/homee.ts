import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { ProductsPage } from '../products/products';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpProvider } from '../../providers/http/http';
import {CustomerinfoPage} from '../customerinfo/customerinfo';
import { ProtectionPage} from '../protection/protection';

/**
 * Generated class for the HomeePage page.
 *
 * See https://ionicframework.com/docs/componens/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homee',
  templateUrl: 'homee.html',
})
export class HomeePage {
    
  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navCtrl: NavController,public http: HttpClient, public navParams: NavParams) {
  }
  alertService = (response) => {

    return this.alertCtrl.create({
      title: 'Status',
      subTitle: response,
      buttons: ['Dismiss']
    });

  }
  ionViewDidLoad() {
    console.log('Initial Homme Page load')
  }

  ionViewCanEnter() {
    //alert('Before Enter');

    const loader = this.loadingCtrl.create({
      content: "Please wait..Getting Customer Info",
    });

    const headers = new HttpHeaders({
      'Authorization': 'Bearer 39109f7df56e1051c399e685066bb852'
    });
    let customerID = localStorage.getItem('customerID');
    let customerInfoUrl = 'http://104.199.122.248/iesdemo_genbiz/gen_api/ies_connect.php?process=users&opmode=EBGetCustomerInfo&cltcode='+customerID;

    this.http.get(customerInfoUrl, { headers: headers }).subscribe((res: any) => {
      loader.dismiss()
      console.log(res);
      if (res.result) {
        localStorage.setItem('clientNo', res.result[0].clientno);
        localStorage.setItem('email', res.result[0].email);
        localStorage.setItem('gsm', res.result[0].gsm);
        localStorage.setItem('userID', res.result[0].userid);
        console.log('setting customer info success')
      }
    }, (err: any) => {
      loader.dismiss()
      //alert(JSON.stringify(err));
    })

  }

    press(){
      this.navCtrl.push(ProtectionPage);
    }

  profile(){
    this.navCtrl.push(CustomerinfoPage);
  }

    explore(){
    this.navCtrl.setRoot(ProductsPage);
  }

}
 