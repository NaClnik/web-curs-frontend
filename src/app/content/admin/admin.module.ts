import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    AdminComponent,
    AdminSidenavComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
