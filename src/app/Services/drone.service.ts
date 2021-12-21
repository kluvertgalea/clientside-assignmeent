import { Injectable, Query } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { map, Observable } from 'rxjs';

import { Drone } from '../dto/drone.dto';

@Injectable({
  providedIn: 'root'
})
export class DroneService {

  dronesCollection: AngularFirestoreCollection<Drone>;
  drones: Observable<any[]>;
  droneDoc : AngularFirestoreDocument<Drone>;

  constructor(private afs: AngularFirestore) {

    this.dronesCollection = this.afs.collection('drones');

    this.drones = this.dronesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Drone;
        data.id = a.payload.doc.id;
        return data;
      })
    }));

   }

   getDrones(){
      return this.drones;
   }

   deleteDrone(drone: Drone){
      this.droneDoc = null;
      this.droneDoc = this.afs.doc('drones/'+drone.id);
      this.droneDoc.delete();
   }

   addDrone(drone: Drone){
      this.droneDoc = null;
      this.dronesCollection.add(drone);
   }

   updateDrone(drone:Drone){
      this.droneDoc = null;
      this.droneDoc = this.afs.doc('drones/'+drone.id);
      this.droneDoc.update(drone);
   }
}
