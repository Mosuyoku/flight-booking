import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';



@NgModule({
  declarations: [
    FlightsComponent,
    FlightCardComponent
  ],
  exports: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class FlightsModule { }
