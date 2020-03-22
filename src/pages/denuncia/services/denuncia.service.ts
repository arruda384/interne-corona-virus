import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, ObjectUnsubscribedError } from 'rxjs';
import { Denuncia } from '../denuncia';
import { StorageService } from '../../../services/storage.service';
import { API_CONFIG } from '../../../config/api.config';

@Injectable()
export class DenunciaService {

  constructor(private http: HttpClient, public storage: StorageService) { }

  inserir(obj: Denuncia) {
    // alert("inserir");
    const copy = this.convert(obj);
    let httpOptions = this.createOptions();
    return this.http.post<any>(API_CONFIG.baseUrl + '/prevencao/denuncia',    
    'token=SU5URVJORSNDT1JPTkFfVklSVVMj&' +'nome=' + obj.nome + '&convenio=' + obj.convenio + 'idprofissao=' + obj.idprofissao + 
    '&telefone=' + obj.telefone + '&sexo=' + obj.sexo + '&idade=' + obj.idade + '&dat_nascimento=' + obj.dat_nascimento + 
    '&matricula=' + obj.matricula + '&dt_notificacao=' + obj.dt_notificacao + '&dt_ini_sintomas=' + obj.dt_ini_sintomas + 
    '&ind_febre=' + obj.ind_febre + '&ind_sint_gripais=' + obj.ind_sint_gripais + '&ind_falta_ar_caminhada=' +
     obj.ind_falta_ar_caminhada + '&ind_falta_ar_repouso=' + obj.ind_falta_ar_repouso + '&ind_tosse=' + obj.ind_tosse +  
     '&ind_congestao_nasal=' + obj.ind_congestao_nasal + '&ind_dor_garganta=' + obj.ind_dor_garganta, httpOptions);
  }



  
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

