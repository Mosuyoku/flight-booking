import { Flight } from './../../models/flight.model';
import { FlightFormComponent } from './../flight-form/flight-form.component';
import { FlightsService } from './../../core/services/flights.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent implements AfterViewInit {
  @ViewChild('flightForm') flightForm: FlightFormComponent;
  flight: Flight;

  constructor(
    private route: ActivatedRoute,
    private toast: MatSnackBar,
    private router: Router,
    private flightsService: FlightsService
  ) { }

  ngAfterViewInit(): void {
    this.loadFlight();
  }

  editFlight(): void {
    this.flightsService.editFlight(this.flight.key, this.flightForm.form.value)
      .then(this.onEditSuccess.bind(this), this.onFailure.bind(this));
  }

  removeFlight(): void {
    this.flightsService.removeFlight(this.flight.key)
      .then(this.onRemoveSuccess.bind(this), this.onFailure.bind(this));
  }

  private onEditSuccess(): void {
    this.router.navigate(['/dashboard']);
    this.toast.open('Flight has been successfully edited', '', { panelClass: 'toast-success' });
  }

  private onRemoveSuccess(): void{
    this.router.navigate(['/dashboard']);
    this.toast.open('Flight has been successfully removed', '', { panelClass: 'toast-success' });
  }

  private onFailure(error: any): void {
    this.toast.open(error.message, '', { panelClass: 'toast-error' });
  }

  private loadFlight(): void {
    const key = this.route.snapshot.params['key'];
    this.flightsService.getFlight(key)
      .pipe(tap(flight => this.flightForm.setFlight(flight)))
        .subscribe(flight => this.flight = flight);
  }
}
