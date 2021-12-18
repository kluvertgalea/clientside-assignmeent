import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Drone } from '../dto/drone.dto';
import { DroneService } from '../Services/drone.service';

@Component({
  selector: 'app-update-drone-view',
  templateUrl: './update-drone-view.component.html',
  styleUrls: ['./update-drone-view.component.css']
})
export class UpdateDroneViewComponent implements OnInit {

  drone : Drone;
  droneForm : FormGroup;
  constructor(private route:ActivatedRoute, private router: Router, private formBuilder : FormBuilder,private droneService: DroneService) { }

  ngOnInit(): void {
     let id = this.route.snapshot.paramMap.get('id');

    this.droneService.getDrones().subscribe(drone => {
      this.drone = drone[drone.indexOf(drone.find(d => d.id == id))];
      // console.log(this.drone);
    });


    this.droneForm = this.formBuilder.group({
      serialNumber: ['', [Validators.required]],
      modelNumber: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
      ownerIdNumber: ['', [Validators.required]],
      ownerFirstName: ['', [Validators.required]],
      ownerLastName: ['', [Validators.required]],
      ownerContactNumberCountryCode: ['', [Validators.required, Validators.min(11), Validators.max(999)]],
      ownerContactNumber: ['', [Validators.required, Validators.min(10000000), Validators.max(99999999)]],
      ownerEmail: ['', [Validators.required, Validators.email]],
    });
  }

  onBackButtonClick(){
      this.router.navigate(['/drones-list-view']);
  }

  submitForm(){
    if(this.droneForm.valid){
      this.drone = this.droneForm.value;
      this.drone.id = this.route.snapshot.paramMap.get('id');
      // console.log(this.drone.id);
      this.droneService.updateDrone(this.drone);
      if(confirm('Successfully updated drone, do you want to view this products updated details ?')){
          this.router.navigate(['/drones-list-view', this.drone.id]);
      };
    }
  }
}
