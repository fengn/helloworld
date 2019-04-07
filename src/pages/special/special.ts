import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Screen4Page } from '../screen4/screen4';
import { Screen9Page } from '../screen9/screen9';
/**
 * Generated class for the SpecialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-special',
  templateUrl: 'special.html',
})
export class SpecialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialPage');
  }

  openScreen4(){
  	this.navCtrl.push(Screen4Page);
  }

  openScreen9(){
    this.navCtrl.push(Screen9Page);
  }

}
