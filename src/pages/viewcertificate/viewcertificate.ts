import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {CertificatePage} from '../certificate/certificate';
/**
 * Generated class for the ViewcertificatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewcertificate',
  templateUrl: 'viewcertificate.html',
})
export class ViewcertificatePage {
  result: any;
  constructor( public loadingCtrl: LoadingController,private http: HttpClient, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewcertificatePage');
  }

  cert(){
    this.navCtrl.push(CertificatePage);
  }

  submit(){
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    let Polnum = localStorage.getItem('polnum');

   let URL = 'http://104.199.122.248/iesdemo_genbiz/gen_api/ies_connect.php?process=users&opmode=EBViewCertificate&polnum='+Polnum;
   let header =  new HttpHeaders({
      'Authorization': 'Bearer 39109f7df56e1051c399e685066bb852'
    });
    this.http.get(URL,{headers:header}).subscribe((res:any)=> {
      alert(JSON.stringify(res))
      loader.dismiss();

    },(err:any)=>{
      alert(JSON.stringify(err))
      loader.dismiss();
    })
  }
}