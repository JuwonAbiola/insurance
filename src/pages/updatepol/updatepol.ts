import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the UpdatepolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updatepol',
  templateUrl: 'updatepol.html',
})
export class UpdatepolPage {
    polnum: String;
    registration_number: String = '';
    value: String = '';
    premium: String = '';
    chassis: String = '';
    engine_number: String = '';
    vehicle_type: String = '';
    colour: String = '';
    vehicle_model: String = '';
    vehicle_year: String = '';
    insurance_category: String = '';
    
    constructor( public loadingCtrl: LoadingController,private http: HttpClient, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatepolPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Please Fill all fields',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  submitdata(){
    if (this.polnum == '' || this.registration_number == '' || this.value == '' || this.premium == '' || this.chassis == '' || this.engine_number == '' || this.vehicle_type == '' || this.colour == '' || this.vehicle_model == '' || this.vehicle_year == '' || this.insurance_category == '') {
      this.presentAlert();
      return;
    }
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
  const header = new HttpHeaders({
    'Authorization': 'Bearer 39109f7df56e1051c399e685066bb852'
  });
    var data = {
      'polnum': this.polnum,
      'registration_number': this.registration_number,
      'value': this.value,
      'premium': this.premium,
      'chassis': this.chassis,
      'engine_number': this.engine_number,
      'vehicle_type': this.vehicle_type,
      'colour': this.colour,
      'vehicle_year': this.vehicle_year,
      'insurance_category': this.insurance_category
    }
    const URL = "http://104.199.122.248/iesdemo_genbiz/gen_api/ies_connect.php?process=users&opmode=EBUpdatePolicy"

    this.http.post(URL,data,{headers:header}).subscribe((res:any)=> {
      alert(JSON.stringify(res))
      loader.dismiss();
      
    },(err:any)=>{
      alert(JSON.stringify(err))
      loader.dismiss();
    })
  }
  }