import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MapService } from './map.service';
import { MapBoxComponent } from './map-box/map-box.component';

// import * as mapboxgl from 'mapbox-gl';
import { AngularFireModule } from '@angular/fire'; 
// import { firebaseConfig } from './environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireDatabaseModule } from "angularfire2/database";

const firebaseCredentials = {
  apiKey: "AIzaSyALV0eRy0WWkmTRGthFt8dHjWYLwQ-fNoM",
  authDomain: "hitmap-cfe6c.firebaseapp.com",
  databaseURL: "https://hitmap-cfe6c.firebaseio.com",
  projectId: "hitmap-cfe6c",
  storageBucket: "hitmap-cfe6c.appspot.com",
  messagingSenderId: "332429767117",
  appId: "1:332429767117:web:2f793a3bd9468f10f7d484"
};

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularFireDatabaseModule, AngularFireModule.initializeApp(firebaseCredentials) ],
  declarations: [ AppComponent, HelloComponent, MapBoxComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MapService]
})
export class AppModule { }
