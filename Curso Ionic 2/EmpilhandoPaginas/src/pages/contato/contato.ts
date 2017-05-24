import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Contato page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class Contato {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navParams);
    console.log(this.navParams.get('type'));
    this.navParams.data['message']();
    this.navParams.data.message();
    this.navParams.data.type;

    console.log(this.navParams.get('year'));
    
    
    
  }

  pushPageHome(): void{
    this.navCtrl.push(HomePage);
  }

  popPageHome(): void{
    this.navCtrl.pop(Contato);
  }

}
