import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Denuncia } from '../denuncia';
import { StorageService } from '../../../services/storage.service';
import { API_CONFIG } from '../../../config/api.config';

@Injectable()
export class DenunciaService {

  constructor(private http: HttpClient, public storage: StorageService) { }

  inserir(denuncia: Denuncia) {
    // alert("inserir");
    const copy = this.convert(denuncia);
    let httpOptions = this.createOptions();
    return this.http.post<any>(API_CONFIG.baseUrl + '/prevencao/denuncia', copy, httpOptions);
  }



  
  private convert(denuncia: Denuncia): Denuncia {
    const copy: Denuncia = Object.assign({}, denuncia);
    return copy;
  }

  private createOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin' : '*'
      })
    };
    return httpOptions;
  }

}