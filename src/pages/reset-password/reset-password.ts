import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import {FormBuilder,Validators,FormGroup} from '@angular/forms';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
 
  email;
 
  human={
    email:"",
    
  }
  login: FormGroup;
  loginError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb : FormBuilder ) {
    this.login = this.fb.group({

      email:['',[Validators.required]],
      
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }
resetPassword(){
  var auth = firebase.auth();
  var emailAddress = this.email;
  
  auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
}
backToLogin(){
  this.navCtrl.push("LoginPage");
}
}

