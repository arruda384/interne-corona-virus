import { Component, OnInit, OnChanges } from '@angular/core';

import { PrevencaoPage } from '../prevencao/prevencao';
import { DenunciaPage } from '../denuncia/denuncia.page';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import { ComitePage } from '../comite/comite';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage  implements OnChanges {

  tab1Root = HomePage;
  tab2Root = PrevencaoPage;
  tab3Root = DenunciaPage;
  tab4Root = ComitePage;

  funcionario: boolean;


  constructor(public auth: AuthService) {

   

  }

  ngOnChanges(){

    alert("teste");
      this.auth.loginFuncionario.subscribe(val =>  console.log(val) )

  }
}
