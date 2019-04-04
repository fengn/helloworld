import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodoProvider } from '../providers/todo/todo';
import { HttpClientModule } from '@angular/common/http';
import { ArchivedTodosPage } from "../pages/archived-todos/archived-todos";

import { LoginPage } from '../pages/login/login';
import { ProductProvider } from '../providers/product/product';

import { Screen4Page } from '../pages/screen4/screen4';

@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    LoginPage,
    Screen4Page,
    ArchivedTodosPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    LoginPage,
    Screen4Page,
    ArchivedTodosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoProvider,
    ProductProvider
  ]
})
export class AppModule {}
