import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, ObjectUnsubscribedError } from 'rxjs';
import { Denuncia } from '../denuncia';
import { StorageService } from '../../../services/storage.service';
import { API_CONFIG } from '../../../config/api.config';
import { forEach } from '@angular/router/src/utils/collection';
import { DenunciaChecked } from '../denunciaChecked';

@Injectable()
export class DenunciaService {

  constructor(private http: HttpClient, public storage: StorageService) { }

  inserir(denuncia: Denuncia, denCheck: DenunciaChecked) {
   
    // this.atualizarValoresChek(obj);
    
    const obj = this.convert(denuncia);
    let httpOptions = this.createOptions();
    return this.http.post<any>(API_CONFIG.baseUrl + '/prevencao/denuncia',
      'token=SU5URVJORSNDT1JPTkFfVklSVVMj&' + 'nome=' + obj.nome + '&convenio=' + obj.convenio + 'idprofissao=' + obj.idprofissao +
      '&telefone=' + obj.telefone + '&sexo=' + obj.sexo + '&idade=' + obj.idade + '&dat_nascimento=' + obj.dat_nascimento +
      '&matricula=' + obj.matricula + '&dt_notificacao=' + obj.dt_notificacao + '&dt_ini_sintomas=' + obj.dt_ini_sintomas +
      '&ind_febre=' + denCheck.ind_febre + '&ind_sint_gripais=' + denCheck.ind_sint_gripais + '&ind_falta_ar_caminhada=' +
      denCheck.ind_falta_ar_caminhada + '&ind_falta_ar_repouso=' + denCheck.ind_falta_ar_repouso + '&ind_tosse=' + denCheck.ind_tosse +
      '&ind_congestao_nasal=' + denCheck.ind_congestao_nasal + '&ind_dor_garganta=' + denCheck.ind_dor_garganta +
      '&ind_escovar_dentes=' + denCheck.ind_escovar_dentes + '&ind_tomar_banho_sozinho=' + denCheck.ind_tomar_banho_sozinho + 
      '&ind_pentear_cabelos=' + denCheck.ind_pentear_cabelos + 'ind_subir_escada=' + denCheck.ind_subir_escada + 
      '&ind_falta_ar=' + denCheck.ind_falta_ar + '&ind_outros=' + denCheck.ind_outros, httpOptions);
  }

  // atualizarValoresChek( obj: Object){
  //   if(obj){
  //     return "S"
  //   }else{
  //     return "N"
  //   }
  // };


  private convert(denuncia: Denuncia): Denuncia {
    const copy: Denuncia = Object.assign({}, denuncia);
    return copy;
  }

  private createOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return httpOptions;
  }

}

