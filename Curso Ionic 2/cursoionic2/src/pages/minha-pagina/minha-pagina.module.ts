import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MinhaPagina } from './minha-pagina';

@NgModule({
  declarations: [
    MinhaPagina,
  ],
  imports: [
    // IonicModule.forChild(MinhaPagina),
  ],
  exports: [
    MinhaPagina
  ]
})
export class MinhaPaginaModule {}
