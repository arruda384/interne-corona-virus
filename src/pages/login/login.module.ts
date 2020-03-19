import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/core';
import { LoginPage } from './login.page';
import { IonicModule } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

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
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginPage
  ],
  providers: [
    AuthService,
    GooglePlus
  ]
})
export class LoginPageModule {}
