import { Contact } from './../pages/contact/contact';
import { About } from './../pages/about/about';
import { MyTabs } from './../pages/my-tabs/my-tabs';
import { CapitalizePipe } from './../pipes/capitalize.pipe';
import { GithubService } from './../providers/github.service';
import { BackgroundGreen } from './../components/background-green/background-green';
import { Jbm } from './../components/jbm/jbm';
import { TesteJbm } from './../pages/teste-jbm/teste-jbm';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TesteJbm,
    Jbm,
    BackgroundGreen,
    CapitalizePipe,
    MyTabs,
    About,
    Contact
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TesteJbm,
    About,
    Contact,
    MyTabs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubService
  ]
})
export class AppModule {}
