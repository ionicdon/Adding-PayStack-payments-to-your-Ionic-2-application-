import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaystackPage} from '../paystack/paystack'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

data:any;

  constructor(public navCtrl: NavController) {

  }

  checkOut(){
    let data = {
      price:"5000"
    };
    this.navCtrl.push(PaystackPage, data)
  }

  checkOut2(){
    let data = {
     price:"7500"
    };
   this.navCtrl.push(PaystackPage, data)
  }
  
}
