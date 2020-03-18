import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login.page';





@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
})
export class MyApp implements OnInit, OnDestroy  {

  rootPage:any = LoginPage;

  public appPages = [
   
    {title: 'Login', url: '/login',  component: 'LoginPage',  icon: ''   }
    // {title: 'Profile',url: '/profile',  component: 'ProfilePage' ,con: ''    }
   // {title: 'Logout', url:'/home', component: '' ,con: ''    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private backgroundMode: BackgroundMode,

  ) {}

  ngOnInit() {
    this.initializeApp();
    // EventEmitterService.get('iniciarRastreamento').subscribe(() => {
    //   this.backsrv.inicializarGpsTracking();
    // });
    // EventEmitterService.get('finalizarRastreamento').subscribe(() => {
    //   this.backsrv.stopBackgroundGeolocation();
    // });
  }

  ngOnDestroy() {
  }

  initializeApp() {

    //this.nav.setRoot(LoginPage);
    // this.platform.ready().then(() => {
    //   // if(!this.backgroundMode.isActive()){
    //   //   this.configurarBGMode();
    //   // }
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();
    //   // this.router.navigateByUrl('app');
    // });
  }

 

  // configurarBGMode(): void {
  //   this.backgroundMode.setDefaults({
  //     title: 'Interne - Corona Vírus',
  //     text: 'Toque para abrir',
  //     icon: 'drawable/favicon'
  //   });
  //   this.backgroundMode.enable();
  //   this.backgroundMode.on('activate').subscribe(() => {
  //     console.log('activate backgroundMode');
  //     this.backgroundMode.disableWebViewOptimizations();
  //     this.backgroundMode.wakeUp();
  //     //this.backgroundMode.unlock();
  //   });

  // } 

}
