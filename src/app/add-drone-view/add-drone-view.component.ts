import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Drone } from '../dto/drone.dto';
import { Permissions } from '../dto/permissions.dto';
import { DroneService } from '../Services/drone.service';
import { FirebaseService } from '../Services/firebase.service';


@Component({
  selector: 'app-add-drone-view',
  templateUrl: './add-drone-view.component.html',
  styleUrls: ['./add-drone-view.component.css']
})
export class AddDroneViewComponent implements OnInit {

  drone: Drone;
  droneForm :FormGroup;

  permissions : Permissions = new Permissions(false, false, false, false);

  constructor(private formBuilder : FormBuilder, private firebaseService: FirebaseService,private router: Router,private droneService: DroneService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') == null){
      this.router.navigate(['login']);
    }

    let content = JSON.parse(localStorage.getItem('user'));
    this.permissions = this.firebaseService.checkPermissionsForRole(content.email);

    if(!this.permissions.hasAddAccess){
      alert('Uh oh! It seems like you do not have permissions to access this page..');
      this.router.navigate(['home']);
    }

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

  submitForm(){
    if(this.droneForm.valid){
      this.drone = this.droneForm.value;
      this.droneService.addDrone(this.drone);
      if(confirm("Drone successfully added, do you want to be redirected to the drones list page?")){
        this.router.navigate(['/drones-list-view']);
      }
    }
  }

}
