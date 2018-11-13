import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
// import { EmailComposer } from '@ionic-native/email-composer';
import PouchDB from 'pouchdb';

/**
 * Generated class for the TransdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transdetails',
  templateUrl: 'transdetails.html',
})
export class TransdetailsPage {
  private dbcustdetails;
  private remoteDbCustdetails;
  response: string;
  rrn: string;
  responsecode: string;
  cardholder: string;
  stan: string;
  accountype: string;
  tendertype: string;
  pan: string;
  expiry: string;
  status: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad TransdetailsPage');
    this.paymentResponse();

  }

  sendEmail() {

    var data = " TRANSACTION STATUS '\n' " + localStorage.getItem('transactionStatus') + 'RESPONSE \n ' + localStorage.getItem('response') + 'RRN ' + localStorage.getItem('rrn') + 'RESPONSE CODE ' + localStorage.getItem('responsecode') + 'CARD HOLDER ' + localStorage.getItem('cardholder') + 'STAN ' + localStorage.getItem('stan') + 'PAN \n ' + localStorage.getItem('pan') + 'TENDER TYPE \n ' + localStorage.getItem('tendertype');

    // this.emailComposer.isAvailable().then((available: boolean) =>{
    //   if(available) {
    //     //Now we know we can send
    //     let email = {
    //       to: 'tomiwatech@gmail.com',
    //       cc: 'tomiwatech@gmail.com',
    //       bcc: ['john@doe.com', 'jane@doe.com'],
    //       subject: 'EMAIL RECEIPT',
    //       body: data,
    //       isHtml: true
    //     };

    //     // Send a text message using default options
    //     this.emailComposer.open(email);
    //   }
    //  });
  }


  paymentResponse() {
    this.status = localStorage.getItem('transactionStatus');
    this.response = localStorage.getItem('response');
    this.rrn = localStorage.getItem('rrn');
    this.responsecode = localStorage.getItem('responsecode');
    this.cardholder = localStorage.getItem('cardholder');
    this.stan = localStorage.getItem('stan');
    this.accountype = localStorage.getItem('accounttype');
    this.tendertype = localStorage.getItem('tendertype');
    this.pan = localStorage.getItem('pan');
    this.expiry = localStorage.getItem('expiry');
  }


  home() {
    this.navCtrl.setRoot(HomePage);
  }


}