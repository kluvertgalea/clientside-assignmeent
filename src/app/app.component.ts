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

  userEmail = '';
  permissions: Permissions = new Permissions(false, false, false, false);

  constructor(private firebaseService: FirebaseService, private router: Router) {

  }

  ngOnInit(): void {

    let content = JSON.parse(localStorage.getItem('user'));
    this.permissions = this.firebaseService.checkPermissionsForRole(content.email);
   
    if(localStorage.getItem('user') != null){
      this.isSignedIn = true;
      let content = JSON.parse(localStorage.getItem('user'));
      this.userEmail = content.email;

      // console.log(localStorage.getItem('user'));
      // console.log();

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
