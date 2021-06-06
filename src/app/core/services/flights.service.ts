import { Flight } from './../../models/flight.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private API_URL = '/flights';
  constructor(private db: AngularFireDatabase) { }

  getFlights(): Observable<Flight[]> {
    return this.db.list<Flight>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(flight => this.assignKey(flight))));
  }

  addFlight(flight: Flight): any {
    return this.db.list(this.API_URL).push(flight);
  }

  private assignKey(flight: any): any {
    return { ...flight.payload.val(), key: flight.key };
  }
}
