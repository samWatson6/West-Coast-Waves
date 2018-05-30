import { Injectable } from '@angular/core';
import { Location } from './Location';
import { LOCATIONS } from './mock-locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  getLocations(): Location[] {
    return LOCATIONS;
  }

  constructor() { }
}
