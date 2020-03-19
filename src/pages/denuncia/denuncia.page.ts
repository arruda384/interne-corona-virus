import { Component, NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html'
})

export class DenunciaPage {

  formDenuncia: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

    this.formDenuncia = this.formBuilder.group({
      
      nome : ['', [Validators.required]],
      convenio: ['', [Validators.required]],
      idprofissao: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      dat_nascimento: ['', [Validators.required]],
      idnotificacao: ['', [Validators.required]],
      matricula: ['', [Validators.required]],
      dt_notificacao: ['', [Validators.required]],
      listaSintomas: ['', [Validators.required]],
      dt_ini_sintomas: ['', [Validators.required]],
      listaFaltaDeAr: ['', []],

      // ind_febre: ['', [Validators.required]],
      // ind_sint_gripais: ['', [Validators.required]],
      // ind_falta_ar_caminhada: ['', [Validators.required]],
      // ind_falta_ar_repouso: ['', [Validators.required]],
      // ind_tosse: ['', [Validators.required]],
      // ind_congestao_nasal: ['', [Validators.required]],
      // ind_dor_garganta: ['', [Validators.required]],

    });

  }

}
