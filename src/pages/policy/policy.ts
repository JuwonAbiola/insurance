import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@IonicPage()
@Component({
  selector: 'page-Policy',
  templateUrl: 'policy.html',
})
export class PolicyPage {
  clientname: String = '';
  polclass: String = '';
  clientcode: String = '';
  polagency: String = '';
  risktype: String = '';
  polstatus: String = '';
  issuedate: String = '';
  branch: String = '';
  enddate: String = '';
  dd_clo: String = '';
  effdate: String = '';

  constructor(public loadingCtrl: LoadingController, private http: HTTP, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  alertService = (response) => {

    return this.alertCtrl.create({
      title: 'Status',
      subTitle: response,
      buttons: ['Dismiss']
    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PolicyPage');
  }



  createNewPolicy() {

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



}
