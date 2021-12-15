import { Component, OnInit, Input } from '@angular/core';
import { Drone } from '../dto/drone.dto';

@Component({
  selector: 'app-drone-listing',
  templateUrl: './drone-listing.component.html',
  styleUrls: ['./drone-listing.component.css']
})
export class DroneListingComponent implements OnInit {

  @Input() drone: Drone;

  constructor() { }

  ngOnInit(): void {
  }

}
