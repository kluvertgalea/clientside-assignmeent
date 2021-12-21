import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drone } from '../dto/drone.dto';
import { Permissions } from '../dto/permissions.dto';

import { DroneService } from '../Services/drone.service';
import { FirebaseService } from '../Services/firebase.service';

//Pdf export
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

//Excel export
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-drones-list-view',
  templateUrl: './drones-list-view.component.html',
  styleUrls: ['./drones-list-view.component.css']
})
export class DronesListViewComponent implements OnInit {

  drones : Drone[] = [];
  count:number;
  permissions: Permissions = new Permissions(false, false, false, false);

  constructor(private droneService : DroneService, private firebaseService : FirebaseService, private router: Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('user') == null){
      this.router.navigate(['login']);
    }

    let content = JSON.parse(localStorage.getItem('user'));
    this.permissions = this.firebaseService.checkPermissionsForRole(content.email);

    this.droneService.getDrones().subscribe(drones => {
      this.drones = drones;
      this.count = this.drones.length;
    });

  }

  deleteDrone(event, drone){
    if(this.permissions.hasDeleteAccess){
      if(confirm('Are you sure you want to delete the selected drone?')){
        this.droneService.deleteDrone(drone);
      }
    } else {
        alert('Uh oh! It seems like you do not have permissions to delete drones..');
        this.router.navigate(['home']);
    }
   
  }

  exportToPdf(event){
    var element = document.getElementById('dataId');
    html2canvas(element).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var doc = new jspdf.jsPDF();
      var imgHeight = canvas.height * 208 / canvas.width;
      doc.addImage(imgData, 0, 0, 208, imgHeight);
      doc.save("drone_listings");
    })
  }

  exportToExcel(){
    const table = document.getElementById('dronesTable');
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(table);

    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Drones List');

    xlsx.writeFile(wb, 'drone_listings.xlsx');

  }
}
