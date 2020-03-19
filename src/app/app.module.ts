import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrevencaoPage } from '../pages/prevencao/prevencao';
import { DenunciaPage } from '../pages/denuncia/denuncia';
import { BasicPage } from '../pages/modal/page';
import { ModalContentPage } from '../pages/modal/ModalContentPage';
import { LoginPage } from '../pages/login/login.page';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';



@NgModule({
  declarations: [
    MyApp,
    PrevencaoPage,
    DenunciaPage,
    HomePage,
    TabsPage,
    BasicPage,
    ModalContentPage,
    LoginPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrevencaoPage,
    DenunciaPage,
    HomePage,
    TabsPage,
    BasicPage,
    ModalContentPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    AuthService,
    SplashScreen,
    BackgroundMode,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus
  ]
})
export class AppModule {}
