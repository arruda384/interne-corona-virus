import { Component, NgModule, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DenunciaService } from "./services/denuncia.service";
import { Denuncia } from './denuncia';
import { TabsPage } from '../tabs/tabs';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html'
})

export class DenunciaPage implements OnInit{

  formDenuncia: FormGroup;
  funcionario : boolean;

  constructor(private storage: StorageService, public navCtrl: NavController, private formBuilder: FormBuilder, private denunciaService: DenunciaService) {

    this.formDenuncia = this.formBuilder.group({

      nome: ['', []],
      convenio: ['', []],
      idprofissao: ['', []],
      telefone: ['', []],
      sexo: ['', []],
      idade: ['', []],
      dat_nascimento: ['', []],
      idnotificacao: ['', []],
      matricula: ['', []],
      dt_notificacao: ['', []],
      dt_ini_sintomas: ['', []],
      ind_febre: [false, []],
      ind_sint_gripais: [false, []],
      ind_falta_ar: [false, []],
      ind_falta_ar_caminhada: [false, []],
      ind_falta_ar_repouso: [false, []],
      ind_tosse: [false, []],
      ind_congestao_nasal: [false, []],
      ind_dor_garganta: [false, []],
      ind_escovar_dentes: [false, []],
      ind_pentear_cabelos: [false, []],
      ind_tomar_banho_sozinho: [false, []],
      ind_outros: [false, []],

    });

  }

  ngOnInit(){
    if(localStorage.getItem("matricula") === "0" || localStorage.getItem("matricula") === undefined ){

      this.funcionario = false;
    }else{
      this.funcionario = true;
    }
  }

  submited() {
    let den = Object.assign({ 'token': 'SU5URVJORSNDT1JPTkFfVklSVVMj' }, this.formDenuncia.value);
    console.log(den);
    this.save(den);
  }



  erro(err: any) {
    alert("err");
    this.navCtrl.setRoot(TabsPage);
    console.log(err);
  }

  sucesso(data: any) {
    // this.toastr.success('', 'cadastro realizado com sucesso!', {
    //   timeOut: 5000,
    //   progressBar: true,
    //   positionClass: 'toast-bottom-right'
    // });
    // this.router.navigate(['/home/cadastro/perfil']);

    alert("Susses");

    console.log(data);
  }

  save(den: Denuncia) {
    // alert("save");
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