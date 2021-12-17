import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drone } from '../dto/drone.dto';

import { DroneService } from '../Services/drone.service';

@Component({
  selector: 'app-drone-details-view',
  templateUrl: './drone-details-view.component.html',
  styleUrls: ['./drone-details-view.component.css']
})
export class DroneDetailsViewComponent implements OnInit {

  drone:Drone;

  constructor(private route:ActivatedRoute, private router: Router, private droneService : DroneService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.droneService.getDrones().subscribe(drone => {
      this.drone = drone[drone.indexOf(drone.find(d => d.id == id))];
      console.log(this.drone);
    });



  }

  onBackButtonClick(){
    this.router.navigate(['/drones-list-view']);
  }

}
