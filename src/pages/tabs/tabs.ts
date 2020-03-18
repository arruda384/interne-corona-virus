import { Component } from '@angular/core';

import { PrevencaoPage } from '../prevencao/prevencao';
import { DenunciaPage } from '../denuncia/denuncia';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login.page';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PrevencaoPage;
  tab3Root = DenunciaPage;
  tab4Root = LoginPage;

  constructor() {

  }
}
