import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {EMPTY, Observable, of, Subject} from 'rxjs';
import {IErrorResponse} from '../../shared/interfaces/IErrorResponse';

@Injectable()
export class LoginService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public tryWriteApiTokenToLocalStorage({email, password}): Observable<IErrorResponse|any>{
    localStorage.clear();
    return this.http.post('/auth/login', {email, password})
      .pipe(
        tap((data: any) => {
          localStorage.setItem('api_token', data.api_token);
        }),
        catchError(err => {
          return of({
            hasError: true,
            message: err.error.error
          });
        }));
  } // getTokenAndRedirect.
} // LoginService.
