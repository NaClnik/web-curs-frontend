import {Component, Input, OnInit, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {IErrorResponse} from '../../shared/interfaces/IErrorResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit{
  constructor(
    private readonly fb: FormBuilder,
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {
  }

  public error: IErrorResponse;
  public formGroup: FormGroup;

  public ngOnInit(): void {
    this.error = {
      hasError: false,
      message: ''
    };

    this.formGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    }); // formGroup.
  } // ngOnInit.

  public login(): void {
    this.loginService.tryWriteApiTokenToLocalStorage(this.formGroup.value).subscribe(data => {
      if (data.hasError){
        this.error = data;
        console.log(this.error);
      } else {
        this.router.navigate([data.redirect_to]);
      } // if.
    });
  } // login.
} // LoginComponent.
