import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { CardanimePage } from '../cardanime/cardanime';
import { TransdetailsPage } from '../transdetails/transdetails';
import { Cardanime2Page } from '../cardanime2/cardanime2';
import { HomePage } from '../home/home';
import { DevicesModalPage } from '../devices-modal/devices-modal';
import { HttpClient } from '@angular/common/http';
// import { EmailComposer } from '@ionic-native/email-composer';
import PouchDB from 'pouchdb';
declare var PaypadFacade: any;


/**
 * Generated class for the AccountypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountype',
  templateUrl: 'accountype.html',
})
export class AccountypePage {
  private db;
  private dbcustdetails;
  private remoteDB;
  private loader;
  constructor(private http: HttpClient, public modalCtrl: ModalController, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountypePage');
    this.db = new PouchDB('transactions');
    this.remoteDB = new PouchDB('https://db1-lon.paypad.com.ng/transactions', {

      auth: {
        username: 'couchdb',
        password: 'EHGGkyfXebV8yPte'
      }

    });
  }

  strFormat = function (value) {

    var v = value + "";
    if (v.length === 1) {
      v = "0" + value
    }

    return v;
  };

  openModal(data) {
    let myModal = this.modalCtrl.create(DevicesModalPage, { 'obj': data });
    myModal.present();
  }

  showPopup() {

    var success = function (message) {

      if (message) {

        var myPopup = null;
        var deviceList = message.devices;

        this.openModal(deviceList);


      } else {

        let alert = this.alertCtrl.create({
          title: 'Important',
          subTitle: 'Unable to complete operation, please try again later',
          buttons: ['Dismiss']
        });

        alert.present();
      }

    }

    var failure = (message) => {
      let alert = this.alertCtrl.create({
        title: 'Important',
        subTitle: 'Unable to complete operation, please try again later',
        buttons: ['Dismiss']
      });

      alert.present();
    };

    var that = this;

    var loader = this.loading.create({
      content: '<ion-spinner name="bubbles"></ion-spinner><br />',
    });

    PaypadFacade.connection("", function (response) {

      var status = response.status;

      // alert(JSON.stringify(response));

      if (status) {

        if (status === "enabling_bluetooth") {
          loader = that.loading.create({
            content: '<ion-spinner name="bubbles"></ion-spinner> <br />Please wait enabling bluetooth...',
          });
          loader.present()
        }
        else if (status == "connecting") {
          loader.dismiss();

          loader = that.loading.create({
            content: '<ion-spinner name="bubbles"></ion-spinner> <br /> Connecting to pinpad...',
          });

          loader.present()
        }
        else if (status === "connected" || status === "already_connected") {
          var x = "2030ES03";
          console.log("i am connected from payment page")
          loader.dismiss();
          var selectedbank = "Esl";
          // if already connected d""ownload keys and proceed with payment
          var initState = localStorage.getItem("initialization");

          if (initState === "false") {

            PaypadFacade.initialization(x, true, selectedbank, function (response) {
              // alert("Init Success: ",JSON.stringify(response));

              var status = response.status;

              if (status) {

                if (status === "downloading_keys") {
                  loader = that.loading.create({
                    content: '<ion-spinner name="bubbles"></ion-spinner> <br />Please wait downloading keys...',
                  });
                  loader.present()
                } else if (status === "loading_keys_to_pinpad") {
                  loader.dismiss();

                  localStorage.setItem("initialization", "true");

                }
              }

            }, function (response) {
              loader.dismiss();

              let alert = that.alertCtrl.create({
                title: 'Status',
                subTitle: 'Unable to Download Keys',
                buttons: ['Dismiss']
              });

              alert.present();


            });

          } else {

            // $rootScope.init_complete = 'yes';
            // $rootScope.$apply();
          }



          // alert('the terminal Id is ' + x)

        } else {

          loader.dismiss();
          // alert("This is else "+ status);
          PaypadFacade.list(success, failure);
        }
      } else {
        // PaypadFacade.list(success,failure);
      }

    }, function (response) {
      // alert("Error "+JSON.stringify(response));
      // PaypadFacade.list(success, failure);

      loader.dismiss();

      let alert = that.alertCtrl.create({
        title: 'Important',
        subTitle: 'Unable to connect to pinpad',
        buttons: ['Dismiss']
      });

      alert.present();
    });


  }

  payment(account) {

    this.showPopup();

    var that = this;
    console.log("Got here")
    var loader = this.loading.create({
      content: '<ion-spinner name="bubbles"></ion-spinner> <br />',
    });

    console.log(account);

    this.navCtrl.setRoot(CardanimePage);

    // this.done();

    //alert("About to pay "+$localStorage.myData);
    PaypadFacade.payment({ "amount": "50", "account": "" + account }, (data) => {
      console.log(data)
      if (data.responsecode === "00") {
        localStorage.setItem("transactionStatus", "Transaction Successful");
      }
      else {
        localStorage.setItem("transactionStatus", "" + data.responsemessage);
      };

      localStorage.setItem("pan", data.pan);
      localStorage.setItem("rrn", data.rrn);
      localStorage.setItem("responsecode", data.responsecode);
      localStorage.setItem("cardholder", data.cardholder);
      localStorage.setItem("stan", data.stan);
      localStorage.setItem("auth", data.auth);
      localStorage.setItem("response", data.responsemessage);
      localStorage.setItem("expiry", data.expiry);
      localStorage.setItem("sequenceno", data.sequenceno);
      localStorage.setItem("aid", data.aid);
      localStorage.setItem("accounttype", data.accounttype);
      localStorage.setItem("tendertype", data.tendertype);

      // data to be sent to ibeta

      var d = new Date();
      var tid = 'TT' + d.getFullYear() + this.strFormat(d.getMonth() + 1) + this.strFormat(d.getUTCDate()) + this.strFormat(d.getHours()) + this.strFormat(d.getMinutes()) + this.strFormat(d.getSeconds());
      var _id = new Date().toISOString();
      var Transaction = {
        _id: _id,
        'Pan': data.pan,
        'Time': d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
        'accountType': data.accounttype,
        'address': localStorage.getItem('address'),
        'aid': data.aid,
        'authCode': data.auth,
        'bankId': localStorage.getItem('bankId'),
        'businessName': localStorage.getItem('businessName'),
        'cardHolder': data.cardholder,
        'cardNo': data.pan,
        'cashAdvance': "00",
        'cashBack': "00",
        'createdOn': new Date(Date.now()),
        'Date': d.getUTCDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear(),
        'email': localStorage.getItem('email'),
        'expiry': data.expiry,
        'hide': false,
        'merchantId': localStorage.getItem('merchantId'),
        'phoneNumber': localStorage.getItem('phoneNumber'),
        'processingCode': "",
        'purchase': "50",
        'quantity': "01",
        'response': data.responsemessage,
        'responseCode': data.responsecode,
        'rrn': data.rrn,
        'sequenceNo': "",
        'serialNumber': "",
        'stan': data.stan,
        'sync': false,
        'tenderType': data.tendertype,
        'terminalId': localStorage.getItem('terminalId'),
        'total': "50",
        'transactionId': tid,
        'transactionType': "card",
        'unitPrice': "",
        'username': localStorage.getItem('username'),
        'Change': "card transaction",
        'Amount': "50",
        'mccCode': localStorage.getItem('mccCode'),
        'latitude': localStorage.getItem("latitude"),
        'longitude': localStorage.getItem("longitude"),
        'location': 'Nigeria'
      };


      if (data.operation === "payment") {

        if (data.status === "processing") {

          //alert(data.operation + " : "+data.status);

          loader = that.loading.create({
            content: '<ion-spinner name="bubbles"></ion-spinner> <br />Processing...',
          });
          loader.present()


        } else if (data.status === "enterPin") {
          this.navCtrl.setRoot(Cardanime2Page);
          loader.dismiss();
          // this.clearDone();

        } else {
                 
          alert('Email Has been Sent');
          
          this.db.post(Transaction, (err, result) => {
            if (!err) {
              console.log('Successfully posted a transaction!');
            } else { console.log('error dey o! ' + err) }
          });

          // Send a receipt to user
          // const sendemailurl = "https://ibeta.paypad.com.ng/paypad/webapi/v2/sendreceiptemail";
          // const email = localStorage.getItem('email');
          // var mynewdata = {
          //   "username": "paypad0001",
          //   "transactionId": tid,
          //   "email": email,
          //   "blindCopy": [email],
          //   "carbonCopy": []
          // };

          // console.log("Receipt data " + JSON.stringify(mynewdata));

          // Send Receipt to user
          // this.http.post(sendemailurl, mynewdata).subscribe(res => {
          //   console.log(res);
          // }, err => {
          //   console.log("Error occured");
          // })
    
           

            this.db.replicate.to(this.remoteDB, {
              batch_size: 3000, live: true, retry: true,
            }).on('complete', function () {
              // yay, we're done!
              console.log("replication done");
            }).on('error', function (err) {
              // boo, something went wrong!
              console.log(err);
            });

          this.navCtrl.setRoot(TransdetailsPage);


          loader.dismiss();
        }
      }

    }, (data) => {

      console.log(data);

      this.navCtrl.setRoot(HomePage);

    });
  };

}
