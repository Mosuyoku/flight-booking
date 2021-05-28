import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent
  ],
  exports: [
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class CoreModule { }
