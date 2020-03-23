import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { DenunciaPage } from './denuncia.page';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';

const routes: Routes = [
  {
    path: '',
    component: DenunciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,    
    RouterModule.forChild(routes),
    NgxMaskIonicModule.forRoot()

  ],
  declarations: [
    DenunciaPage
  ],
  providers: [
    AuthService
    
  ]
})
export class DenunciaPageModule {}
