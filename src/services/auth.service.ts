import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { LocalUser, GoogleUser } from '../models/local_user';
import { StorageService } from './storage.service';



@Injectable()
export class AuthService {

  loginFuncionario = new EventEmitter<boolean>();

  constructor(public http: HttpClient, private storage: StorageService) { }

  authenticate(obj: any) {
    let httpOptions = this.createOptions();
    return this.http.post<any>(API_CONFIG.baseUrl + '/prevencao/auth-mobile', 'matricula=' + obj.matricula + '&password=' + obj.password + '&token=' + obj.token, httpOptions);

  }

  successfulLogin(usuarioLogado: any, tipoLogin: number) { // tipoLogin : 1 funcionario 2 google
    if (tipoLogin == 1) {

      let user: LocalUser = {
        matricula: usuarioLogado.matricula,
        nome: usuarioLogado.nome, 
        telefone: usuarioLogado.telefone,
        sexo: usuarioLogado.sexo,
        idade: usuarioLogado.idade,
        dat_nascimento : usuarioLogado.dat_nascimento,
        idprofissao : usuarioLogado.idprofissao
      }
      this.storage.setLocalUser(user);

    } else {
      let userGoogle: GoogleUser = {
        matricula: "0",
        nome: usuarioLogado.displayName,
        email: usuarioLogado.displayEmail,
      }
      this.storage.setLocalUser(userGoogle);

    }

  }

  logout() {
  }

  private createOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };
    return httpOptions;
  }

}