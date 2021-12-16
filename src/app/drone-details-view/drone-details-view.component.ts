import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drone } from '../dto/drone.dto';

@Component({
  selector: 'app-drone-details-view',
  templateUrl: './drone-details-view.component.html',
  styleUrls: ['./drone-details-view.component.css']
})
export class DroneDetailsViewComponent implements OnInit {

  drone:Drone;

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.drone = new Drone(1, "khjfkawd", "kwjdhakjwhdw", "yes", "dasdaw", 232, "John", "Smith", 24, 543,"yes@email.com");
  }

  onBackButtonClick(){
    this.router.navigate(['/drones-list-view']);
  }

}
