import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Jbm } from './jbm';

@NgModule({
  declarations: [
    Jbm,
  ],
  imports: [
    IonicPageModule.forChild(Jbm),
  ],
  exports: [
    Jbm
  ]
})
export class JbmModule {}
