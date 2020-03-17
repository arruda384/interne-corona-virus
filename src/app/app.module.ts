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
import { ViewPlayerPageModule } from '../pages/view-player/view-player.module';
import { BasicPage } from '../pages/modal/page';
import { ModalContentPage } from '../pages/modal/ModalContentPage';

@NgModule({
  declarations: [
    MyApp,
    PrevencaoPage,
    DenunciaPage,
    HomePage,
    TabsPage,
    BasicPage,
    ModalContentPage,
    
  ],
  imports: [
    ViewPlayerPageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
