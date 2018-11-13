import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
declare var PaypadFacade: any;
import { PaymodePage } from '../paymode/paymode';
import { AccountypePage } from '../accountype/accountype';

/**
 * Generated class for the DevicesModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devices-modal',
  templateUrl: 'devices-modal.html',
})
export class DevicesModalPage {
  dataDevices: Array<any> = [];
  deviceList: Array<any>
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public loading: LoadingController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesModalPage');
    // console.log(JSON.stringify(this.navParams.get('obj')));
    this.deviceList = this.navParams.get('obj');
  }



  bluetoothfunc(name, address) {

    console.log('bluetooth address', address);
    var that = this;
    console.log("Got here")
    var loader = this.loading.create({
      content: '<ion-spinner name="bubbles"></ion-spinner> <br />',
    });

    PaypadFacade.connection(address, function (response) {

      console.log('status ', response.status, 'address', address);

      var status = response.status;

      if (status) {

        if (status === "enabling_bluetooth") {
          loader = that.loading.create({
            content: '<ion-spinner name="bubbles"></ion-spinner> <br />Please wait enabling bluetooth...',
          });
          loader.present()
        }
        else if (status === "connecting") {
          loader.dismiss()
          console.log('connecting ', status);
          loader = that.loading.create({
            content: '<ion-spinner name="bubbles"></ion-spinner> <br /> Connecting to pinpad...',
          });

          loader.present()
        } else if (status === "connected") {
          // alert('Yaaaaaaaay');
          loader.dismiss()
          // alert(status)

          console.log("connected from devices page")

          localStorage.setItem("agree", "true");


          var x = "2030ES03";

          // alert('the terminal Id is ' + x);
          var selectedbank = "Esl";
          PaypadFacade.initialization(x, true, selectedbank, function (response) {
            console.log(response)
            var status = response.status;
            // alert('Initialization status '+ status);
            if (status) {
              if (status === "downloading_keys") {
                loader = that.loading.create({
                  content: '<ion-spinner name="bubbles"></ion-spinner> <br />Please downloading keys...',
                });
                loader.present()

              } else if (status === "loading_keys_to_pinpad") {
                loader.dismiss();
                alert('KEY DOWNLOAD SUCCESSFUL');
                localStorage.setItem("initialization", "true");
                // this.nativeStorage.setItem('initialization', { initializationValue: 'true' }).then((success) => {
              }
            }

            that.navCtrl.push(AccountypePage);

          }, function (response) {
            loader.dismiss();
            let alert = that.alertCtrl.create({
              title: 'Status',
              subTitle: 'Unable to Download Keys',
              buttons: ['Dismiss']
            });

            alert.present();

            localStorage.setItem("initialization", "false");


          });
        } else {
          loader.dismiss();
        }
      }

    }, function (response) {
      // alert("Error "+JSON.stringify(response));
      loader.dismiss();

      localStorage.setItem("initialization", "false");
      let alert = that.alertCtrl.create({
        title: 'Status',
        subTitle: 'Unable to Connect to Pinpad',
        buttons: ['Dismiss']
      });

      alert.present();

    });
  };

}
