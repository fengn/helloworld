import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// export interface ProductInterface {
//   id: string;
//   name: string;
//   description: string;
//   bestSeller: boolean;
//   price: string;
//   image: string;
//   gender: string;
// }

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  public bestSellerProducts=[];
  public products=[];
  index = 0;
  //product: ProductInterface;
  constructor(private productProvider: ProductProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
    this.productProvider.getProducts()
      .subscribe(products => {
        
      	this.products = products as any;
      	
      	for (var i = 0; i < this.products.length; i++){
      		if (this.products[i].bestSeller == true){
      			this.bestSellerProducts[this.index] = this.products[i];
      			this.index = this.index + 1;
      		}
      	}
      	//this.bestSellerProducts.bestSeller == true;
        console.log(this.bestSellerProducts);
      });
  }

}
