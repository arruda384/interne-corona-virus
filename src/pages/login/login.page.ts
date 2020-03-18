import { Component } from '@angular/core';
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
    login: "",
    senha: ""

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
    }else if(id===2){
      this.exibirLoginAd = false;
      this.exibirLoginGogole = true;
    }
  }

    login(){
    //   this.auth.authenticate(this.creds)
    //   .subscribe(response => {
    //     console.log(response);
    //     this.auth.successfulLogin(response.headers.get('Authorization'));
    //     this.navCtrl.setRoot(TabsPage);
    //   },
    //   error =>{});
    // }
      this.navCtrl.setRoot(TabsPage);
     
  }
}

