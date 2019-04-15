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

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyCUG7z6w7syBQqTvNjC_z2keCV7oJ2OAZ4",
  authDomain: "angreg82-f0c14.firebaseapp.com",
  databaseURL: "https://angreg82-f0c14.firebaseio.com",
  projectId: "angreg82-f0c14",
  storageBucket: "angreg82-f0c14.appspot.com",
  messagingSenderId: "67115645428"
};

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
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoProvider,
    ProductProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
