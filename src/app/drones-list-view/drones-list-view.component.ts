import { Component, OnInit } from '@angular/core';
import { Drone } from '../dto/drone.dto';

import { DroneService } from '../Services/drone.service';

@Component({
  selector: 'app-drones-list-view',
  templateUrl: './drones-list-view.component.html',
  styleUrls: ['./drones-list-view.component.css']
})
export class DronesListViewComponent implements OnInit {

  drones : Drone[] = [];
  count:number;

  constructor(private droneService : DroneService) { }

  ngOnInit(): void {

    this.droneService.getDrones().subscribe(drones => {
      this.drones = drones;
      this.count = this.drones.length;
    });

  }

  deleteDrone(event, drone){
    if(confirm('Are you sure you want to delete the selected drone?')){
      this.droneService.deleteDrone(drone);

    }
  }
}
