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
import { STORAGE_KEYS } from '../../config/storage_keys.config';

// import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html',
})
export class LoginPage {

  form: FormGroup;
  creds: CredenciaisDTO;
  rootPage: any = TabsPage;

  checkBoxLoginInterne: boolean = true;
  checkBoxLoginGoogle: boolean = true;

  // creds: CredenciaisDTO = {
  //   matricula: 5020,
  //   password: '14041983',
  //   token: 'SU5URVJORSNDT1JPTkFfVklSVVMj'
  // };

  exibirForm = false;
  exibirLoginGogole = false;
  exibirLoginAd = false;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder,
    public loadingController: LoadingController, private nativeStorage: NativeStorage,
    private router: Router, private storage: StorageService,
    private googlePlus: GooglePlus, private alertCtrl: AlertController,
    private auth: AuthService) {

    this.form = this.formBuilder.group({
      matricula: ['5020', [Validators.required]],
      password: ['14041983', [Validators.required]],
    });

  }

  exibirTipoLogin(id: number) {

    this.checkBoxLoginInterne = true;
    this.checkBoxLoginGoogle = false;

    if (id === 1) {
      this.exibirLoginAd = true;
      this.exibirLoginGogole = false;
      this.auth.loginFuncionario.emit((true));
    } else if (id === 2) {
      this.exibirLoginAd = false;
      this.exibirLoginGogole = true;
      this.auth.loginFuncionario.emit((true));
    }
  }

  setCred(form) {
    this.creds = {
      matricula: form.matricula,
      password: form.password,
      token: 'SU5URVJORSNDT1JPTkFfVklSVVMj'
    };
  }

  async login() {
    // this.navCtrl.setRoot(TabsPage); //apagar
    const loading = await this.loadingController.create({
      content: 'Carregando...',
      duration: 3000
    });

    this.setCred(this.form.value);
    this.presentLoading(loading);

    localStorage.setItem('dat_nascimento', this.formatDat(this.form.value.password));

    console.log(this.creds)
    this.auth.authenticate(this.creds)
      .subscribe(response => {

        console.log(response);
        if (response.tipo === "ERROR") {

          var loading = this.loadingController.create({
            content: response.message,
            duration: 6000
          });
          this.presentLoading(loading);

        } else if (response.tipo === "INFO") {
          this.auth.successfulLogin(response, 1)
          this.navCtrl.setRoot(TabsPage);

        }
      },
        error => {
          alert(error.message);
          this.navCtrl.setRoot(LoginPage);
          console.log(error);
        });
  }

  calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  formatDatInverse(dat) {
    const day = dat.slice(0, 2);
    const month = dat.slice(2, 4);
    const year = dat.slice(4, 8);
    const result = year + "-" + month + "-" + day;
    return result;
  }

  formatDat(dat) {
    const day = dat.slice(0, 2);
    const month = dat.slice(2, 4);
    const year = dat.slice(4, 8);
    return day + "/" + month + "/" + year;
  }

  async doGoogleLogin() {

    this.checkBoxLoginInterne = false;
    this.checkBoxLoginGoogle = true;

    const loading = await this.loadingController.create({
      content: 'Please wait...'
    });

    this.presentLoading(loading);

    this.googlePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '509828308772-6qffjv23h023fj4bpb9kgo08jm0vdqvo.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    })
      .then(user => {

        localStorage.setItem(STORAGE_KEYS.idade, (null));
        localStorage.setItem(STORAGE_KEYS.matricula, ('0'));
        localStorage.setItem(STORAGE_KEYS.nome, (user.displayName));
        localStorage.setItem(STORAGE_KEYS.sexo, (null));
        localStorage.setItem(STORAGE_KEYS.telefone, (null));
        localStorage.setItem(STORAGE_KEYS.email, (user.email));
        loading.dismiss();
        this.navCtrl.setRoot(TabsPage);

      }, err => {
        console.log(err)
        loading.dismiss();
      }
      );

  }

  async presentLoading(loading) {
    return await loading.present();
  }
  get f() { return this.form.controls; }
}