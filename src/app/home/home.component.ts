import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../Services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebaseService : FirebaseService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') == null){
      this.router.navigate(['login']);
    }
  }

}
