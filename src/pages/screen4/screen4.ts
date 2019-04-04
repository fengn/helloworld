import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the Screen4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-screen4',
  templateUrl: 'screen4.html',
})
export class Screen4Page {

	@ViewChild('slide4') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Screen4Page');
  }

  ngAfterViewInit() {
    console.log('Screen4 Page');
    this.slides.effect = 'coverflow';
    this.slides.centeredSlides = true;
        this.slides.slidesPerView = 'auto';
        this.slides.initialSlide = 1;

    this.slides.coverflow = {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false
        }; 
    console.log(this.slides.length);
  }

  goBack(){
    this.navCtrl.pop();
  }

}
