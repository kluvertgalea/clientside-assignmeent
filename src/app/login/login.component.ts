import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../Services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup;
  invalidCreds = false;

  constructor(private firebaseService : FirebaseService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null){
      this.router.navigate(['home']);
    }

    this.loginForm = this.formBuilder.group({
      formEmail: ['', [Validators.required, Validators.email]],
      formPassword: ['', [Validators.required]],
    });
  }

  handleSignIn(email: string, password: string){
    this.firebaseService.signin(email, password).then(u => {}).catch(error =>{
      switch(error.code){
        case 'auth/user-not-found':
        console.log("Invalid Creds :" + this.invalidCreds);
        this.invalidCreds = true;
        console.log("Invalid Creds :" + this.invalidCreds);
        break;
      }
    })
    this.router.navigate(['home']);
  }

}
