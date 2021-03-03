import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HireEmployeeComponent} from './hire-employee.component';

export const routes: Routes = [
  {
    path: '',
    component: HireEmployeeComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HireEmployeeRoutingModule { }
