import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incorrect-drone-id-view',
  templateUrl: './incorrect-drone-id-view.component.html',
  styleUrls: ['./incorrect-drone-id-view.component.css']
})
export class IncorrectDroneIdViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackButtonClick(){
    this.router.navigate(['/drones-list-view']);
  }

}
