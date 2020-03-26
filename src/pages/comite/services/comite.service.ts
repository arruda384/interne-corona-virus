import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../../../services/storage.service';
import { Comite } from '../comite';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../../../config/api.config';

@Injectable()
export class ComiteService {

  constructor(private http: HttpClient, public storage: StorageService) { }

  private convert(comite: Comite): Comite {
    const copy: Comite = Object.assign({}, comite);
    return copy;
  }

  findAll(): Observable<Comite[]> {
    return this.http.get<Comite[]>(API_CONFIG.baseUrl + '/prevencao/lista-boletins/SU5URVJORSNDT1JPTkFfVklSVVMj');
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

