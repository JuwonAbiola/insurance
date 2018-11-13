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
      Authorization: "Bearer 39109f7df56e1051c399e685066bb852",
      'Content-Type': 'application/json'
    }

    let data = {
      'clientname': 'Samuel Ochiwu',
      'polclass': '1',
      'clientcode': clientCode,
      'polagency': 'BR-0691',
      'risktype': '022-01',
      'polstatus': '0',
      'issuedate': '2018-06-19',
      'branch': '0505',
      'enddate': '2019-07-19',
      'dd_clo': 'UKSS-420',
      'effdate': '2018-07-09'
    }

    const URL = "http://104.199.122.248/iesdemo_genbiz/gen_api/ies_connect.php?process=users&opmode=EBCreatePolicy";


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
