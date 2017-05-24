import { TesteJbm } from './../teste-jbm/teste-jbm';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushTeste(): void {
    this.navCtrl.push(TesteJbm);
  }

}
