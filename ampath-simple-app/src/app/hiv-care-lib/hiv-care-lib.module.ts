import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HivCareLibRoutingModule } from './hiv-care-lib-routing.module';
import { ClinicFlowComponent } from './clinic-flow/clinic-flow.component';

@NgModule({
  declarations: [ClinicFlowComponent],
  imports: [
    CommonModule,
    HivCareLibRoutingModule
  ]
})
export class HivCareLibModule { }
