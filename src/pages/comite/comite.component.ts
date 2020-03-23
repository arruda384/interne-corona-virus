// basic.component.ts
import { Component, OnInit } from '@angular/core';
 
declare var require: any
const FileSaver = require('file-saver');
 
@Component({
  selector: 'page-comite',
  templateUrl: 'comite.html',
  styleUrls: ['comite.css']
})
export class ComiteComponent implements OnInit {
 
  pdfFiles = [
    {
      name:'PDF File One',
      startPage: 2,
      path: '../../assets/boletim/boletim001.pdf'
    },
    {
      name:'PDF File Two',
      startPage: 4,
      path: '../../assets/boletim/boletim001.pdf'
    },
    
  ]
 
  constructor() { }
 
  ngOnInit() {
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
 