import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { API_CONFIG } from '../config/api.config';



@Injectable()
export class AuthService{

    loginFuncionario = new EventEmitter<boolean>();


    constructor(public http: HttpClient){}

    authenticate(creds: CredenciaisDTO){
        // this.loginFuncionario.emit(true);
      return this.http.post(API_CONFIG.baseUrl + '/interne_ad/public',
        creds,
        {
            observe: 'response',
            responseType: 'text',
        })
    }

        successfulLogin(authorizationValue : string){
            let tok = authorizationValue.substring(7);
                 }

        logout(){
        }
    
}