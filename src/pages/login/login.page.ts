import { Component } from '@angular/core';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { NavController } from 'ionic-angular';
// import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html',
})
export class LoginPage {

  creds : CredenciaisDTO = {
    email: "",
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

    // login(){
    //   this.auth.authenticate(this.creds)
    //   .subscribe(response => {
    //     // this.auth.successfulLogin(response.headers.get('Authorization'));
    //     // this.router.navigateByUrl('prevencao');
    //   },
    //   error =>{});
    // }

  }

 



}
