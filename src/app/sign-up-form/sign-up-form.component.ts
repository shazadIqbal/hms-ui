import { Component, OnInit } from '@angular/core';
import {signUpForm} from './signup';
import { SignUpServiceService } from '../Services/sign-up-service.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {


  signUpObj : signUpForm = new signUpForm();
  usertypes : any;

  constructor(private signUpFormService: SignUpServiceService,  private messageService: MessageService,private router : Router) {
    this.usertypes=[
      {label:"ADMIN", value:"ADMIN"}
    ]
   }

  ngOnInit() {

  }


  backToMainScreen(){
    this.router.navigate[('mainscreen')];
    history.go(-1);
  }

  saveSignUpForm(){

    this.signUpFormService.postSignUpForm(this.signUpObj).subscribe(
      data=>{
        console.log(data);
        if(data['result'].status == 200){
        this.messageService.add({
          severity: "success",
          summary: "sign up successfull",
          detail: "new user added"

        });
      }else{
        this.messageService.add({
          severity: "warn",
          summary: "Failed",
          detail: "user already exists"
        });
      }
      },
      error =>{
        this.messageService.add({
            severity: 'error',
            summary: 'sign up failed',
            detail: 'Failed'
        });
      }
    );
  }
}
