import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { ComitePage } from './comitePage';
import { ComiteService } from './services/comite.service';

const routes: Routes = [
  {
    path: '',
    component: ComitePage
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
    ComitePage
  ],
  providers: [
    ComiteService
    
  ]
})
export class DenunciaPageModule {}
