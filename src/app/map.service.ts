import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';


import { GeoJson } from './map';
// import * as mapboxgl from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';
// const mapboxgl = require('mapbox-gl');

// import { AngularFireDatabase, FirebaseListObservable } from '@angular/fire/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MapService {

  constructor(private db: AngularFireDatabase) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    // mapboxgl.accessToken = 'sk.eyJ1IjoiYmVueWFrb3ViIiwiYSI6ImNrMWkzZTQ0bzBhbGwzZ3BnYXVxOXQ3aWMifQ.IfABtvwVW7QwqS-9KuLPSQ';
    // Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('sk.eyJ1IjoiYmVueWFrb3ViIiwiYSI6ImNrMWkzZTQ0bzBhbGwzZ3BnYXVxOXQ3aWMifQ.IfABtvwVW7QwqS-9KuLPSQ');
  }


  getMarkers(): FirebaseListObservable<any> {
    return this.db.list('/markers')
  }

  createMarker(data: GeoJson) {
    return this.db.list('/markers')
                  .push(data)
  }

  removeMarker($key: string) {
    return this.db.object('/markers/' + $key).remove()
  }

}