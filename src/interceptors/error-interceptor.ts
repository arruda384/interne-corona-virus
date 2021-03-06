// import { Injectable } from "@angular/core";
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { AlertController } from "ionic-angular";
// import { StorageService } from "../services/storage.service";
// import { Observable } from "rxjs/Observable";
// import { throwError } from "rxjs";
// import { of } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

 
// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor{
 
//     constructor(public storage: StorageService, public alertCtrl: AlertController){ }
 
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
//         return next.handle(req)
//                 .pipe(
//                     catchError(error => {
//                         if( !error.status ){
//                             error = JSON.parse(error);
//                         }
//                         switch(error.status){
                           
//                             case 401: this.handle401();
//                             break;
                           
//                             case 403: this.handle403();
//                             break;

//                             default:
//                                    this.handleDefaultError(error)
//                         }
 
//                         return throwError (error);
//                     })) as any;
//     }
 
 
//     handle403(){
//         this.storage.setLocalUser(null);
//     }

  

//     async handle401() {
//         const alert = await this.alertCtrl.create({
//             title: 'Erro 401 : Falha de autenticação',
//             message: 'Email ou/e senha incorreto(s)',
//             enableBackdropDismiss : false,
//             buttons:[
//                 {
//                     text: 'Ok'
//                 }
//             ]
          
//         });
      
//         await alert.present();
//       }

//       async handleDefaultError(error) {
//         const alert = await this.alertCtrl.create({
          
//             title: 'Error : ' + error.error.status +': ' + error.error.error,
//             message: error.error.message,
//             enableBackdropDismiss : false,
//             buttons: [
//                 {
//                     text: 'Ok'
//                 }
//             ]
          
//         });
      
//         await alert.present();
//       }
 
// }
 
 
// export const ErrorInterceptorProvider = {
//     provide: HTTP_INTERCEPTORS,
//     useClass: ErrorInterceptor,
//     multi: true,
// };