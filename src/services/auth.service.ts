import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { API_CONFIG } from '../config/api.config';



@Injectable()
export class AuthService{

    loginFuncionario = new EventEmitter<boolean>();


    constructor(public http: HttpClient){}

    authenticate(creds: CredenciaisDTO){
        // console.log(creds);
        let httpOptions = this.createOptions();
        return this.http.post<any>(API_CONFIG.baseUrl + '/prevencao/auth-mobile', 'matricula=' + creds.matricula + '&password=' + creds.password + '&token=' + creds.token, httpOptions);
        // this.loginFuncionario.emit(true);
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
                // 'content-type':"application/x-www-form-urlencoded",                
                // 'Cache-Control': 'no-cache',
                // 'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Content-Type': 'application/json',
                //  'Access-Control-Allow-Origin' : '*'
              })
            };
            return httpOptions;
          }
    
}