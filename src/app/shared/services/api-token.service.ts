import { Injectable } from '@angular/core';
import {IRoleResponse} from '../interfaces/IRoleResponse';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiTokenService {
  private readonly itemTitle = 'api_token'

  constructor(
    private readonly http: HttpClient
  ) {
  }

  public getApiToken(): string|null{
    return localStorage.getItem(this.itemTitle);
  } // getApiToken.

  public removeApiToken(): void{
    localStorage.removeItem(this.itemTitle);
  } // removeApiToken.

  public getRoleByApiToken(): Observable<IRoleResponse | null>{
    const token = this.getApiToken();

    console.log(token);
    if(!token){
      return of(null);
    } // if.

    return this.http.get('/currentUser/role')
      .pipe(
        catchError(err => {
          return of(null);
        })
      );
  } // getRoleByApiToken.
}
