import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Permissions } from '../dto/permissions.dto';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

 isLoggedIn = false;
  constructor(private firebaseAuth: AngularFireAuth , private router: Router) { }

  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('user', JSON.stringify(res.user));    
      this.isLoggedIn = true;
      this.router.navigate(['']);
      location.reload();
    });
  }

  logout(){
    this.isLoggedIn = false;
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }

  getLoggedIn(){
    return this.isLoggedIn;
  }

  checkPermissionsForRole(email: string){
    
    switch(email){
      case 'test.sysadmin@test.com':
        return new Permissions(true, true, true, true);
      case 'test.manager@test.com':
        return new Permissions( true, true, true, false);
      case 'test.clerk@test.com':
        return new Permissions(true, false, false, false);
    }

    return new Permissions(false, false, false, false);
  }
}


