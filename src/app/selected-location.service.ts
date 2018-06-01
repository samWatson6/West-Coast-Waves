import { Injectable } from '@angular/core';
import { Location } from './Location';
import { LOCATIONS } from './mock-locations';
import { Observable, of } from 'rxjs';
import { axios } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SelectedLocationService {

  getTides(location): Observable<tides> {
   // axios.get(`/api/${location}/`)
   //        .then((res) => {
   //          console.log(res.data));
   //          return res.data;
   //        })
   //        .catch((err) => {
   //          throw err;
   //      })
   //    }
   return of('tides output');
   
  constructor() { }
}

