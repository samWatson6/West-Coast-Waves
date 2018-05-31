import { Injectable } from '@angular/core';
import { Location } from './Location';
import { LOCATIONS } from './mock-locations';
import { Observable, of } from 'rxjs';
import { axios } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SelectedLocationService {

  getTides(location) {
   axios.get(`/api/${location}/`)
          .then((res) => {
            console.log(res.data));
            return res.data;
          })
          .catch((err) => {
            throw err;
        })
      }
  constructor() { }
}

