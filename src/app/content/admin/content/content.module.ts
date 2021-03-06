import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentRoutingModule} from './content-routing.module';
import { UserComponent } from './user/user.component';
import {UsersService} from './services/users.service';
import { HireEmployeeComponent } from './hire-employee/hire-employee.component';



@NgModule({
  declarations: [],
  imports: [ContentRoutingModule],
  providers: [
    UsersService
  ]
})
export class ContentModule { }
