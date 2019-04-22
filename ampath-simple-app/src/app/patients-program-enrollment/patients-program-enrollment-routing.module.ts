import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsProgramEnrollmentComponent } from './patients-program-enrollment.component';

const routes: Routes = [
  {
    path:'',
    component: PatientsProgramEnrollmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsProgramEnrollmentRoutingModule { }
