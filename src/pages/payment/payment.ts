import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { PaymodePage } from '../paymode/paymode';
declare var PaypadFacade: any;
import { AlertController } from 'ionic-angular';
import { DevicesModalPage } from '../devices-modal/devices-modal';
import { ViewController } from 'ionic-angular';
import { AccountypePage } from '../accountype/accountype';
// import { EmailComposer } from '@ionic-native/email-composer';
import PouchDB from 'pouchdb';
// import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  firstname: string;
  plan: number;
  surname: String;
  dob: String;
  private email;
  phone: String;
  address: any;
  vehiclemake: String;
  vehiclemodel: String;
  engine: String;
  chasis: String;
  yearmake: String;
  startdate: String;
  selectedbank: any;
  dataDevices: Array<any> = [];


  constructor(public modalCtrl: ModalController, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController) {
  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad PaymentPage');
    this.firstname = this.navParams.get('firstname');
    this.plan = this.navParams.get('plan');
    this.surname = this.navParams.get('surname');
    this.dob = this.navParams.get('dob');
    this.email = this.navParams.get('email');
    this.phone = this.navParams.get('phone');
    this.address = this.navParams.get('address');
    this.vehiclemake = this.navParams.get('vehiclemake');
    this.vehiclemodel = this.navParams.get('vehiclemodel');
    this.chasis = this.navParams.get('chasis');
    this.engine = this.navParams.get('engine');
    this.yearmake = this.navParams.get('yearmake');
    this.startdate = this.navParams.get('startdate');
  }

  payment(): void {

    this.agree();

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
    //       body: "Hello ",
    //       isHtml: true
    //     };
    //     // Send a text message using default options
    //     this.emailComposer.open(email);
    //   }
    // });

  }

  openModal(data) {
    let myModal = this.modalCtrl.create(DevicesModalPage, { 'obj': data });
    myModal.present();
  }

  agree() {

    var state = confirm("Please ensure your bluetooth is switched on and your device is paired..");

    var loader = this.loading.create({
      content: '<ion-spinner name="bubbles"></ion-spinner><br />',
    });

    if (state) {

      var success = (message) => {

        if (message) {

          var myPopup = null;
          var deviceList = message.devices;
          // alert(deviceList);

          var items = "<ul>";

          for (var i = 0; i < deviceList.length; i++) {
            var data = this.dataDevices[i] = deviceList[i];
            items += '<li style="font-size:13px;"><a style="display:block; padding:6px 0;" (click)="bluetoothfunc(\'' + i + '\')">' + data.name + '</a></li><br>';
          }
          items += "</ul>";

          this.openModal(deviceList);

        } else {

          let alert = this.alertCtrl.create({
            title: 'Important',
            subTitle: 'Unable to complete operation, please try again later',
            buttons: ['Dismiss']
          });

          alert.present();
        }
      };

      var failure = (message) => {
        let alert = this.alertCtrl.create({
          title: 'Important',
          subTitle: 'Unable to complete operation, please try again later',
          buttons: ['Dismiss']
        });

        alert.present();
      };

      var that = this;
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
            // var x = "2011225S";
            console.log("i am connected from payment page")
            loader.dismiss();

            // if already connected d""ownload keys and proceed with payment

            // alert('the terminal Id is ' + x)

            var initState = localStorage.getItem("initialization");

            console.log('initialization status ', initState)

            var x = "2030ES03";

            var selectedbank = "Esl";

            if (initState === "false") {

              PaypadFacade.reinitialization(x, true, selectedbank, function (response) {
                // alert("Init Success: ",JSON.stringify(response));

                var status = response.status;

                if (status) {

                  if (status === "downloading_keys") {
                    loader = that.loading.create({
                      content: '<ion-spinner name="bubbles"></ion-spinner> <br />Please wait... Downloading keys',
                    });
                    loader.present()
                  } else if (status === "loading_keys_to_pinpad") {
                    loader.dismiss();
                    localStorage.setItem("initialization", "true");
                    that.navCtrl.push(AccountypePage);

                  }
                }

              }, function (response) {
                loader.dismiss();

                // alert(JSON.stringify(response));

                let alert = that.alertCtrl.create({
                  title: 'Important',
                  subTitle: 'Unable to Download keys please try again later',
                  buttons: ['Dismiss']
                });

                alert.present();


              });

            } else if (initState == "true") {
              that.navCtrl.push(AccountypePage);
            }



            // var selectedbank = "Esl";
            // PaypadFacade.reinitialization(x, true, selectedbank, function (response) {
            //   console.log(response)
            //   var status = response.status;
            //   // alert('Initialization status '+ status);
            //   if (status) {
            //     if (status === "downloading_keys") {
            //       loader = that.loading.create({
            //         content: '<ion-spinner name="bubbles"></ion-spinner> <br />Please downloading keys...',
            //       });
            //       loader.present()

            //     } else if (status === "loading_keys_to_pinpad") {
            //       loader.dismiss();
            //       alert('KEY DOWNLOAD SUCCESSFUL');
            //       localStorage.setItem("initialization", "true");
            //       // this.nativeStorage.setItem('initialization', { initializationValue: 'true' }).then((success) => {
            //     }
            //   }
            // });

            // that.navCtrl.push(AccountypePage);


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
        PaypadFacade.list(success, failure);

        loader.dismiss();

        let alert = that.alertCtrl.create({
          title: 'Important',
          subTitle: 'Unable to connect to pinpad',
          buttons: ['Dismiss']
        });

        alert.present();
      });
    }
  } // end of agree


}
