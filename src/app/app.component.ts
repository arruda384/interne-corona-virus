import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login.page';





@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
})
export class MyApp implements OnInit, OnDestroy {

  rootPage: any;

  public appPages = [

    { title: 'Login', url: '/login', component: 'LoginPage', icon: '' }
    // {title: 'Profile',url: '/profile',  component: 'ProfilePage' ,con: ''    }
    // {title: 'Logout', url:'/home', component: '' ,con: ''    }
  ];

  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
    // private backgroundMode: BackgroundMode,
    // private nativeStorage: NativeStorage,
    // private router: Router,


  ) { }

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

  // initializeApp() {

  //this.nav.setRoot(LoginPage);
  // this.platform.ready().then(() => {
  //   // if(!this.backgroundMode.isActive()){
  //   //   this.configurarBGMode();
  //   // }
  //   this.statusBar.styleDefault();
  //   this.splashScreen.hide();
  //   // this.router.navigateByUrl('app');
  // });
  // }

  initializeApp() {

    this.platform.ready().then(() => {

      this.rootPage = (localStorage.getItem('matricula') != null) ? TabsPage : LoginPage;

    })


    // this.platform.ready().then(() => {

    //   //Here we will check if the user is already logged in
    //   //because we don't want to ask users to log in each time they open the app
    //   this.nativeStorage.getItem('google_user').then( data =>{
    //     alert("native");
    //     // user is previously logged and we have his data
    //     // we will let him access the app
    //     this.rootPage.setRoot(TabsPage);
    //     this.splashScreen.hide();
    //   }, error =>{

    //     // alert(error || JSON.stringify);
    //     this.router.navigate([LoginPage]);
    //     this.splashScreen.hide();
    //   });
    //   this.statusBar.styleDefault();
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
