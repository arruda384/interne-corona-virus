import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/core';
import { LoginPage } from './login.page';
import { IonicModule } from 'ionic-angular';
import { Routes, RouterModule } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,    
    RouterModule.forChild(routes),
    
  ],
  declarations: [
    LoginPage
  ],
  providers: [
    GooglePlus,
  ]
})
export class LoginPageModule {}
