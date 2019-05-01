import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:'hiv-care-lib',
        loadChildren:'./hiv-care-lib/hiv-care-lib.module#HivCareLibModule'
    },
    {
        path:'patient-search',
        loadChildren:'./patient-search/patient-search.module#PatientSearchModule'
    },
    {
        path:'patients-program-enrollment',
        loadChildren:'./patients-program-enrollment/patients-program-enrollment.module#PatientsProgramEnrollmentModule'
    },
    {
        path:'home-page',
        loadChildren:'./home-page/home-page.module#HomePageModule'
    },
    {
        path: '',
        redirectTo: '/home-page',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule {}