import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Lifecycle page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lifecycle',
  templateUrl: 'lifecycle.html',
})
export class Lifecycle {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //Aguarda a entrada da página(Autenticação)
  ionViewCanEnter(): Promise<any>{
    // console.log('01 ionViewCanEnte called');
    // return true;

    return new Promise((resolve, reject) => {
      console.log('Aguradando 2 segundos..');
      setTimeout(() => {
        let number = Math.round(Math.random() * 100);
        if(number % 2 == 0){
          resolve();
          console.log(`${number} - Autorizado`);
          
        }else{
          reject();
          console.log(`${number} - Não autorizado`);
          
        }
      }, 2000);
    });
  }
  
  //A página foi carrega mas não foi exibida
  ionViewDidLoad() {
    console.log('02 ionViewDidLoad called');
  }

  //A página está para entrar
  ionViewWillEnter() {
    console.log('03 ionViewWillEnter called');
  }

  //Foi carrega e exibida
  ionViewDidEnter() {
    console.log('04 ionViewDidEnter called');
  }

  //Aguarda se pode sair da página
  ionViewCanLeave(): Promise<any> {
    // console.log('05 ionViewCanLeave called');
    // return false;

    return new Promise((resolve, reject) => {
      console.log('Aguradando 2 segundos..');
      setTimeout(() => {
        let number = Math.round(Math.random() * 100);
        if(number % 2 == 0){
          resolve();
          console.log(`${number} - Autorizado`);
          
        }else{
          reject();
          console.log(`${number} - Não autorizado`);
          
        }
      }, 2000);
    });
  }

  //Preste a sair mas a página não saiu
  ionViewWillLeave() {
    console.log('06 ionViewWillLeave called');
  }

  //Quando já saiu da página
  ionViewDidLeave() {
    console.log('07 ionViewDidLeave called');
  }

  //Quando a página está preste a ser destruida e o seus componentes tambem
  ionViewWillUnload() {
    console.log('08 ionViewDidLeave called');
  }

  voltarHome(): void{
    this.navCtrl.pop(HomePage)
    .then(() => {
      console.log('Page popped');
    }).catch(error => {
      console.log('Saída não autorizada!', error);
    });
  }

}
