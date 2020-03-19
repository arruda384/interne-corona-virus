import { Component, NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DenunciaService } from "./services/denuncia.service";
import { Denuncia } from './denuncia';


@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html'
})

export class DenunciaPage {

  formDenuncia: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private denunciaService: DenunciaService) {

    this.formDenuncia = this.formBuilder.group({


         /*
      nome : ['', []],
      convenio: ['', []],
      idprofissao: ['', []],
      telefone: ['', []],
      sexo: ['', []],
      idade: ['', []],
      dat_nascimento: ['', []],
      idnotificacao: ['', []],
      matricula: ['', []],
      dt_notificacao: ['', []],
      listaSintomas: ['', []],
      dt_ini_sintomas: ['', [Validators.required]],
      listaFaltaDeAr: ['', []], 
      */
      
      nome : ['teste', []],
      convenio: [1, []],
      idprofissao: [1, []],
      telefone: ['81818188888', []],
      sexo: ['M', []],
      idade: [25, []],
      dat_nascimento: ['01/01/1980', []],
      // idnotificacao: [1, []],
      matricula: [5020, []],
      dt_notificacao: ['', []],
      listaSintomas: ['', []],
      dt_ini_sintomas: ['Mar, 19,2020', []],
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

  submited() {

    alert("submit");
    
    let den = Object.assign({ 'token': 'SU5URVJORSNDT1JPTkFfVklSVVMj' }, this.formDenuncia.value);
    console.log(den);
    this.save(den);
  }

  

  erro(err: any) {    

    console.log(err);
  }

  sucesso(data: any) {
    // this.toastr.success('', 'cadastro realizado com sucesso!', {
    //   timeOut: 5000,
    //   progressBar: true,
    //   positionClass: 'toast-bottom-right'
    // });
    // this.router.navigate(['/home/cadastro/perfil']);

    console.log(data);
  }

  save(den: Denuncia) {
    alert("save");
    const denComp = this;
    
    this.denunciaService.inserir(den).subscribe(
      data => {
        denComp.sucesso(data);      
      },
      err => {
      denComp.erro(err);
      }
    )
  }
}