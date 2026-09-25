import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { FacilityDetailComponent } from './pages/facility-detail/facility-detail.component';
import { InspectionFormComponent } from './pages/inspection-form/inspection-form.component';
import { InspectionHistoryComponent } from './pages/inspection-history/inspection-history.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'facilities/:id', component: FacilityDetailComponent },
  { path: 'inspections/new', component: InspectionFormComponent },
  { path: 'inspections/history', component: InspectionHistoryComponent },
  { path: 'complaints', component: ComplaintsComponent },
  { path: '**', redirectTo: 'dashboard' }
];
