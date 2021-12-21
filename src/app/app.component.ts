import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './Services/firebase.service';
import { Permissions } from './dto/permissions.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pageTitle = 'Droneland';
  isSignedIn = false;

  userEmail = 'default';
  permissions: Permissions = new Permissions(false, false, false, false);

  constructor(private firebaseService: FirebaseService, private router: Router) {
   
  }

  ngOnInit(): void {

    if(localStorage.getItem('user') != null){
      this.isSignedIn = true;
      let content = JSON.parse(localStorage.getItem('user'));
      this.userEmail = content.email
      this.permissions = this.firebaseService.checkPermissionsForRole(this.userEmail);
    }
      
  }

  handleLogout(){
    this.isSignedIn = false;

    if(localStorage.getItem('user') !== null){
      this.firebaseService.logout();
      this.permissions = this.firebaseService.checkPermissionsForRole('')
    } else {
      this.router.navigate(['login']);
    }
  }

}
