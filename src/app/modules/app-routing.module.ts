import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from '../components/departments/departments.component';
import { TimesheetComponent } from '../components/timesheet/timesheet.component';
import { AnalyticsTableComponent } from '../components/analytics-table/analytics-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'analytics', component: AnalyticsTableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}