import { Component, Output, EventEmitter } from '@angular/core';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { TabsPage } from '../tabs/tabs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { JsonPipe } from '@angular/common';
import { LocalUser } from '../../models/local_user';
import { StorageService } from '../../services/storage.service';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html',
})
export class LoginPage {

  form: FormGroup;
  
  rootPage:any = TabsPage;

  creds : CredenciaisDTO = {
    matricula: 5020,
    password: '14041983',
    token: 'SU5URVJORSNDT1JPTkFfVklSVVMj'


  };

  
 

  exibirForm = false;
  exibirLoginGogole = false;
  exibirLoginAd = false;
  
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder,
    public loadingController: LoadingController, private nativeStorage: NativeStorage,
    private router : Router, private storage : StorageService,
    private googlePlus: GooglePlus, private alertCtrl: AlertController,
    private auth: AuthService) 
    {
      this.form = this.formBuilder.group({
        matricula: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
  
}
   
  exibirTipoLogin(id: number){
    console.log(id);  
    if(id===1){
      this.exibirLoginAd = true;
      this.exibirLoginGogole = false;
      this.auth.loginFuncionario.emit((true));     
    }else if(id===2){
      this.exibirLoginAd = false;
      this.exibirLoginGogole = true;
      this.auth.loginFuncionario.emit((true));
    }
  }

    login(){
      this.auth.authenticate(this.creds)
      .subscribe(response => {
        console.log(response);
        this.auth.successfulLogin(response)
         this.auth.loginFuncionario.emit((true));     
        this.navCtrl.setRoot(TabsPage);
      },
      error =>{


        alert(error.message);
        this.navCtrl.setRoot(LoginPage);

       console.log(error);

        // this.presentLoading(erro);

        // alert(error);


      });

      //this.navCtrl.setRoot(TabsPage);

    }

    async doGoogleLogin(){
      
      const loading = await this.loadingController.create({
        content: 'Please wait...'
      });
      this.presentLoading(loading);
    
      this.googlePlus.login({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': '509828308772-6qffjv23h023fj4bpb9kgo08jm0vdqvo.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      })
      .then(user =>{
        this.alertCtrl.create({
          message: "Teste"
        });
        loading.dismiss();          
        this.navCtrl.setRoot(TabsPage);
        
        this.nativeStorage.setItem('google_user', {
          
          name: user.displayName,
          email: user.email,
          picture: user.imageUrl
        })
        .then(() =>{
          this.navCtrl.setRoot(TabsPage);
        }
        , error =>{
          console.log(error);
        })
        loading.dismiss();
      }, err =>{
        console.log(err)
        loading.dismiss();
      });
  
    }
    async presentLoading(loading) {
      return await loading.present();
    }
  }

