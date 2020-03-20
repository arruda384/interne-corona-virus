import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { API_CONFIG } from '../config/api.config';



@Injectable()
export class AuthService{

    loginFuncionario = new EventEmitter<boolean>();


    constructor(public http: HttpClient){}

    authenticate(creds: CredenciaisDTO){
        let httpOptions = this.createOptions();
        return this.http.post<any>(API_CONFIG.baseUrl + '/prevencao/auth-mobile', creds, httpOptions);
    //     // this.loginFuncionario.emit(true);
    //   return this.http.post(API_CONFIG.baseUrl + '/prevencao/auth-mobile',creds,
    //     {
    //         observe: 'response',
    //         responseType: 'text',
            
    //     })
    }

        successfulLogin(authorizationValue : string){
            let tok = authorizationValue.substring(7);
                 }

        logout(){
        }


        private createOptions() {
            const httpOptions = {
              headers: new HttpHeaders({
                
                'Content-Type': 'application/x-www-form-urlencoded',
                 'Access-Control-Allow-Origin' : '*'
              })
            };
            return httpOptions;
          }
    
}