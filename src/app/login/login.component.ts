import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../Services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firebaseService : FirebaseService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null){
      this.router.navigate(['home']);
    }
  }

  handleSignIn(email: string, password: string){
    this.firebaseService.signin(email, password);
    this.router.navigate(['/home']);
  }

}
