import { Component, NgModule, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DenunciaService } from "./services/denuncia.service";
import { Denuncia } from './denuncia';
import { TabsPage } from '../tabs/tabs';
import { StorageService } from '../../services/storage.service';
import { OverlayPortal } from 'ionic-angular/umd/components/app/overlay-portal';
import { DenunciaChecked } from './denunciaChecked';


@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html'
})

export class DenunciaPage implements OnInit {

  formDenuncia: FormGroup;
  funcionario: boolean;
  matriculaFuncionario : string;
  denunciaChecked : DenunciaChecked;

  constructor(private storage: StorageService, public navCtrl: NavController, private formBuilder: FormBuilder, private denunciaService: DenunciaService) {

    this.formDenuncia = this.formBuilder.group({

      nome: ['teste', [Validators.required, Validators.minLength(3)]],
      convenio: ['teste', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      idprofissao: ['4', []],
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

  ngOnInit() {
    if (localStorage.getItem("matricula") === "0" || localStorage.getItem("matricula") === undefined) {

      this.funcionario = false;
    } else {
      this.funcionario = true;
      this.matriculaFuncionario = localStorage.getItem("matricula");
    }
  }

  submited() {
    let den = Object.assign({ 'token': 'SU5URVJORSNDT1JPTkFfVklSVVMj' },                               
                         { 'matricula': this.matriculaFuncionario}, 
                          this.formDenuncia.value,);
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

    this.denunciaChecked = new DenunciaChecked();
   
    const denComp = this;  
    this.denunciaChecked.ind_febre = (den.ind_febre == true) ?  "S" : "N";
    this.denunciaChecked.ind_congestao_nasal = (den.ind_congestao_nasal == true) ?  "S" : "N";
    this.denunciaChecked.ind_dor_garganta = (den.ind_dor_garganta == true) ?  "S" : "N";
    this.denunciaChecked.ind_escovar_dentes = (den.ind_escovar_dentes == true) ?  "S" : "N";
    this.denunciaChecked.ind_falta_ar = (den.ind_falta_ar == true) ?  "S" : "N";
    this.denunciaChecked.ind_falta_ar_caminhada = (den.ind_falta_ar_caminhada == true) ?  "S" : "N";
    this.denunciaChecked.ind_falta_ar_repouso = (den.ind_falta_ar_repouso == true) ?  "S" : "N";
    this.denunciaChecked.ind_outros = (den.ind_outros == true) ?  "S" : "N";
    this.denunciaChecked.ind_pentear_cabelos = (den.ind_pentear_cabelos == true) ?  "S" : "N";
    this.denunciaChecked.ind_sint_gripais = (den.ind_sint_gripais == true) ?  "S" : "N";
    this.denunciaChecked.ind_subir_escada = (den.ind_subir_escada == true) ?  "S" : "N";
    this.denunciaChecked.ind_tomar_banho_sozinho = (den.ind_tomar_banho_sozinho == true) ?  "S" : "N";
    this.denunciaChecked.ind_tosse = (den.ind_tosse == true) ?  "S" : "N";
   
    console.log(this.denunciaChecked);
    
    this.denunciaService.inserir(den, this.denunciaChecked).subscribe(
      data => {
        denComp.sucesso(data);

      },
      err => {

        alert(err);
        denComp.erro(err);
      }
    )
  }
  get f() { return this.formDenuncia.controls; }


}

