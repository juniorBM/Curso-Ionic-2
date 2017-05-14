import { Lifecycle } from './../lifecycle/lifecycle';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  lifeCycle(): void{
    this.navCtrl.push(Lifecycle)
    .then(() => {
      console.log('Page pushed!');
      
    }).catch(error => {
      console.log('Acesso não autorizado!', error);
      
    });
  }

}
