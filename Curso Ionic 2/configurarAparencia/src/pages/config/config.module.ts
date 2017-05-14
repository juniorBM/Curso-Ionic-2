import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ConfigPage } from './config';

@NgModule({
  declarations: [
    ConfigPage,
  ],
  imports: [
    // IonicModule.forChild(Config),
  ],
  exports: [
    ConfigPage
  ]
})
export class ConfigModule {}
