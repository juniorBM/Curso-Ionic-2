import { Component } from '@angular/core';

/**
 * Generated class for the Jbm component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'jbm',
  templateUrl: 'jbm.html'
})
export class Jbm {

  text: string;

  constructor() {
    console.log('Hello Jbm Component');
    this.text = 'Hello World';
  }

}
