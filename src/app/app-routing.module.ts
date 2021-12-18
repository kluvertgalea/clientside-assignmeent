import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDroneViewComponent } from './add-drone-view/add-drone-view.component';
import { DroneDetailsViewComponent } from './drone-details-view/drone-details-view.component';
import { DronesListViewComponent } from './drones-list-view/drones-list-view.component';
import { HomeComponent } from './home/home.component';
import { UpdateDroneViewComponent } from './update-drone-view/update-drone-view.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'drones-list-view', component: DronesListViewComponent},
  {path: 'drones-list-view/:id',component: DroneDetailsViewComponent},
  {path: 'add-drone-view', component: AddDroneViewComponent},
  {path: 'update-drone-view/:id', component: UpdateDroneViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
