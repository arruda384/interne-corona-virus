import { Component, Output, EventEmitter } from '@angular/core';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { NavController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html',
})
export class LoginPage {


  rootPage:any = TabsPage;

  creds : CredenciaisDTO = {
    login: "1234",
    senha: "123",
    funcionario: null

  };

  exibirForm = false;
  exibirLoginGogole = false;
  exibirLoginAd = false;
  
  constructor(public navCtrl: NavController,
    public loadingController: LoadingController,
    private auth: AuthService) 

    {
  
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
        this.auth.loginFuncionario.emit((true));     
        this.navCtrl.setRoot(TabsPage);
      // },
      // error =>{});
    }

    loginGoogle(){
      // this.creds.funcionario = false;     
      // this.auth.authenticate(this.creds)
      // .subscribe(response => {
      //   console.log(response);
      //   this.auth.successfulLogin(response.headers.get('Authorization'));
        this.auth.loginFuncionario.emit(false);    
        console.log(this.creds); 
        this.navCtrl.setRoot(TabsPage);
      // },
      // error =>{});
    }
     
  }

