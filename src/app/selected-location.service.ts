import { Injectable } from '@angular/core';
import { Location } from './Location';
import { LOCATIONS } from './mock-locations';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelectedLocationService {

  constructor (private http: HttpClient) {}


  getTides() : Observable<tides> {
      return this.http.get('http://localhost:8080/api/')
        .pipe(
          tap(tides => console.log(`fetched tides: {tides}`))
          )
      }
    )
  }
}



