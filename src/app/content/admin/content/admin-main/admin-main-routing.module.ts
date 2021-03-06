import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminMainComponent} from './admin-main.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminMainComponent,
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
export class AdminMainRoutingModule { }
