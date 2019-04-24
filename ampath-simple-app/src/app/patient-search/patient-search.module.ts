import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientSearchRoutingModule } from './patient-search-routing.module';
import { PatientSearchComponent } from './patient-search.component';

@NgModule({
  declarations: [PatientSearchComponent],
  imports: [
    CommonModule,
    PatientSearchRoutingModule
  ]
})
export class PatientSearchModule { }
