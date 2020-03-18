import { Component, OnInit, OnChanges } from '@angular/core';

import { PrevencaoPage } from '../prevencao/prevencao';
import { DenunciaPage } from '../denuncia/denuncia';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login.page';
import { AuthService } from '../../services/auth.service';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage  implements OnChanges {

  tab1Root = HomePage;
  tab2Root = PrevencaoPage;
  tab3Root = DenunciaPage;
  tab4Root = LoginPage;
  funcionario: boolean;


  constructor(public auth: AuthService) {

   

  }

  ngOnChanges(){

    alert("teste");
      this.auth.loginFuncionario.subscribe(val =>  console.log(val) )

  }
}
