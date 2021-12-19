import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DronesListViewComponent } from './drones-list-view/drones-list-view.component';
import { AddDroneViewComponent } from './add-drone-view/add-drone-view.component';
import { DroneDetailsViewComponent } from './drone-details-view/drone-details-view.component';

//Firebase related
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { DroneService } from './Services/drone.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateDroneViewComponent } from './update-drone-view/update-drone-view.component';
import { IncorrectDroneIdViewComponent } from './incorrect-drone-id-view/incorrect-drone-id-view.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FirebaseService } from './Services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DronesListViewComponent,
    AddDroneViewComponent,
    DroneDetailsViewComponent,
    UpdateDroneViewComponent,
    IncorrectDroneIdViewComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'css-homeassignment'),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [DroneService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
