import { About } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Contact } from "../contact/contact";

/**
 * Generated class for the MyTabs tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-my-tabs',
  templateUrl: 'my-tabs.html'
})
@IonicPage()
export class MyTabs {

  tab1Root: any = About;
  tab2Root: any = Contact;

  constructor(public navCtrl: NavController) {}

}
