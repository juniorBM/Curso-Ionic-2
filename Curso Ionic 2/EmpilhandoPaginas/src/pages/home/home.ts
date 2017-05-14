import { Contato } from './../contato/contato';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(): void{
    this.navCtrl.push(Contato, {
      type: 'push'
    });
  }

  setRoot(): void{
    this.navCtrl.setRoot(Contato, {
      type: 'push',
      course: 'ionic 2',
      year: 2017,
      message: () => {
        console.log('Bem-vindo ao ionic 2');
        
      }
    });
  }

}
