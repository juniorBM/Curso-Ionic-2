import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Lifecycle } from './lifecycle';

@NgModule({
  declarations: [
    Lifecycle,
  ],
  imports: [
    // IonicModule.forChild(Lifecycle),
  ],
  exports: [
    Lifecycle
  ]
})
export class LifecycleModule {}
