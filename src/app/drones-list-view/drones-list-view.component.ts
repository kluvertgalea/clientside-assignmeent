import { Component, OnInit } from '@angular/core';
import { Drone } from '../dto/drone.dto';

@Component({
  selector: 'app-drones-list-view',
  templateUrl: './drones-list-view.component.html',
  styleUrls: ['./drones-list-view.component.css']
})
export class DronesListViewComponent implements OnInit {

  drones : Drone[] = [];
  count:number;

  constructor() { }

  ngOnInit(): void {
    this.drones.push(new Drone(1, "khjfkawd", "kwjdhakjwhdw", "yes", "dasdaw", 232, "John", "Smith", 24, 543,"yes@email.com"));
    this.drones.push(new Drone(2, "awda", "kwjdhakjwhdw", "yes", "dasdaw", 232, "John", "Smith", 24, 543,"yes@email.com"));
    this.drones.push(new Drone(3, "khjfkawd", "kwjdhakjwhdw", "yesaas", "dasdaw", 232, "John", "Smith", 24, 543,"yes@email.com"));
    this.drones.push(new Drone(4, "khjfkawd", "kwjdhakjwhdw", "yesss", "dasdaw", 232, "John", "Smith", 24, 543,"yes@email.com"));
    this.drones.push(new Drone(5, "awdawd", "kwjdhakjwhdw", "yedds", "dasdaw", 232, "John", "Smith", 24, 543,"yes@email.com"));
    this.drones.push(new Drone(6, "awdawd", "kwjdhakjwhdw", "yesss", "dasdaw", 232, "John", "Smith", 24, 543,"yes@email.com"));
    this.drones.push(new Drone(7, "awfsdfgdsgda", "kwjdhakjwhdw", "yss", "dasdaw", 232, "John", "Smith", 24, 543,"yes@email.com"));
    this.drones.push(new Drone(8, "awdwdwa", "kwjdhakjwhdw", "yeas", "dasdaw", 232, "John", "Smith", 24, 543,"yes@email.com"));
    this.drones.push(new Drone(9, "kwasdasdawd", "kwjdhakjwhdw", "yes", "dasdaw", 232, "John", "Smith", 24, 543,"yes@email.com"));
    this.drones.push(new Drone(10, "awdaw", "kwjdhakjwhdw", "yeds", "dasdaw", 232, "John", "Smith", 24, 543,"yes@email.com"));
    this.count = this.drones.length;
  }

}
