import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hire-employee',
  templateUrl: './hire-employee.component.html',
  styleUrls: ['./hire-employee.component.scss']
})
export class HireEmployeeComponent implements OnInit {

  constructor(
    private readonly fb: FormBuilder
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
  register() {

  }
}
