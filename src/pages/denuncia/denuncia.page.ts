import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DenunciaService } from "./services/denuncia.service";
import { Denuncia } from './denuncia';
import { DenunciaChecked } from './denunciaChecked';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html'
})

export class DenunciaPage implements OnInit {

  formDenuncia: FormGroup;
  funcionario: boolean;
  matriculaFuncionario: string;
  denunciaChecked: DenunciaChecked;

  exibirDivFaltaAr: boolean = false;
  exibirCamposForm: boolean = false;
  exibirCamposColaborador: boolean = false;
  exibirCamposPaciente: boolean = false;

  dtNascimentoFuncionario: string;

  checkBoxFebre: boolean = false;
  checkBoxTosse: boolean = false;
  checkBoxCongestao: boolean = false;
  checkBoxDorGarganta: boolean = false;
  checkBoxFaltaAr: boolean = false;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private denunciaService: DenunciaService,
    private loadingController: LoadingController
  ) {

    this.formDenuncia = this.formBuilder.group({

      nome: ['', [Validators.required, Validators.minLength(3)]],
      // convenio: ['', []],
      idprofissao: ['', []],
      idnotificador: ['', []],
      telefone: ['', [Validators.minLength(10), Validators.required]],
      sexo: ['', [Validators.required]],
      idade: [, []],
      dat_nascimento: ['', [Validators.required]],
      // idnotificacao: ['', []],
      // matricula: ['', []],
      // dt_notificacao: ['', []],
      dt_ini_sintomas: ['', [Validators.required]],
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

  formatDatPadrao(dat) {
    const day = dat.slice(0, 2);
    const month = dat.slice(2, 4);
    const year = dat.slice(4, 8);
    return day + "/" + month + "/" + year;
  }

  ngOnInit() {
    // this.matriculaFuncionario = localStorage

    this.funcionario = (localStorage.getItem("matricula") === "0" || localStorage.getItem("matricula") === undefined)
      ? false
      : true
      [this.matriculaFuncionario = localStorage.getItem('matricula'),
      this.dtNascimentoFuncionario = localStorage.getItem('dat_nascimento')];

  }

  submited() {
    let den = Object.assign({
      'token': 'SU5URVJORSNDT1JPTkFfVklSVVMj',
      'idprofissao': 1, 'dat_nascimento': this.dtNascimentoFuncionario
    },
      { 'matricula': this.matriculaFuncionario },
      this.formDenuncia.value

    );

    // den.dat_nascimento = this.formatDat(den.dat_nascimento);
    den.dt_ini_sintomas = this.formatDat(den.dt_ini_sintomas);

    if (this.exibirCamposColaborador) {
      den.idprofissao = localStorage.getItem('id_profissao');
      den.dat_nascimento = this.dtNascimentoFuncionario;
      den.idade = this.calculateAge(this.dtNascimentoFuncionario);

    } else if (this.exibirCamposPaciente) {
      den.idprofissao = 12;
      den.dat_nascimento = this.formatDat(den.dat_nascimento);
      den.idade = this.calculateAge(den.dat_nascimento);

    }

    den.idnotificador = localStorage.getItem('id_profissao');

    // console.log(den);
    this.save(den);

  }

  erro(err: any) {
    alert(err.message);
    console.log(err);
  }

  sucesso(data: any) {
    const loading = this.loadingController.create({
      content: data.message,
      duration: 3000

    });
    this.presentLoading(loading);
    this.navCtrl.setRoot(HomePage);

  }

  setCheckBoxChangeColor(key) {

    switch (key) {
      case 1:
        this.checkBoxFebre = !this.checkBoxFebre;
        break;
      case 2:
        this.checkBoxTosse = !this.checkBoxTosse;
        break;
      case 3:
        this.checkBoxCongestao = !this.checkBoxCongestao;
        break;
      case 4:
        this.checkBoxDorGarganta = !this.checkBoxDorGarganta;
        break;
      case 5:
        this.checkBoxFaltaAr = !this.checkBoxFaltaAr;
        break;
      default:
        break;
    }

  }

  calculateAge(dat) {
    dat = dat.replace(/\D/g, "");
    const day = dat.slice(6, 8);
    const month = dat.slice(4, 6);
    const year = dat.slice(0, 4);
    const birthday = new Date(year, month, day);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  formatDat(dat) {
    const day = dat.slice(8, 11);
    const month = dat.slice(5, 7);
    const year = dat.slice(0, 4);
    const result = day + "/" + month + "/" + year;
    return result;
  }

  save(den: Denuncia) {

    this.denunciaChecked = new DenunciaChecked();

    const denComp = this;
    this.denunciaChecked.ind_febre = (den.ind_febre == true) ? "S" : "N";
    this.denunciaChecked.ind_congestao_nasal = (den.ind_congestao_nasal == true) ? "S" : "N";
    this.denunciaChecked.ind_dor_garganta = (den.ind_dor_garganta == true) ? "S" : "N";
    this.denunciaChecked.ind_escovar_dentes = (den.ind_escovar_dentes == true) ? "S" : "N";
    this.denunciaChecked.ind_falta_ar = (den.ind_falta_ar == true) ? "S" : "N";
    this.denunciaChecked.ind_falta_ar_caminhada = (den.ind_falta_ar_caminhada == true) ? "S" : "N";
    this.denunciaChecked.ind_falta_ar_repouso = (den.ind_falta_ar_repouso == true) ? "S" : "N";
    this.denunciaChecked.ind_outros = (den.ind_outros == true) ? "S" : "N";
    this.denunciaChecked.ind_pentear_cabelos = (den.ind_pentear_cabelos == true) ? "S" : "N";
    this.denunciaChecked.ind_sint_gripais = (den.ind_sint_gripais == true) ? "S" : "N";
    this.denunciaChecked.ind_subir_escada = (den.ind_subir_escada == true) ? "S" : "N";
    this.denunciaChecked.ind_tomar_banho_sozinho = (den.ind_tomar_banho_sozinho == true) ? "S" : "N";
    this.denunciaChecked.ind_tosse = (den.ind_tosse == true) ? "S" : "N";


    this.denunciaService.inserir(den, this.denunciaChecked).subscribe(
      response => {

        if (response.tipo === "ERROR") {
          this.erro(response);
        } else if (response.tipo === "INFO") {
          this.sucesso(response)
        }
      },
      err => {

        alert(err);
        denComp.erro(err);
      }
    )
  }
  get f() { return this.formDenuncia.controls; }

  exibirDivAr(val) {
    this.exibirDivFaltaAr = val.checked;
    if (!val.checked) {
      this.formDenuncia.get('ind_falta_ar_caminhada').setValue(false)
      this.formDenuncia.get('ind_falta_ar_repouso').setValue(false)
      this.formDenuncia.get('ind_escovar_dentes').setValue(false)
      this.formDenuncia.get('ind_pentear_cabelos').setValue(false)
      this.formDenuncia.get('ind_tomar_banho_sozinho').setValue(false)
      this.formDenuncia.get('ind_outros').setValue(false)

    }

  }

  setCamposPaciente(idTipoNotificacao: number) {

    if (idTipoNotificacao == 1 && this.exibirCamposPaciente == false) { //Setar Campos de Paciente sem estar no Paciente

      this.exibirCamposForm = true;
      this.exibirCamposColaborador = false;
      this.exibirCamposPaciente = true;
      this.formDenuncia.reset();

      this.checkBoxFebre = false;
      this.checkBoxTosse = false;
      this.checkBoxCongestao = false;
      this.checkBoxDorGarganta = false;
      this.checkBoxFaltaAr = false;

    } else if (idTipoNotificacao == 2 && this.exibirCamposColaborador == false) { //Setar Campos de Colaborador sem estar no Colaborador

      this.exibirCamposForm = true;
      this.exibirCamposColaborador = true;
      this.exibirCamposPaciente = false;
      this.formDenuncia.reset();

      this.checkBoxFebre = false;
      this.checkBoxTosse = false;
      this.checkBoxCongestao = false;
      this.checkBoxDorGarganta = false;
      this.checkBoxFaltaAr = false;

      this.formDenuncia.get('nome').setValue(localStorage.getItem('nome'));
      this.formDenuncia.get('sexo').setValue(localStorage.getItem('sexo'));
      this.formDenuncia.get('dat_nascimento').setValue(localStorage.getItem('dat_nascimento'));
      this.formDenuncia.get('idade').setValue(localStorage.getItem('idade'));
      this.formDenuncia.get('telefone').setValue(localStorage.getItem('telefone').replace(/\D/g, ""));
      // this.formDenuncia.get('convenio').setValue('');
      // this.formDenuncia.get('idprofissao').setValue(1);

    }

  }

  async presentLoading(loading) {
    return await loading.present();
  }
}
