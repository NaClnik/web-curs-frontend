import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HireEmployeeComponent} from './hire-employee.component';
import {SharedModule} from '../../../../shared/shared.module';
import {HireEmployeeRoutingModule} from './hire-employee-routing.module';
import { SelectImageComponent } from './select-image/select-image.component';
import {ImageCropperModule} from 'ngx-image-cropper';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { CompleteRegisterModalComponent } from './complete-register-modal/complete-register-modal.component';
import {MatDialog} from '@angular/material/dialog';



@NgModule({
  declarations: [HireEmployeeComponent, SelectImageComponent, CompleteRegisterModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    HireEmployeeRoutingModule,
    ImageCropperModule,
    ReactiveFormsModule
  ],
  providers:[
    FormBuilder,
    MatDialog
  ]
})
export class HireEmployeeModule { }
