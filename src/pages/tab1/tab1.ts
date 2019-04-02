import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
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
  constructor(private productProvider: ProductProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
    this.productProvider.getProducts()
      .subscribe(products => {
      	this.products = products as any;
        console.log(this.products)
      });
  }

}
