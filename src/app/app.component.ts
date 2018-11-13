import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { OtherPage } from '../pages/other/other';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductslistPage } from '../pages/productslist/productslist';
import { PartnersPage } from '../pages/partners/partners';
import { FaqPage } from '../pages/faq/faq';
import { EnquiriesPage } from '../pages/enquiries/enquiries';
// import { LoginPage } from '../pages/login/login';
// import { SignupPage } from '../pages/signup/signup';
// import { AccountypePage } from '../pages/accountype/accountype';
// import { PaymodePage } from '../pages/paymode/paymode';
// import { CardanimePage } from '../pages/cardanime/cardanime';
// import { TransdetailsPage } from '../pages/transdetails/transdetails';
// import { ProtectionPage } from '../pages/protection/protection';
import { PolicyPage } from '../pages/policy/policy';
import { PaymentPage } from '../pages/payment/payment';
import { HomeePage } from '../pages/homee/homee';
import { SettingPage } from '../pages/setting/setting';
import { AutogoPage } from '../pages/autogo/autogo';
import { HealthPage } from '../pages/health/health';
import { PensionPage } from '../pages/pension/pension';
import { InvestmentPage } from '../pages/investment/investment';

// import { ActivationPage } from '../pages/activation/activation';
// import { AfterkeyexchangePage } from '../pages/afterkeyexchange/afterkeyexchange';
// import { CreateposaccountPage } from '../pages/createposaccount/createposaccount';
// import { LoginposPage } from '../pages/loginpos/loginpos';
// import { TermsandconditionsPage } from '../pages/termsandconditions/termsandconditions';
// import { ChangepospinPage } from '../pages/changepospin/changepospin';
// import { FetchposPage } from '../pages/fetchpos/fetchpos';

@Component({
  templateUrl: 'app.html'

})
export class MyApp {
   rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;

 // rootPage: any = PolicyPage;
  pages: Array<{ name: string, component: any, icon: string }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { name: 'Home', component: HomeePage, icon: "home" },
      { name: 'Setting', component: SettingPage, icon: "cog" },
      { name: 'Logout', component: HomePage, icon: "log-out" },
    ];
  }




  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so te platorm is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // StatusBar.styleDefault();
      // Splashscreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

