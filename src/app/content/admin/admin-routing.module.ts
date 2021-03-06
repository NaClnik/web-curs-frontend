import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    loadChildren: () => import('./content/content.module').then((m) => m.ContentModule),
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
export class AdminRoutingModule { }
