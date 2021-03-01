import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApiTokenService} from './shared/services/api-token.service';
import {RedirectComponent} from './redirect/redirect.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RedirectComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./content/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'employee',
    loadChildren: () => import('./content/employee/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule),
  },
]; // routes.

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
