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
import { Screen9Page } from '../pages/screen9/screen9';
import { Screen1Page } from '../pages/screen1/screen1';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    LoginPage,
    Screen4Page,
    Screen9Page,
    Screen1Page,
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
    Screen9Page,
    Screen1Page,
    ArchivedTodosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoProvider,
    ProductProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
