import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './dto/user.dto';
import { FirebaseService } from './Services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pageTitle = 'Droneland';
  @Input() isSignedIn = false;

  userEmail = '';

  constructor(private firebaseService: FirebaseService, private router: Router) {

  }

  ngOnInit(): void {
   
    if(localStorage.getItem('user') != null){
      this.isSignedIn = true;
      let content = JSON.parse(localStorage.getItem('user'));
      
      this.userEmail = content.email;

    }
  }

  handleLogout(){
    this.isSignedIn = false;

    if(localStorage.getItem('user') !== null){
      this.firebaseService.logout();
    } else {
      this.router.navigate(['login']);
    }
  }

}
