import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDroneViewComponent } from './add-drone-view/add-drone-view.component';
import { DronesListViewComponent } from './drones-list-view/drones-list-view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'drones-list-view', component: DronesListViewComponent},
  {path: 'add-drone-view', component: AddDroneViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
