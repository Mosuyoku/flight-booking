import { Flight } from './../models/flight.model';
import { FlightsService } from './../core/services/flights.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewFlightComponent } from './new-flight/new-flight.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {
  flights$: Observable<Flight[]> = this.flightsService.getFlights();

  constructor(
    private flightsService: FlightsService,
    private dialog: MatDialog
  ) { }

  openNewFlightModal(): void {
    this.dialog.open(NewFlightComponent);
  }
}
