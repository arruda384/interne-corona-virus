import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { ModalContentPage } from './ModalContentPage';

@Component({
  templateUrl: 'template.html'
})
export class BasicPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}