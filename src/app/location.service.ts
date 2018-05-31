import { Injectable } from '@angular/core';
import { Location } from './Location';
import { LOCATIONS } from './mock-locations';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  getLocations(): Observable<Location[]> {
  return of(LOCATIONS);
}


  constructor() { }
}
