import { FlightsService } from './../../core/services/flights.service';
import { FlightFormComponent } from './../flight-form/flight-form.component';
import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})
export class NewFlightComponent {
  @ViewChild('flightForm') flightForm: FlightFormComponent;

  constructor(
    private dialogRef: MatDialogRef<NewFlightComponent>,
    private toast: MatSnackBar,
    private flightService: FlightsService
  ) { }

  createFlight(): void {
    console.log(this.flightForm);
    this.flightService.addFlight(this.flightForm.form.value)
      .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
  }

  private onCreatingSuccess(): void {
    this.dialogRef.close();
    this.toast.open('Flight has been successfully created!', '', { panelClass: 'toast-success' });
  }

  private onCreatingFailure(error: any): void {
    console.log('błąd');
    this.toast.open(error.message, '', { panelClass: 'toast-error' });
  }
}
