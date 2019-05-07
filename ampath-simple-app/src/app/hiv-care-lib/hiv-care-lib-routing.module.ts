import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicFlowComponent } from './clinic-flow/clinic-flow.component';

const routes: Routes = [
  {
    path:'',
    component: ClinicFlowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HivCareLibRoutingModule { }
