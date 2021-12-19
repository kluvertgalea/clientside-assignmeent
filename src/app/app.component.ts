import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './Services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pageTitle = 'Droneland';
  userEmail = '';
  isSignedIn = false;

  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null){
      this.isSignedIn = true;
      console.log(localStorage.getItem('user'));
    }

    console.log("Is signed in:" + this.isSignedIn);
  }


  async onSignIn(email: string, password: string){
    await this.firebaseService.signin(email, password);

    if(localStorage.getItem('user') !== null){
      this.isSignedIn = true;
      console.log("Is signed in: " + this.isSignedIn);
    }
  }

  handleLogout(){
    this.isSignedIn = false;
    this.firebaseService.logout();
  }
}
