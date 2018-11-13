import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

/*******
 ****** Generated class for the ClaimPage page.
 *****
 **** See https://ionicframework.com/docs/components/#navigation for more info on
 *** Ionic pages and navigation.
 **
 *
 **
 ***
 ****
 *****
 ******
 *******/

@IonicPage()
@Component({
  selector: 'page-claim',
  templateUrl: 'claim.html',
})
export class ClaimPage {
  polnum: String = '';
  claimant: String = '';
  narr: String = '';
  clmdate: String = '';
  lossdate: String ='';
  dd_lhour: String = '';
  dd_lminute: String = '';
  dd_insprdstr: String = '';
  dd_insprdend: String = '';

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private http: HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Please Fill all fields',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  submitdata(){
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
   /* if (this.polnum == '' || this.claimant == '' || this.narr == '' || this.clmdate == '' || this.lossdate == '' || this.dd_lhour == '' || this.dd_lminute == '' || this.dd_insprdstr == '' || this.dd_insprdend == '' ) {
      this.presentAlert();
      return;
    }*/

    let Polnum = localStorage.getItem('polnum');

    let headers = {
      Authorization: "Bearer 39109f7df56e1051c399e685066bb852"
    }

    var data = {
      'polnum': Polnum,
      'claimant': this.claimant,
      'narr': this.narr,
      'clmdate': this.clmdate,
      'lossdate': this.lossdate,
      'dd_lhour': this.dd_lhour,
      'dd_lminute': this.dd_lminute,
      'dd_insprdstr': this.dd_insprdstr,
      'dd_insprdend': this.dd_insprdend
    }
    const URL ="http://104.199.122.248/iesdemo_genbiz/gen_api/ies_connect.php?process=users&opmode=EBCreateClaim"

   
    this.http.post(URL, data, headers).then((res: any) => {
      let response = JSON.parse(res.data);
      alert(response);
      alert(response.result.message);
      /*alert(res.data);
      alert(res.data.result);
      alert(res.data.result.message);*/
      let claim = response.result.claimNumber;
      let statusMessage = response.result.message;
      alert(statusMessage);
      alert(claim);
      if (claim) {
        localStorage.setItem('claim', claim)
      }

      loader.dismiss();
    }).catch((err: any) => {
      loader.dismiss();
    });


  }



}
