import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
/**
* Generated class for the SignupPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
declare var firebase;
@IonicPage()
@Component({
 selector: 'page-signup',
 templateUrl: 'signup.html',
})
export class SignupPage {

name;
fname;
lname;
  email;
  password;
  human={
   fname:"",
   lname:"",
   age:"",
    email:"",
    password:"",
  }

  login: FormGroup;
  signupError: string;

constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
  this.login = this.fb.group({
    fname:['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.maxLength(20)]],
    lname:['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.maxLength(20)]],
    age:['',[Validators.required,Validators.min(0),Validators.max(100)]],
    email:['',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
    password:['',[Validators.required,Validators.minLength(6)]]
  });


}

ionViewDidLoad() {
  console.log('ionViewDidLoad SignupPage');
}
submit(){
  firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
    this.navCtrl.push("LoginPage")
  })
}
next(){
  this.navCtrl.push("LoginPage");
}
prev(){
  this.navCtrl.push("LoginPage");
}
}
