import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminMainComponent} from './admin-main.component';
import {AdminMainRoutingModule} from './admin-main-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import {UsersService} from '../services/users.service';
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  declarations: [AdminMainComponent, UsersTableComponent],
  imports: [
    AdminMainRoutingModule,
    SharedModule
  ],
  providers: [

  ] // providers.
})
export class AdminMainModule { }
