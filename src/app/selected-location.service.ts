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
          tap(heroes => this.log(`fetched tides`))
          )
      }
    )
  }
}




// Import RxJs required methods


  // getHeroNo404<Data>(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/?id=${id}`;
  //   return this.http.get<Hero[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<Hero>(`getHero id=${id}`))
  //     );
  // }