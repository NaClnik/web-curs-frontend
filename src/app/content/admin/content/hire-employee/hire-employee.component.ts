import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../services/users.service';
import {MatDialog} from '@angular/material/dialog';
import {CompleteRegisterModalComponent} from './complete-register-modal/complete-register-modal.component';

@Component({
  selector: 'app-hire-employee',
  templateUrl: './hire-employee.component.html',
  styleUrls: ['./hire-employee.component.scss']
})
export class HireEmployeeComponent implements OnInit {

  constructor(
    private readonly fb: FormBuilder,
    private readonly usersService: UsersService,
    private readonly matDialog: MatDialog
  ) { }

  public formGroup: FormGroup;

  public ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      patronymic: ['', [Validators.required]],
      passport: ['', [Validators.required, Validators.pattern(/^[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ]{2}\d{6}$/)]],
      salary: ['', [Validators.required, Validators.min(500), Validators.max(10000000)]]
    })
  } // ngOnInit.

  public openImageModal(): void {
    // TODO: Сделать модальное окно с обрезкой фото.
  } // openImageModal.
  public register(): void {
    this.formGroup.value.photo_path = 'https://via.placeholder.com/250';
    // console.log(this.formGroup.value);
    this.usersService.registerEmployee(this.formGroup.value).subscribe(value => {
      console.log(value);
      this.matDialog.open(CompleteRegisterModalComponent);
    })
  } // register.
}
