import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientSearchComponent } from './patient-search.component';

const routes: Routes = [
  {
    path:'',
    component: PatientSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientSearchRoutingModule { }
