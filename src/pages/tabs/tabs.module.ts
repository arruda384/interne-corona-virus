import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs';

const routes: Routes = [
  {
    // path: 'tabs/:funcionario',
    path: '',
    component: TabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,    
    RouterModule.forChild(routes)
  ],
  declarations: [
    TabsPage
  ],
  providers: [
    AuthService
  ]
})
export class TabsPageModule {}
