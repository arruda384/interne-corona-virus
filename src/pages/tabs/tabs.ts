import { Component, OnInit, OnChanges } from '@angular/core';

import { PrevencaoPage } from '../prevencao/prevencao';
import { DenunciaPage } from '../denuncia/denuncia.page';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import { ComitePage } from '../comite/comitePage';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage  implements OnInit {

  tab1Root = HomePage;
  tab2Root = PrevencaoPage;
  tab3Root = DenunciaPage;
  tab4Root = ComitePage;
  tabAtiva: number;

  funcionario: boolean;


  constructor(public auth: AuthService) {


  }
  ngOnInit(): void {
    
    this.tabAtiva = 1;
    if(localStorage.getItem("matricula") ==='0'){
      this.funcionario = false;

    }else{
      this.funcionario = true;
    }
    
  }

  }
