import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    loadChildren: () => import('./admin-main/admin-main.module').then((m) => m.AdminMainModule)
  },
  {
    path: 'user/:userId',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  {
    path: 'hire_employee',
    loadChildren: () => import('./hire-employee/hire-employee.module').then((m) => m.HireEmployeeModule)
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
export class ContentRoutingModule { }
