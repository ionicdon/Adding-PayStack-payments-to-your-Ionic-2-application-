import { Component, ViewChild  } from '@angular/core';
import { NavController, AlertController, ViewController,  Platform,  NavParams  } from 'ionic-angular';
//import { ThankyouPage } from '../thankyou/thankyou';

//import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
//import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-paystack',
  templateUrl: 'paystack.html'
})
export class PaystackPage {
  @ViewChild("email_add") email_add;
  @ViewChild("card_number") card_number;
	@ViewChild("expiryMonth") expiryMonth;
	@ViewChild("expiryYear") expiryYear;
	@ViewChild("cvc") cvc;

customerEmail:any;
price:any;
chargeAmount:any;
cardNumberValue: any;
expiryMonthValue: any;
expiryYearValue: any;
cvcValue: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams,   public loading: LoadingController,  public platform: Platform, public viewCtrl: ViewController) {

  }


ngOnInit(){



this.price= this.navParams.get('price');
this.chargeAmount = this.price*100;
}


  ChargeCard(){
    let card = this.card_number.value
    let month = this.expiryMonth.value
    let cvc = this.cvc.value
    let year = this.expiryYear.value
    let amount = this.chargeAmount
    let email = this.customerEmail

  console.log(card);
    console.log(month);
      console.log(cvc);
        console.log(year);
          console.log(amount);
            console.log(email);
    let loader = this.loading.create({
      content: 'Processing Charge...'
    });
  
    loader.present();
        this.platform.ready().then(() => {
          if (this.platform.is('cordova')) {
          // Now safe to use device APIs
          (<any>window).window.PaystackPlugin.chargeCard(
            (resp) =>{

              loader.dismiss();
              //this.pop.showPayMentAlert("Payment Was Successful", "We will Now Refund Your Balance");
              console.log('charge successful: ', resp);
              alert('Payment Was Successful' )
           //   this.navCtrl.push(ThankyouPage);
///////////////////////////////////////////
///////////////////////////////////////////

///////////////////////////////////////////
///////////////////////////////////////////

            },
            (resp) =>{
              loader.dismiss();
           alert('We Encountered An Error While Charging Your Card' )
            },
            {
              cardNumber: card, 
              expiryMonth: month, 
              expiryYear: year, 
              cvc: cvc,
              email: email,
              amountInKobo: amount,
          })
        }else{
         
        }
      })
  
  
  }

  

whatsPaystack(){

this.platform.ready().then(() => {
      //       let browser = new InAppBrowser("https://paystack.com/what-is-paystack",'_blank');

         });	

}

close(){
  this.viewCtrl.dismiss();
}
}