import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  myForm: FormGroup;

  isName: boolean = false;
  isEmail: boolean = false;
  isPhone: boolean = false;
  isPassword: boolean = false;
  // createSuccess = false;
  // registerCredentials = { email: '', password: '' };
  constructor(private auth: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public fb: FormBuilder) {

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  validate(data){
    if(data == 'name'){
      this.isName = true;
    }
    else if(data == 'email'){
      this.isEmail = true;
    }
    else if(data == 'phone'){
      this.isPhone = true;
    }
    else if(data == 'password'){
      this.isPassword = true;
    }
  }

  submit(){

  }

  // public register() {
  //   this.auth.register(this.registerCredentials).subscribe(success => {
  //     if (success) {
  //       this.createSuccess = true;
  //       this.showPopup("Success", "Account created.");
  //     } else {
  //       this.showPopup("Error", "Problem creating account.");
  //     }
  //   },
  //     error => {
  //       this.showPopup("Error", error);
  //     });
  // }
  // showPopup(title, text) {
  //   let alert = this.alertCtrl.create({
  //     title: title,
  //     subTitle: text,
  //     buttons: [
  //       {
  //         text: 'OK',
  //         handler: data => {
  //           if (this.createSuccess) {
  //             this.navCtrl.popToRoot();
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

}
