import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApiTokenService} from './shared/services/api-token.service';
import {RedirectComponent} from './redirect/redirect.component';
import {AdminGuard} from './shared/auth/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RedirectComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./content/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard]
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
