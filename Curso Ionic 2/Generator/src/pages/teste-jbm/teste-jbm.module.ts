import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesteJbm } from './teste-jbm';

@NgModule({
  declarations: [
    TesteJbm,
  ],
  imports: [
    IonicPageModule.forChild(TesteJbm),
  ],
  exports: [
    TesteJbm
  ]
})
export class TesteJbmModule {}
