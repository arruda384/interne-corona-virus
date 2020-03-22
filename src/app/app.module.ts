import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController, NavControllerBase} from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrevencaoPage } from '../pages/prevencao/prevencao';
import { BasicPage } from '../pages/modal/page';
import { ModalContentPage } from '../pages/modal/ModalContentPage';
import { LoginPage } from '../pages/login/login.page';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus';
import { StorageService } from '../services/storage.service';
// import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptor';
import { RouteReuseStrategy } from '@angular/router';
import { DenunciaPage } from '../pages/denuncia/denuncia.page';
import { DenunciaService } from '../pages/denuncia/services/denuncia.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AppRoutingModule } from './app-routing.module';
import { ComitePage } from '../pages/comite/comite';





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
    ComitePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AppRoutingModule
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
    ComitePage

  ],
  providers: [
    StatusBar,
    AuthService,
    SplashScreen,
    BackgroundMode,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GooglePlus,
    AuthInterceptorProvider,
    AuthService,
    // ErrorInterceptorProvider,
    StorageService,
    DenunciaService,
    NativeStorage,

    

  ]
})
export class AppModule {}
