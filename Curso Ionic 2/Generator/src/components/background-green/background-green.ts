import { Directive, ElementRef } from '@angular/core';

/**
 * Generated class for the BackgroundGreen directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[background-green]' // Attribute selector
})
export class BackgroundGreen {

  constructor(public el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'green';
    console.log('Hello BackgroundGreen Directive');
  }

}
