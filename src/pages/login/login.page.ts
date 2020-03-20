import { Component, Output, EventEmitter } from '@angular/core';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { NavController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { TabsPage } from '../tabs/tabs';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html',
})
export class LoginPage {

  form: FormGroup;
  
  loginDetails: any;
  rootPage:any = TabsPage;

  creds : CredenciaisDTO = {
    matricula: "teste123 ",
    password: "1234",
    funcionario: null

  };

  exibirForm = false;
  exibirLoginGogole = false;
  exibirLoginAd = false;
  
  constructor(public navCtrl: NavController, private googlePlus: GooglePlus, private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    private auth: AuthService) 
    {
      this.form = this.formBuilder.group({
        matricula: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
  
}
 

  ionViewWillEnter() {
  }
 
  ionViewDidLeave() {
  }


  loginAd(){   
  }

  
  exibirTipoLogin(id: number){
    console.log(id);  
    if(id===1){
      this.exibirLoginAd = true;
      this.exibirLoginGogole = false;
      this.creds.funcionario = true; 
      this.auth.loginFuncionario.emit((true));     
    }else if(id===2){
      this.exibirLoginAd = false;
      this.exibirLoginGogole = true;
      this.creds.funcionario = false; 
      this.auth.loginFuncionario.emit((true));
    }
  }

    login(){
      // this.creds.funcionario = true;     
      // this.auth.authenticate(this.creds)
      // .subscribe(response => {
      //   console.log(response);
      //   this.auth.successfulLogin(response.headers.get('Authorization'));
      //   this.auth.loginFuncionario.emit((true));     
      //   this.navCtrl.setRoot(TabsPage);
      // },
      // error =>{});

      this.navCtrl.setRoot(TabsPage);

    }

   loginGoogle()
      {
       
        this.googlePlus.login({}).then((res)=>{
          this.loginDetails = res;
          console.log(res);

        }, (err)=>{
          console.log(err);
        })
      }

    logoutGoogle()
    {
      this.googlePlus.logout();

    }
     
  }

