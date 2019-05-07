import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsProgramEnrollmentRoutingModule } from './patients-program-enrollment-routing.module';
import { PatientsProgramEnrollmentComponent } from './patients-program-enrollment.component';

@NgModule({
  declarations: [PatientsProgramEnrollmentComponent],
  imports: [
    CommonModule,
    PatientsProgramEnrollmentRoutingModule
  ]
})
export class PatientsProgramEnrollmentModule { }
