import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ClaimPage } from '../pages/claim/claim';
import { CardPage } from '../pages/card/card';
import { HomeePage } from '../pages/homee/homee';
import { SettingPage } from '../pages/setting/setting';
import { SuccessPage } from '../pages/success/success';
import { ContactPage } from '../pages/contact/contact';
import { OtherPage } from '../pages/other/other';
import { CardanimePage } from '../pages/cardanime/cardanime';
import { TransdetailsPage } from '../pages/transdetails/transdetails';
import { EnquiriesPage } from '../pages/enquiries/enquiries';
import { CustomerinfoPage } from '../pages/customerinfo/customerinfo';
import { SinglepolicyrecordPage } from '../pages/singlepolicyrecord/singlepolicyrecord';
import { ListofcustomerpoliciesPage } from '../pages/listofcustomerpolicies/listofcustomerpolicies';
import { CustomerclaimsPage } from '../pages/customerclaims/customerclaims';
import { SpecclaiminfoPage } from '../pages/specclaiminfo/specclaiminfo';
import { ViewcertificatePage } from '../pages/viewcertificate/viewcertificate';
import { LoginPage } from '../pages/login/login';
import { ProductsPage } from '../pages/products/products';
import { ProductslistPage } from '../pages/productslist/productslist';
import { SignupPage } from '../pages/signup/signup';
import { PaymodePage } from '../pages/paymode/paymode';
import { ProtectionPage } from '../pages/protection/protection';
import { PolicyPage } from '../pages/policy/policy';
import { PaymentPage } from '../pages/payment/payment';
import { PartnersPage } from '../pages/partners/partners';
import { UpdatepolPage } from '../pages/updatepol/updatepol';
import { CertificatePage } from '../pages/certificate/certificate';
import { SignupPageModule } from '../pages/signup/signup.module';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { ProductsPageModule } from '../pages/products/products.module';
import { PolicyPageModule } from '../pages/policy/policy.module';
import { PaymentPageModule } from '../pages/payment/payment.module';
import { PaymodePageModule } from '../pages/paymode/paymode.module';
import { CardPageModule } from '../pages/card/card.module';
import { SuccessPageModule } from '../pages/success/success.module';
import { HomeePageModule } from '../pages/homee/homee.module';
import { ProductslistPageModule } from '../pages/productslist/productslist.module';
import { HttpClientModule } from '@angular/common/http';
import { AutogoPage } from '../pages/autogo/autogo';
import { AutogoPageModule } from '../pages/autogo/autogo.module';
import { AccountypePage } from '../pages/accountype/accountype';
import { AccountypePageModule } from '../pages/accountype/accountype.module';
import { DevicesModalPage } from '../pages/devices-modal/devices-modal';
import { Cardanime2Page } from '../pages/cardanime2/cardanime2';
import { Cardanime2PageModule } from '../pages/cardanime2/cardanime2.module';
import { CardanimePageModule } from '../pages/cardanime/cardanime.module';
import { TransdetailsPageModule } from '../pages/transdetails/transdetails.module';
import { DevicesModalPageModule } from '../pages/devices-modal/devices-modal.module';
import { HttpProvider } from '../providers/http/http';





@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    OtherPage,
    UpdatepolPage,
    ContactPage,
    EnquiriesPage,
    ProtectionPage,
    PartnersPage,
    ClaimPage,
    CertificatePage,
    CustomerclaimsPage,
    CustomerinfoPage,
    SinglepolicyrecordPage,
    ListofcustomerpoliciesPage,
    SpecclaiminfoPage,
    ViewcertificatePage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    AutogoPageModule,
    AccountypePageModule,
    SignupPageModule,
    HomePageModule,
    DevicesModalPageModule,
    LoginPageModule,
    ProductsPageModule,
    PolicyPageModule,
    PaymentPageModule,
    PaymodePageModule,
    SuccessPageModule,
    CardPageModule,
    HomeePageModule,
    ProductslistPageModule,
    HttpClientModule,
    TransdetailsPageModule,
    Cardanime2PageModule,
    CardanimePageModule,
    IonicModule.forRoot(MyApp, {tabsPlacement:'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    UpdatepolPage,
    HomePage,
    OtherPage,
    ClaimPage,
    HomeePage,
    CardPage,
    SuccessPage,
    ContactPage,
    EnquiriesPage,
    LoginPage,
    ProductsPage,
    SignupPage,
    PaymodePage,
    ProtectionPage,
    PolicyPage,
    PaymentPage,
    PartnersPage,
    ProductslistPage,
    CertificatePage,
    CustomerclaimsPage,
    CustomerinfoPage,
    SinglepolicyrecordPage,
    ListofcustomerpoliciesPage,
    SpecclaiminfoPage,
    SettingPage,
    ViewcertificatePage,
    AutogoPage,
    AccountypePage,
    DevicesModalPage,
    TransdetailsPage,
    Cardanime2Page,
    CardanimePage,
  ],

  providers: [
    StatusBar,

    SplashScreen,
    HTTP,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpProvider
  ]
})
export class AppModule { }
