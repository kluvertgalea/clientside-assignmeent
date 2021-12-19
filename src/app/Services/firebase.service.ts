import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Permissions } from '../dto/permissions.dto';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  constructor(private firebaseAuth: AngularFireAuth) { }

  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
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
        console.log('test.sysadmin@test.com');
        return new Permissions(true, true, true, true);
      case 'test.manager@test.com':
        console.log('test.manager@test.com');
        return new Permissions( true, true, true, false);
      case 'test.clerk@test.com':
        console.log('test.clerk@test.com');
        return new Permissions(true, false, false, false);
    }

    return null;
  }
}


