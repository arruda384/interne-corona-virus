import { Component, NgModule, OnInit } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { Comite } from './comite';
import { ComiteService } from './services/comite.service';
import { Observable } from 'rxjs';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'page-comite',
  templateUrl: 'comite.html'
})

export class ComitePage implements OnInit{

  // listPdfComite$: Observable<Comite[]>;
    listaPdfComite: Comite[];
    pdfFiles: Comite[] = new Array<Comite>();
  

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private comiteService: ComiteService) { }
   
    ngOnInit() {

      this.pdfFiles = [
        {
          nome:'PDF File ',   
          link: 'http://sistemas.interne.com.br:8082/boletim/boletim001.pdf',
          data: '19/03/2020'
        },
        {
          nome:'Teste',
          link: 'http://sistemas.interne.com.br:8082/boletim/boletim001.pdf',
          data: '19/03/2020'
        },
        
      ];

      this.listaPdfComite = new Array<Comite>();
      // this.listPdfComite$ = this.comiteService.findAll();
      this.comiteService.findAll().subscribe( val => {

        if(val.length > 0){
          this.listaPdfComite = val;
        }else{
          this.listaPdfComite = this.pdfFiles;
        }
        
      }, error => {

        this.listaPdfComite = this.pdfFiles;

      })

    }
   
    downloadPdf(pdfUrl: string, pdfName: string ) {
      //const pdfUrl = './assets/sample.pdf';
      //const pdfName = 'your_pdf_file';
      FileSaver.saveAs(pdfUrl, pdfName);
    }
   
    openDoc(pdfUrl: string, startPage: number ) {
      window.open(pdfUrl + '#page=' + startPage, '_blank', '', true);
    } 

}