import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Contato } from './contato';

@NgModule({
  declarations: [
    Contato,
  ],
  imports: [
    // IonicModule.forChild(Contato),
  ],
  exports: [
    Contato
  ]
})
export class ContatoModule {}
