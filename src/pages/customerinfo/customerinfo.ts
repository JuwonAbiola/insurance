import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-customerinfo',
  templateUrl: 'customerinfo.html',
})
export class CustomerinfoPage {
  clientNo: string;
  gsm: string;
  email: string;
  userID: string;

  constructor(public loadingCtrl: LoadingController, private http: HttpClient, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.clientNo = localStorage.getItem('clientNo');
    this.gsm = localStorage.getItem('gsm');
    this.email = localStorage.getItem('email');
    this.userID = localStorage.getItem('userID');
  }

}
