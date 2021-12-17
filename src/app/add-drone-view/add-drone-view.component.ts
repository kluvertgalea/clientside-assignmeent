import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Drone } from '../dto/drone.dto';
import { DroneService } from '../Services/drone.service';


@Component({
  selector: 'app-add-drone-view',
  templateUrl: './add-drone-view.component.html',
  styleUrls: ['./add-drone-view.component.css']
})
export class AddDroneViewComponent implements OnInit {

  drone: Drone;
  droneForm :FormGroup;

  constructor(private formBuilder : FormBuilder, private droneService: DroneService) { }

  ngOnInit(): void {
    this.droneForm = this.formBuilder.group({
      serialNumber: ['', [Validators.required]],
      modelNumber: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
      ownerIdNumber: ['', [Validators.required]],
      ownerFirstName: ['', [Validators.required]],
      ownerLastName: ['', [Validators.required]],
      ownerContactNumberCountryCode: ['', [Validators.required]],
      ownerContactNumber: ['', [Validators.required]],
      ownerEmail: ['', [Validators.required]],
    });
  }

  submitForm(){
    if(this.droneForm.valid){
      this.drone = this.droneForm.value;
      this.droneService.addDrone(this.drone);
    }
  }

}
