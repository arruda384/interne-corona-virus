import { Component } from '@angular/core';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TabsPage } from '../tabs/tabs';
import { PrevencaoPage } from '../prevencao/prevencao';



@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html',
})
export class LoginPage {


  rootPage:any = TabsPage;

  creds : CredenciaisDTO = {
    login: "",
    senha: ""

  };

  exibirForm = false;
  exibirLoginGogole = false;
  exibirLoginAd = false;
  
  constructor(public navCtrl: NavController) 

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

    }

    if(id===2){
      this.exibirLoginAd = false;
      this.exibirLoginGogole = true;
    }
  }

    login(){
    //   this.auth.authenticate(this.creds)
    //   .subscribe(response => {
    //     this.auth.successfulLogin(response.headers.get('Authorization'));
    //     this.router.navigateByUrl('prevencao');
    //   },
    //   error =>{});
    // }
     this.navCtrl.setRoot(TabsPage);
  }

}
