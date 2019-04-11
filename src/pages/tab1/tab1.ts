import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { MyApp } from '../../app/app.component';
/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//  export interface ProductInterface {
//   id: string;
//   name: string;
//   description: string;
//   price: string;
//   image: string;
//   gender: string;
// }

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  public products = [];
  username = '';
  email = '';
  constructor(private productProvider: ProductProvider, public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, public myApp: MyApp) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
    this.productProvider.getProducts()
      .subscribe(products => {
      	this.products = products as any;
        console.log(this.products)
      });
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      //this.navCtrl.popToRoot()
        this.myApp.logout()
    });
  }

}
