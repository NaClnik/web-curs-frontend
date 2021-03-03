import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HireEmployeeComponent} from './hire-employee.component';
import {SharedModule} from '../../../../shared/shared.module';
import {HireEmployeeRoutingModule} from './hire-employee-routing.module';
import { SelectImageComponent } from './select-image/select-image.component';



@NgModule({
  declarations: [HireEmployeeComponent, SelectImageComponent],
  imports: [
    CommonModule,
    SharedModule,
    HireEmployeeRoutingModule
  ]
})
export class HireEmployeeModule { }
