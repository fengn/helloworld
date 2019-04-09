import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Screen1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-screen1',
  templateUrl: 'screen1.html',
})
export class Screen1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Screen1Page');
  }

  goBack(){
    this.navCtrl.pop();
    //this.navCtrl.setRoot('MenuPage');
  }

}
