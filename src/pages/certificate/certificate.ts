import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the CertificatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-certificate',
  templateUrl: 'certificate.html',
})
export class CertificatePage {
  polnum:String = '';

  constructor( public loadingCtrl: LoadingController,private http: HttpClient, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CertificatePage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Please Fill all fields',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  submit(){
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

    let Polnum = localStorage.getItem('polnum');
   
  const header = new HttpHeaders({
    'Authorization': 'Bearer 39109f7df56e1051c399e685066bb852'
  });
  let data = {
    'polnum': Polnum
  }
  const URL = "http://104.199.122.248/iesdemo_genbiz/gen_api/ies_connect.php?process=users&opmode=EBGenerateCert"+Polnum;
  this.http.post(URL,data,{headers:header}).subscribe((res:any)=> {
    alert(JSON.stringify(res))
    loader.dismiss();
    
  },(err:any)=>{
    alert(JSON.stringify(err))
    loader.dismiss();
  })
}
}