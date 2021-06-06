import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  form: FormGroup;
  jobs = [
    { label: 'Stewardess', value: 'stewardess' },
    { label: 'Senior Cabin Crew', value: 'senior_cabin_crew' },
    { label: 'Pilot', value: 'pilot' },
    { label: 'Co-Pilot', value: 'co_pilot' },
    { label: 'Mechanic', value: 'mechanic' }
  ];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  get crew(): any {
    return this.form.get('crew') as FormArray;
  }

  removeCrewMember(i: number): void {
    this.crew.removeAt(i);
  }

  addCrewMember(): void {
    this.crew.push(this.buildCrewMember());
  }

  buildCrewMember(): any {
    return this.formBuilder.group({
      name: '',
      job: ''
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      origin: ['', { validators: [Validators.required] }],
      destination: ['', { validators: [Validators.required] }],
      departureTime: ['', { validators: [Validators.required] }],
      returnTime: ['', { validators: [Validators.required] }],
      code: ['SK', { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(7)] }],
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array([this.buildCrewMember()])
    });
  }
}
